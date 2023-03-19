import React from 'react';
import "./Services.style.css";

const Services = ({icon_val,title}) => {
    return (
        <div className='box'>
            <i  className={icon_val+" "+"icona"}></i>
            <div className='child-box'>
                <h3>{title}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
                </p>
            </div>
        </div>
    );
}

export default Services