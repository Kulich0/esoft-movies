import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import FirstPage from './Pages/FirstPage';
import DetailPage from './Pages/DetailPage';
import SerchPage from './Pages/SerchPage';


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<FirstPage/>} path='/'/>
                <Route element={<DetailPage/>} path='/films/:id'/>
                <Route element={<SerchPage/>} path='/serch'/>
            </Routes>    
        </BrowserRouter>
    );
};

export default AppRouter;