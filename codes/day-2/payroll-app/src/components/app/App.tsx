import React from 'react'
import Header from '../header/Header'
import { Footer } from '../footer/Footer'
import Content from '../content/Content'

const App = () => {
    // const headerElemet = Header()
    // const contentElement = Content()
    // const footerElement = Footer()

    return (
        <div>
            {/* {headerElemet} */}
            <Header />
            <br />
            {/* {contentElement} */}
            <Content />
            <br />
            {/* {footerElement} */}
            <Footer />
        </div>
    )
}

export default App