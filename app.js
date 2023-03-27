
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer'

/**
 * 
 * Header
 *  - Logo
 *  - Nav Items
 *  - Cart
 * 
 * Body
 *  - Search Bar
 *  - Restarunt card
 *     - Image
 *     - Name
 *     - Ratings
 *     - Category
 * 
 * Footer
 *  - copyright
 *  - About us
 * 
 * 
 */

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}
// React Component


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)