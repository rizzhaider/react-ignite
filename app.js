
import React, {lazy, Suspense, useState} from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './src/components/Header';
import Body from './src/components/Body';
import Footer from './src/components/Footer';
import About from './src/components/About';
import Error from './src/components/Error';
import RestaruntMenu from './src/components/RestaurantMenu';
import Profile from './src/components/Profile';
import Shimmer from './src/components/Shimmer';
import UserContext from './src/utils/userContext';
import { Provider } from 'react-redux';
import store from './src/utils/store';

const Instamart = lazy(() => import('./src/components/Instamart'));
const Cart = lazy(() => import('./src/components/Cart'));

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

    const [user, setUser] = useState({
            name:"Rizwan Haider",
            email:"rizwan02riz@gmail.com"
    })

    return (
        <>
        <Provider store={store}>
        <UserContext.Provider value={{
                user:user,
                setUser:setUser
            }}>
            <Header />
            <Outlet />
            <Footer /> 
            </UserContext.Provider>
        </Provider>
            
            
        </>
    )
}
// React Component

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,
                children: [
                    {
                        path: "profile",
                        element: <Profile />
                    }
                ]
            },
            {
                path: "/restaurant/:resId",
                element: <RestaruntMenu />
            },
            {
                path:"/instamart",
                element: <Suspense fallback={<Shimmer />}>
                    <Instamart />
                </Suspense>  
            },
            {
                path:"/cart",
                element:<Suspense fallback={<Shimmer />}>
                    <Cart />
                </Suspense>
            }
        ]
    },


])

const h1 = <h1>Root 2</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
const rootMain = ReactDOM.createRoot(document.getElementById("rootMain"));
rootMain.render(h1)
root.render(<RouterProvider router={appRouter} />)