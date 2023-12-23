import { Route, Router, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { HeaderPage, LoginetHeader } from "./Layout/LoginedHeader";
import { DefaultePage } from "./Page/DefaultePage";
import { LoginPage } from "./Page/Login";
import { Signup } from "./Page/Signup";
import { Acardion } from "./Page/Acardion";
import { TodayPage } from "./Page/Today";
let tokenUser = window.localStorage.getItem("tokenUser")
 export const route = createBrowserRouter(
    createRoutesFromElements(
           [ <Route path="/" element={tokenUser ? <LoginetHeader/> : <DefaultePage/>}>
               <Route path="today" element={<TodayPage/>}/>
           </Route>,
            <Route path="/login" element={<LoginPage/>}/>,
            <Route path="/signup" element={<Signup/>}/>,
            <Route path="/getStart" element={<LoginPage/>}/>,
            <Route path="/Signup" element={<Signup/>}/>,
            <Route path="/Signin" element={<LoginPage/>}/>
         ]
    )
 )