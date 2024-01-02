import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './layout/Header';
import { fetchMenuItems } from '../redux/actions/menuItemActions';
import { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/actions/cartActions';
import { TrashIcon } from '@heroicons/react/outline';
import Loader from './common/Loader';

const MenuItemsPage = () => {
  const { restaurantId } = useParams();
  const dispatch = useDispatch();
  const { menuItems, loading, error } = useSelector((state) => state.menuItems);
  const cart = useSelector((state) => state.cart);
  const [menuItemLoading, setMenuItemLoading] = useState(0);

  useEffect(() => {
    dispatch(fetchMenuItems(restaurantId));
  }, [dispatch, restaurantId]);

  const handleQuantityChange = (menuItemId, change) => {
    setMenuItemLoading(menuItemId);
    if (change > 0) {
      dispatch(increaseQuantity(menuItemId));

    } else if (change < 0) {
      dispatch(decreaseQuantity(menuItemId));
    }
    // Removed fetchCart call here
  };

  const handleRemoveFromCart = (menuItemId) => {
    setMenuItemLoading(menuItemId);
    dispatch(removeFromCart(menuItemId));
    // Removed fetchCart call here
  };

 

  const itemQuantities = useMemo(() => {
    const quantities = {};
    cart.items.forEach(item => {
      quantities[item.menuItem._id] = item.quantity;
    });
    return quantities;
  }, [cart.items]);

  const getItemQuantity = (menuItemId) => {
    return itemQuantities[menuItemId] || 0;
  };

  const loader = () => {
    return  (<div className="flex justify-center items-center">
    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900"></div>
  </div>)
  }

  const isLoading = (item) => {
   return ((menuItemLoading === item._id)&&(cart.loading))
   
  }

  if (loading) return <Loader />;
  if (error) return <div className="text-center my-5 text-red-500">Error: {error}</div>;

  return (
    <>
      <Header />
      <div className="container mx-auto my-8 px-4">
        <h2 className="text-2xl font-bold mb-6">Menu Items</h2>
        <div className="divide-y divide-gray-200">
          {menuItems.map((item) => (
            <div key={item._id} className="py-4 flex justify-between items-center">
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
             {isLoading(item)?loader():<div className="flex items-center">
                <button onClick={() => handleQuantityChange(item._id, -1)} disabled={getItemQuantity(item._id) <= 0}>-</button>
                <span className="mx-2">{getItemQuantity(item._id)}</span>
                <button onClick={() => handleQuantityChange(item._id, 1)}>+</button>
                {getItemQuantity(item._id) > 0 && (
                  <TrashIcon onClick={() => handleRemoveFromCart(item._id)} className="ml-2 h-5 w-5 text-red-500 cursor-pointer" />
                )}
              </div> }
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuItemsPage;
