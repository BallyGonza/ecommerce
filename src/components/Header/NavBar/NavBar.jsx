import React from 'react'
import { NavBar_Item } from './NavBar_Item/NavBar_Item'

export function NavBar() {
    return (
        <nav>
            <ul>
                <NavBar_Item title="Categoria" url="#" />
                <NavBar_Item title="Ofertas" url="#" />
                <NavBar_Item title="Historial" url="#" />
                <NavBar_Item title="Supermercado" url="#" />
                <NavBar_Item title="Moda" url="#" />
                <NavBar_Item title="Vender" url="#" />
                <NavBar_Item title="Ayuda" url="#" />
            </ul>
        </nav>
    )
}
