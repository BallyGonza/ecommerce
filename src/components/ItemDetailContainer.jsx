import React from 'react'
import productsList from '../utils/products.json'
import { Container } from 'react-bootstrap'
import { ItemDetail } from './ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Loading } from './Loading'


export function ItemDetailContainer() {

    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const { id } = useParams();


    const getProducts = () => {
        return new Promise((resolve, reject) => {
            resolve(productsList);
            setTimeout(() => {
                setLoading(false)
            }, 2000);
        });

        // TODO: reject

    }

    useEffect(() => {
        getProducts().then((prod) => setProducts(prod))
        return () => {
            setProducts([])
        }
    }, [])

    if (loading) {
        return (
            <Container>
                <Loading />
            </Container>
        )
    }
    else {
        return (
            <>
                <ItemDetail key={products[id].id} id={products[id].id} imgURL={products[id].imgURL} title={products[id].name} description={products[id].description} price={products[id].price} />
            </>
        )
    }
}
