import React, { useState, useEffect } from 'react';
import Header from './layout/Header';
import Banner from './layout/Banner';
import Category from './layout/Category';
import Restaurant from './layout/Restaurant';
import { fetchCategories } from '../redux/actions/categoryActions';
import { fetchRestaurants, fetchRestaurantsByCategory } from '../redux/actions/restaurantActions';
import BannerImg1 from '../images/Banner.png';
import BannerImg2 from '../images/Banner1.png';
import { useDispatch, useSelector } from 'react-redux';


const Home = () => {
    const dispatch = useDispatch();
    const { restaurants, loading: loadingRestaurants, error: errorRestaurants } = useSelector(state => state.restaurants);
    const { categories, loading: loadingCategories, error: errorCategories } = useSelector(state => state.categories);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        dispatch(fetchRestaurants());
        dispatch(fetchCategories());
    }, [dispatch]);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        if (category) {
            dispatch(fetchRestaurantsByCategory(category));
        } else {
            dispatch(fetchRestaurants());
        }
    };

    // if (loadingRestaurants || loadingCategories) return <p>Loading...</p>;
    // if (errorRestaurants || errorCategories) return <p>Error occurred</p>;

    return (
        <>
            <Header />
            <div className="container mx-auto">
                <div className="py-8 flex flex-row custom-sm:flex-col justify-between px-6 custom-sm:w-full">
                    <Banner src={BannerImg2} alt="20% Off Banner" />
                    <Banner src={BannerImg1} alt="50% Off Banner" />
                </div>

                <div className="flex flex-wrap justify-between p-4">
                    {categories.map((category) => (
                        <Category
                            key={category.name}
                            category={category.name}
                            icon = {category.imageUrl}
                            onSelect={() => handleCategorySelect(category.name)}
                            isSelected={selectedCategory === category.name}
                        />
                    ))}
                </div>

                <div className="py-8 px-4 md:px-6">
                    <h3 className="text-xl font-bold mb-4">Nearby restaurants</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {restaurants.map((restaurant) => (
                            <Restaurant key={restaurant.id} restaurant={restaurant} categories={categories}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
