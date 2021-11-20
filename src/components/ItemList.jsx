import React from 'react'
import { Item } from './Item'
import products from '../utils/products.json'

export function ItemList() {

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });

        // TODO: reject

    }

    getProducts().then((products))

    return (
        <ul>
            {products.map(product =>
                <Item id={product.id} imgURL={product.imgURL} title={product.name} description={product.description} price={product.price} />
            )}
        </ul>
    )
}
