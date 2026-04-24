import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from '../Components/Layout/MainLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Careers from '../pages/Careers'
import Contact from '../pages/Contact'
import SingleService from '../pages/SingleService'

const AppRouters = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/career' element={<Careers />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/services/:id' element={<SingleService />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouters