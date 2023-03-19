import React from 'react'
import "./Features.style.css";
import Products from '../Products/Products';


const Features = () => {
    const data = [
        {id : 1 , title : "TAnk Top" , desc : "finding perfect t-shirt" , img : "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" , price : "50$"},
        {id : 2 , title : "Corater" , desc : "finding perfect t-shirt" , img : "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" , price : "50$"},
        {id : 3 , title : "Polo shirt" , desc : "finding perfect t-shirt" , img : "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" , price : "50$"},
        {id : 4 , title : "Mock up" , desc : "finding perfect t-shirt" , img : "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" , price : "50$"}
    ]
    return (
        <div className='features'>
            <h1>Featured Products</h1>
            <div className='Products'>
                <Products data_p={data} />
            </div>
        </div>
    );
}
export default Features;