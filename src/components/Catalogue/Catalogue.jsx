import React from 'react';
import "./Catalogue.style.css";



const Catalogue = ({imageSrc,title,type}) => {
    return (
        <div className='catal'>
            <img className="image" src={imageSrc} alt="'image ..' " />
            <div className='data'>
                <h3>{title}</h3>
                <h2>{type}</h2>
            </div>
        </div>
    );
}

export default Catalogue;