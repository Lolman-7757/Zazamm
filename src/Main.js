import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'

function Main() {
    return (
        <BrowserRouter>
            <Header/>
            <main>
                <Routes>
                    <Route index element={<Home/>}></Route>
                </Routes>
            </main>
            <Footer/>
        </BrowserRouter>
    )
}

export default Main