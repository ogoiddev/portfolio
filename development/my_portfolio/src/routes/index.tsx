import React from 'react';
import { Routes, Route } from "react-router-dom";
// import Hall from '../pages/Hall/index';
import Home from '../pages/Home/index';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
  )
}

export default AppRoutes;