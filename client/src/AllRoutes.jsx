import React from "react";
import {Route, Routes} from "react-router-dom";
import News from "./components/News";
import Login from "../src/components/Login/index"
import Signup from "./components/Singup";
export const AllRoutes=()=>{
    return(
        <Routes>
            <Route exact path="/"  element={<News key="general" pageSize={8} catagory="news"/>}>

            </Route>
            <Route exact path="/business"  element={<News key="business" pageSize={8} catagory="business"/>}>

            </Route>
            <Route exact path="/sports"  element={ <News key="sports" pageSize={8} catagory="sport"/>}>

            </Route>
            <Route exact path="/entertainment"  element={<News key="entertainment" pageSize={8} catagory="entertainment"/>}>

{/* 
            </Route>
            <Route exact path="/health" element={<News key="health" pageSize={8} catagory="health"/>}> */}

            </Route>
            <Route exact path="/science" element={<News key="science" pageSize={8} catagory="science"/>}>

            </Route>
            <Route exact path="/technology" element={ <News key="technology" pageSize={8} catagory="tech"/>}>

            </Route>

            <Route path='/signup' element={<Signup />}/>
            
            <Route path='/login' element={<Login />}/>
        </Routes>
    )
}