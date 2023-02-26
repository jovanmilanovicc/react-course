import React from "react";

import mealsImg from '../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartBtn from "./HeaderCartBtn";

const Header = props => {
    return(
        <>
        <header className={classes.header}>
            <h1>Restoran app otp</h1>
            <HeaderCartBtn onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImg} alt="idk"></img>
        </div>
        </>
    );
}

export default Header;