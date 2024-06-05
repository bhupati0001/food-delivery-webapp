import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = ({ menuCategory, setMenuCategory }) => {


    return (
        <div className="explore-menu">
            <div className="explore-menu-content">
                <h1>Explore our Menu</h1>
                <p>
                    Explore our menu to find tasty dishes from around the world. Try new
                    flavors or stick to your favorites—we've got something for everyone!
                    Join us and enjoy delicious food that'll make your taste buds happy.
                </p>
            </div>
            <div className="explore-menu-items-container">
                {menu_list.map((item, index) => {
                    return (
                        <div
                            className="explore-menu-item"
                            key={index}
                            onClick={() => setMenuCategory((prev) => prev === item.menu_name ? 'All' : item.menu_name)}
                        >
                            <img
                                src={item.menu_image}
                                alt=""
                                className={menuCategory === item.menu_name ? "active" : ""}
                            />
                            <p>{item.menu_name}</p>
                        </div>
                    );
                })}
            </div>
            <hr />
        </div>
    );
};

export default ExploreMenu;
