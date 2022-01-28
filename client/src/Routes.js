import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login";

export default function Routes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={Login}/>
            </Routes>
        </BrowserRouter>
    )
}