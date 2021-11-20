import React from 'react'
import { Header } from './components/Header/Header'
import { Main } from './components/Pages/Main/main'
import { ItemListContainer } from './components/ItemListContainer'

export function App() {
    return (
        <div>
            <Header />
            <Main />
            <ItemListContainer />
        </div>
    )
}
