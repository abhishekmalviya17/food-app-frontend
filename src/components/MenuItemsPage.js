import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './layout/Header';
import { fetchMenuItems } from '../redux/actions/menuItemActions';
import { addToCart, increaseQuantity, decreaseQuantity, fetchCart, removeFromCart } from '../redux/actions/cartActions';
import { TrashIcon } from '@heroicons/react/outline'; // Import icon

const MenuItemsPage = () => {
  const { restaurantId } = useParams();
  const dispatch = useDispatch();
  const { menuItems, loading, error } = useSelector((state) => state.menuItems);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchMenuItems(restaurantId));
    dispatch(fetchCart()); // Fetch the cart when the component mounts
  }, [dispatch, restaurantId]);

  const handleQuantityChange = (menuItemId, change) => {
    if (change > 0) {
      dispatch(increaseQuantity(menuItemId));
    } else if (change < 0) {
      dispatch(decreaseQuantity(menuItemId));
    }
    dispatch(fetchCart()); // Fetch updated cart after quantity change
  };

  const handleRemoveFromCart = (menuItemId) => {
    dispatch(removeFromCart(menuItemId));
    dispatch(fetchCart()); // Fetch updated cart after removal
  };

  const getItemQuantity = (menuItemId) => {
    
    const item = cart.items.find(item => item.menuItem._id === menuItemId);

    return item ? item.quantity : 0;
  };

  if (loading) return <div className="text-center my-5">Loading...</div>;
  if (error) return <div className="text-center my-5 text-red-500">Error: {error}</div>;

  return (
    <>
      <Header />
      <div className="container mx-auto my-8 px-4">
        <h2 className="text-2xl font-bold mb-6">Menu Items</h2>
        <div className="divide-y divide-gray-200">
          {cart&&menuItems && menuItems.map((item) => (
            <div key={item._id} className="py-4 flex justify-between items-center">
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
              <div className="flex items-center">
                <button onClick={() => handleQuantityChange(item._id, -1)} disabled={getItemQuantity(item._id) <= 0}>-</button>
                <span className="mx-2">{getItemQuantity(item._id)}</span>
                <button onClick={() => handleQuantityChange(item._id, 1)}>+</button>
                {getItemQuantity(item._id) > 0 && (
                  <TrashIcon onClick={() => handleRemoveFromCart(item._id)} className="ml-2 h-5 w-5 text-red-500 cursor-pointer" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuItemsPage;
