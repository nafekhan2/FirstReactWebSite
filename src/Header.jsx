import React from 'react';
import logo from 'D:/BootstrapAndReactJS/bootstrap-demo/src/Images/coffee.png';


function Header() {
    return (
        <>
            <div className="header">
                <img src={logo} alt='logo' width="60" height="60"/>
                <h1>Coffee Day Keep</h1>
            </div>
        </>
    );
}

export default Header;