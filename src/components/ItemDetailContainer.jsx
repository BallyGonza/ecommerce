import React from 'react'
import productsList from '../utils/products.json'
import { getFirebase, getFirestore } from './Firebase/firebase'
import { Container } from 'react-bootstrap'
import { ItemDetail } from './ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Loading } from './Loading'
// import { getFirestore, QuerySnapshot } from '@firebase/firestore'


export function ItemDetailContainer() {

    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const { id } = useParams();


    // const getProducts = () => {
    //     return new Promise((resolve, reject) => {
    //         resolve(productsList);
    //         setTimeout(() => {
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

    // useEffect(() => {
    //     setLoading(true)
    //     const db = getFirestore()
    //     const productsCollection = db.collection("productos")
    //     const product = productsCollection.doc(id)

    //     product.get()
    //         .then(doc => {
    //             if (!doc.exists) { console.log(''); return; }
    //             setProducts({ id: doc.id, ...doc.data() })
    //             console.log(doc.data());
    //         })
    //         .catch((error) => {
    //             console.log('Error Searching Items', error)
    //         }).finally(() => {
    //             setLoading(false)
    //         })
    // }, []);

    useEffect(() => {
        setLoading(true)
        const db = getFirestore()
        const itemCollection = db.collection("productos")
        itemCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('No results!')
            }
            setProducts(querySnapshot.docs.map(doc => doc.data()).sort((a, b) => a.id - b.id))

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
            <>
                <ItemDetail key={products[id].id} id={products[id].id} imgURL={products[id].imgURL} title={products[id].name} description={products[id].description} price={products[id].price} />
            </>
        )
    }
}
