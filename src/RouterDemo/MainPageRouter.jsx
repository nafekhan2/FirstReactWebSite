import React from 'react';
import {Route,Switch} from 'react-router-dom';
import About from './About';
import ContactUs from './ContactUs';

const MainPageRouter=()=>{

    return(
        <>
        <About/>
        <ContactUs/>
        </>
    );
}
export default MainPageRouter;