import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Body from "./components/Body";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Error from "./components/Error";
import FavouriteRestaurants from "./components/FavouriteRestaurants";
import Header from "./components/Header";
import RestaurantMenu from "./components/RestaurantMenu";
// import UserContext from "./utils/UserContext";
import { createContext } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const reactelement=<h1>this is h1 tag</h1>
const root=ReactDOM.createRoot(document.getElementById('root'));

// root.render(reactelement);
    // const resData={
    //     info:{
    //         name:"xyz",
    //         areaName:"Ind"
    //     }
    // }
    
const Grocery=lazy(()=>import("./components/Grocery"));
export const Context = createContext();
const Appcontainer=()=>{
    const[userInfo,SetuserInfo]=useState();
    useEffect(()=>{
    const data={
        name:"Harshita Paliwal"
    }
    SetuserInfo(data.name)
    },[])
    

    return(
        <Provider store={appStore}>
        {/* <UserContext.Provider value={{LoggedInUser:userInfo}}> */}
        <Context.Provider value="Deviprasath">
        <div className="app">
            <Header/>
            <div className="mt-[150px]">
            <Outlet/>
            </div>
        </div>
        {/* </UserContext.Provider> */}
        </Context.Provider>
        </Provider>
    )
}    

const approuter=createBrowserRouter([
    {
        path:"/",
        element:<Appcontainer/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<AboutUs/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/favourite",
                element:<FavouriteRestaurants/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            }
        ]
    },
])

root.render(<RouterProvider router={approuter}/>)
