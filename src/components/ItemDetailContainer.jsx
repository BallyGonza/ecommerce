import React from 'react'
import productsList from '../utils/products.json'
import { Container } from 'react-bootstrap'
import { ItemDetail } from './ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


export function ItemDetailContainer() {

    const [products, setProducts] = useState([])
    const { id } = useParams();


    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productsList);
            }, 2000);
        });

        // TODO: reject

    }

    useEffect(() => {
        getProducts().then(prod => setProducts(prod))
        return () => {
            setProducts([])
        }
    }, [])


    return (
        <Container>
            <ItemDetail key={products[id - 1].id} id={products[id - 1].id} imgURL={products[id - 1].imgURL} title={products[id - 1].name} description={products[id - 1].description} price={products[id - 1].price} />
        </Container>
    )
}
