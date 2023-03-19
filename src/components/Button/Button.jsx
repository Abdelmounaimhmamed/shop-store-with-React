import React from 'react';
import "./Buton.style.css";

const Button = ({route,value}) => {
    return(
        <a href={"/"+route} className='btn'>{value}</a>
    );
};


export default Button ;