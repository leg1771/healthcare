import React, { lazy, Suspense,useState } from 'react';
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import FindId from './pages/FindId'


const Router = () => {


    return (
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/findid' element={<FindId />} />
                </Routes>
            </BrowserRouter>
        )
    
};

export default Router;