import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Catalogue } from './components/Pages/Catalogue/catalogue'
import { Main } from './components/Pages/Main/main'
import { Nav_Bar } from './components/Header/NavBar/NavBar'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import CartContextProvider from './components/Context/cartContext'
import { Cart } from './components/Cart'


export function AppRouter() {
    return (
        <CartContextProvider>
            <Router>
                <Nav_Bar />
                <Routes>
                    <Route path="/Home" element={<Main />} />
                    <Route exact path="/Catalogue" element={<Catalogue />} />
                    <Route path="/Catalogue/:id" element={<ItemDetailContainer />} />
                    <Route path="/Cart" element={<Cart />} />
                    <Route exact path="/" element={<Main />} />
                </Routes>
            </Router >
        </CartContextProvider>
    )
}
