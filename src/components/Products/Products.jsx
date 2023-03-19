import React from 'react'
import "./Products.style.css"


const Products = ({data_p}) => {
    return (
      <div className='boxes'>
        {data_p.map((ele) => 
          <div className='prod-box'>
            <img className='img' src={ele.img} />
            <h2 className='title-1'>{ele.title}</h2>
            <p className='desc'>{ele.desc}</p>
            <h2 className='Price'>{ele.price}</h2>
          </div> 
        )}
      </div>
    );
};

export default Products;