import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo Component
 *  - Nav Items Component
 * Body Component
 *  - Search Component
 *  - Restaurent Container Component
 *     - RestaurentCard Component
 * Footer Component
 *  - Copyright Component
 *  - LinkComponent Component
 *  - Contact
 *  - Address Component
 * 
 */


const HeaderComponent = () =>{
    return(
        <div id="header" className="header" >
            <div>
                <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
            </div>
            <div className="navItem">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Help</li>
                    <li>Cart</li>
                    <li>Signup/Login</li>
                </ul>
            </div>
        </div>
    );
}

const FooterComponent = () =>{
    return(
        <div id="footer-container">
            
        </div>
    );
}

const AppLayout = () => {
    return (
        <div id="app-layout" className="app-layout">

            <HeaderComponent></HeaderComponent>

            <FooterComponent></FooterComponent>

        </div>
    )
}

/*
// Component Coposition
const HeadingComponent = () =>{
    return(
        <div id="parent-container">
            <h1 id="heading" >
                Namaste React functional Components
            </h1>
        </div>
    )
}

const title = (
    <div id="container-component" tabIndex="Hello">
        <h1>Namaste React by Akshay Saini 🚀</h1>
        <HeadingComponent></HeadingComponent>
    </div>
)
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout></AppLayout>);