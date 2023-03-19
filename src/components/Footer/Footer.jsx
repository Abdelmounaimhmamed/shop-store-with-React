import React from 'react'
import Button from "./../Button/Button";
import "./Footer.style.css"

const Footer = () => {
    return(
        <div className='footer'>
            <div className='parent-1'>
                <div className='parent-1A'>
                    <h1 className='titre'>Navigations</h1>
                    <div className='lists'>
                        <ul className='list-1'>
                            <li>Sell online</li>
                            <li>Sell online</li>
                            <li>Sell online</li>
                            <li>Sell online</li>
                        </ul>
                        <ul className='list-1'>
                            <li>Sell online</li>
                            <li>Sell online</li>
                            <li>Sell online</li>
                        </ul>
                        <ul className='list-1'>
                            <li>Sell online</li>
                            <li>Sell online</li>
                            <li>Sell online</li>
                        </ul>
                    </div>
                </div>
                <div className='parent-1B'>
                    <h1 className='titre'>Promo</h1>
                    <img className='image' src="https://preview.colorlib.com/theme/shoppers/images/blog_1.jpg"/>
                    <h2 className='titre'>Finding Your Perfect Shoes</h2>
                    <p className='parag'>Finding Your Perfect Shoes</p>
                </div>
                <div className='parent-1C'>
                    <h1>Contact Info</h1>
                    <div className='icon-comp'><i class="fa-solid fa-recycle"></i>  <span>203 Fake St. Mountain View, San Francisco, California, USA</span></div>
                    <div className='icon-comp'><i class="fa-solid fa-recycle"></i>  <span>+212618757791</span></div>
                    <div className='icon-comp'><i class="fa-solid fa-recycle"></i>  <span>hmamedabdelmounaime@gmail.com</span></div>
                    <h3 className='titre'>Subscribe</h3>
                    <div className=''>
                        <input type="email" required placeholder='email please' />
                        <Button route="#" value="send" />
                    </div>
                </div>

            </div>
        <div className='parent-2'>
            <p className='copyright'>Copyright ©2023 All rights reserved | This template is made with  by Abdelmounaim hmamed</p>
        </div>
        </div>
    );
}
export default Footer;