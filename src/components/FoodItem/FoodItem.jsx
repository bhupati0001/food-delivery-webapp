import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ item }) => {

    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className='food-item-container'>
            <div className="food-item-img-container">
                <img className='food-img' src={item.image} alt="" />
                {
                    !cartItems[item._id]
                        ? <img className='add-item' src={assets.add_icon_white} alt='add icon' onClick={() => addToCart(item._id)} />
                        : <div className="manage-count">
                            <img onClick={() => addToCart(item._id)} src={assets.add_icon_green} alt="" />
                            <p>{cartItems[item._id]}</p>
                            <img onClick={() => removeFromCart(item._id)} src={assets.remove_icon_red} alt="" />
                        </div>
                }
            </div>
            <div className="food-item-description">
                <div className="food-item-rating">
                    <p>{item.name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p>{item.description}</p>
                <p> &#8377; {item.price}</p>
            </div>
        </div>
    )
}

export default FoodItem