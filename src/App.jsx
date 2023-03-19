import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import "./App.style.css";
import items from './utils/data';
import Header from "./components/header/Header";
import Services from './components/services/Services';
import Catalogue from "./components/Catalogue/Catalogue";
import Features from './components/Features/Features';

const  App = ()  => {

  return (
    <div className="App">
      <NavBar  items={items}/>
      <Header />
      <div className='boxes'>
        <Services icon_val="fa-solid fa-recycle" title="FREE SHIPPING" />
        <Services icon_val="fa-solid fa-recycle" title="FREE RETURNS"  />
        <Services icon_val="fa-solid fa-recycle" title="CUSTOMER SUPPORT"  />
      </div>
      <hr className='trait'/>
      <div className='catalogue'>
        <Catalogue  imageSrc="https://images.pexels.com/photos/9456567/pexels-photo-9456567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" title="Collections" type="Men"/>
        <Catalogue  imageSrc="https://images.pexels.com/photos/9776009/pexels-photo-9776009.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" title="Collections" type="Women"/>
        <Catalogue  imageSrc="https://images.pexels.com/photos/6480049/pexels-photo-6480049.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" title="Collections" type="Child"/>
      </div>
      <Features />
    </div>
  );
}

export default App;
