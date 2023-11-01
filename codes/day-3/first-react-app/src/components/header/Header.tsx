import React from 'react'
//import './Header.css'
import classes from "./Header.module.css";
/**
 * CSS Module
 const classes= {
 *   headerstyle:{ 
            background-color: burlywood;
            text-align: center;
            font-family: "Courier New", Courier, monospace;
        },
        another:{},
        xyz:{}
    }
 */
type HeaderPropType = {
    messageData: string
}
const Header = (args: HeaderPropType) => {

    // const headerStyle = {
    //     backgroundColor: 'burlywood',
    //     fontFamily: "Arial"
    // }
    const mouseOverHandler = () => {
        window.alert('mouse over')
    }
    return (
        <header>
            {/* <h2 style={headerStyle} onMouseOver={mouseOverHandler}> */}
            {/* <h2 className='headerstyle' onMouseOver={mouseOverHandler}> */}
            <h2 className={classes.headerstyle} onMouseOver={mouseOverHandler}>
                {args.messageData}
            </h2>
        </header>
    )
}

export default Header