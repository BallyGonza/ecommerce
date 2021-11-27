import React from 'react'
import { Item } from './Item'
import productsList from '../utils/products.json'
import { Row, Col, CardGroup } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

export function ItemList() {

    const [products, setProducts] = useState([])
    const navigate = useNavigate()


    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productsList);
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

    const handlerOnClick = (e) => {
        navigate(`/Catalogue/${e.target.id}`)
    }

    return (
        <Row className='d-flex justify-content-around'>
            {products.map(product =>
                <Item key={product.id} id={product.id} imgURL={product.imgURL} title={product.name} description={product.description} price={product.price} handlerOnClick={handlerOnClick} />
            )}
        </Row>
    )
}
