import React, { useContext, useEffect, useState } from "react";

import classes from './HeaderCartBtn.module.css';
import CartIcon from '../Cart/CartIcon'
import CartContext from "../store/cart-context";

const HeaderCartBtn = props => {
    const [btnHighlighted, setBtnHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;
    const numberOfItems = items.reduce( (currentNum,item) => {
        return currentNum + item.amount;

    }, 0);

    const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ''}`;

    useEffect(()=>{
        if(items.length === 0){
        return;
        }
        setBtnHighlighted(true);

        const timer =  setTimeout(()=>{
            setBtnHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }

    },[items]);


    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon/></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfItems}</span>
            </button>
    );
}

export default HeaderCartBtn;