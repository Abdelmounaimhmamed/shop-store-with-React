import React from 'react';
import "./NavBar.style.css";

const NavBar = ({items}) => {
    return (    
       <div className='navbar'>
        <span className="title">Shoppers</span>
        <ul className='ul-ele'>
            {items.map((elt) => (<li key={elt.id}><a href={"/"+elt.value}>{elt.value}</a> </li>))}
        </ul>
       </div>
    );
}

export default NavBar;