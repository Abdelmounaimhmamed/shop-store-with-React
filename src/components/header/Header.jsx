import React from "react";
import "./Header.style.css";
import Button from "../Button/Button";

const Header = () => {
    return (
       <div className="header-compo" >
            <img className="sber" src="sberdila.png" alt=" loading ..." />
            <div className="info">
                <h2>Finding Your Perfect Shoes</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
                </p>
                <Button route="#" value="Shop now"/>
            </div>
       </div>
    )
};


export default Header;