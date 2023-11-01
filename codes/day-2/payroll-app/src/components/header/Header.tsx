//import { createElement } from 'react'
import React from "react";

export default function Header() {
    //data
    const welcomeMessage = 'Welcome to React JS'
    //styles
    // const styles = {
    //     backgroundColor: "burlywood",
    //     textAlign: "center"
    // }
    //event-handler
    const clickEventHandler = () => {
        window.alert('event fired')
    }

    //design
    // const headerDesign = createElement(
    //     'h2',
    //     {
    //         id: 'mainHeader',
    //         style: {
    //             backgroundColor: 'burlywood',
    //             textAlign: 'center'
    //         },
    //         onMouseOver: { clickEventHandler }
    //     },
    //     welcomeMessage
    // )

    const headerDesign = (
        <h2
            id='mainHeader'
            style={
                {
                    backgroundColor: "burlywood",
                    textAlign: "center"
                }
            }
            onMouseOver={clickEventHandler}
        >

            {welcomeMessage}
        </h2>
    )

    return headerDesign
}