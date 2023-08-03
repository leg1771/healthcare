import React, { lazy, Suspense,useState } from 'react';
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import FindId from './pages/FindId'
import Sign1 from './pages/Sign1'
import Main from './pages/Main'

const Router = () => {


    return (
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/findid' element={<FindId />} />
                    <Route path='/sign1' element={<Sign1 />} />
                    <Route path='/main' element={<Main />} />
                </Routes>
            </BrowserRouter>
        )
    
};

export default Router;