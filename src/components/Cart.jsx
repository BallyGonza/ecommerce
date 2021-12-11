import React from 'react'
import { useContext } from 'react'
import { Card, Button, CardGroup, Form } from 'react-bootstrap'
import { CartContext } from './Context/cartContext'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import 'firebase/firestore'
import firebase from 'firebase/compat'
import { getFirestore } from 'firebase/firestore'


export function Cart() {

    const [idOrder, setIdOrder] = useState('')

    const { cartList, vaciarCarrito, item, total, setCartList, setTotal, setTotalItemsCarrito, totalItemsCarrito } = useContext(CartContext)

    function deleteItem(item, cartList) {
        const index = cartList.indexOf(cartList.find(itemBuscado => itemBuscado.id == item.id))
        setCartList(cartList.slice(0, index).concat(cartList.slice(index + 1)))
        setTotal(total - (item.price * item.cant))
        setTotalItemsCarrito(totalItemsCarrito - item.cant)
    }

    const navigate = useNavigate()

    // const generarOrden = (e) => {
    //     e.preventDefault()

    //     const orden = {}
    //     orden.date = firebase.firestore.Timestamp.fromDate(new Date());

    //     orden.buyer = { nombre: 'Fede', email: 'f@gmail.com', tel: '21346546' }
    //     orden.total = setTotal

    //     orden.items = cartList.map(cartItem => {
    //         const id = cartItem.id
    //         const nombre = cartItem.id
    //         const precio = cartItem.id

    //         return { id, nombre, precio }
    //     })

    //     const db = getFirestore()
    //     db.collection('orders').add(orden)
    //         .then(resp => setIdOrder(resp.id))
    // }

    return (cartList.length > 0 ?
        <>
            {cartList.map(prod =>
                <CardGroup>
                    <Card className='mb-3 mt-3'>
                        <Card.Img src={prod.imgURL} style={{ width: 300 }} className='mx-auto d-block' />
                    </Card >
                    <Card className='mb-3 mt-3' >
                        <Card.Body className='align-middle'>
                            <Card.Title>{prod.title}</Card.Title>
                            <Card.Text className='fst-italic'>{prod.description}</Card.Text>
                            <Card.Subtitle className='fw-bold'>${prod.price}  x{prod.cant} = ${prod.price * prod.cant}</Card.Subtitle>
                            <Button className='mt-3 btn btn-danger btn-sm' id={prod.id} onClick={() => deleteItem(prod, cartList)} >Quitar del carrito.</Button>
                        </Card.Body>
                    </Card >
                </CardGroup>
            )
            }<CardGroup><Card><Card.Title className='p-2 m-2'>Total:</Card.Title></Card>
                <Card><Card.Title className='d-flex justify-content-end p-2 m-2'>${total}</Card.Title></Card></CardGroup>
            <Button className='mt-3 mb-5 btn-danger' onClick={() => vaciarCarrito()} >Vaciar Carrito</Button>


            <Form onSubmit={'generarOrden'}>
                <Form.Group className="mb-3" controlId="nombre">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control type="text" placeholder="Gonzalo" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="apellido">
                    <Form.Label>Apellido:</Form.Label>
                    <Form.Control type="text" placeholder="Bally" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="telefono">
                    <Form.Label>Telefono:</Form.Label>
                    <Form.Control type="number" placeholder="1160574258" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="text" placeholder="example@mail.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email2">
                    <Form.Label>Repita su Email:</Form.Label>
                    <Form.Control type="text" placeholder="example@mail.com" />
                </Form.Group>
                <Button className='mt-3 mb-5 btn-primary'>Enviar Orden</Button>
            </Form>
        </>
        :
        <><Card className='p-3 mt-3'>
            <Card.Title className='mt-2 d-flex justify-content-md-center'>Su carrito de compras esta vacio.</Card.Title>
        </Card>
            <Button className='mt-2 btn btn-sm' variant="success" onClick={() => navigate(`/Catalogue`)} >Volver a Catalogo</Button>
        </>


    )
}
