import React from 'react';
import Button from "./../Button/Button";
import "./Sales.style.css";

const Sales = ({route,value}) => {
    return (
        <div className="sale">
            <h1>Big Sale!</h1>
        <div className='data-2'>
            <img className="pic" src="https://preview.colorlib.com/theme/shoppers/images/blog_1.jpg" alt="image isloading"/>
            <div className="data-3">
                <h1 className="title-3">50% less in all items</h1>
                <p className="desc">By Carl Smith • September 3, 2018</p>
                <p className='parag'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Quisquam iste dolor accusantium
                     facere corporis ipsum animi deleniti fugiat. Ex, veniam?
                </p>
                <Button route="#" value="Shop Now" />

            </div>
        </div>
        </div>
    );
}
export default Sales