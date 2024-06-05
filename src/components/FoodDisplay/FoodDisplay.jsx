import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
const FoodDisplay = (menuCategory) => {
    const { food_list } = useContext(StoreContext);

    return (
        <div className="food-display-container">
            <h2>Top dishes near You!</h2>
            <div className="food-item-list">
                {food_list.map((item, index) => {

                    return <FoodItem key={index} item={item} />


                })}
            </div>
        </div>
    );
};

export default FoodDisplay;
