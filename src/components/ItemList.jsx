import React from 'react'
import { Item } from './Item'
import productsList from '../utils/products.json'
import { getFirebase, getFirestore } from './Firebase/firebase'
import { Row, Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Loading } from './Loading'

export function ItemList() {

    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const navigate = useNavigate()


    // const getProducts = () => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(productsList);
    //             setLoading(false)
    //         }, 2000);
    //     });

    //     // TODO: reject

    // }

    // useEffect(() => {
    //     getProducts().then((prod) => setProducts(prod))
    //     return () => {
    //         setProducts([])
    //     }
    // }, [])

    const handlerOnClick = (e) => {
        navigate(`/Catalogue/${e.target.id}`)
    }

    useEffect(() => {
        setLoading(true)
        const db = getFirestore()
        const itemCollection = db.collection("productos")
        itemCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('No results!')
            }
            else {
                setProducts(querySnapshot.docs.map(doc => doc.data()).sort((a, b) => a.id - b.id))
            }
        }).catch((error) => {
            console.log('Error Searching Items', error)
        }).finally(() => {
            setLoading(false)
        })
    }, []);

    if (loading) {
        return (
            <Container>
                <Loading />
            </Container>
        )
    }
    else {
        return (
            <Row className='d-flex justify-content-around'>
                {products.map(product =>
                    <Item key={product.id} id={product.id} imgURL={product.imgURL} title={product.name} description={product.description} price={product.price} handlerOnClick={handlerOnClick} />
                )}
            </Row>
        )
    }
}
