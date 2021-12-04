import React from 'react'
import { useContext } from 'react'
import { Card, Button, CardGroup } from 'react-bootstrap'
import { CartContext } from './Context/cartContext'

export function Cart() {

    const { cartList, vaciarCarrito } = useContext(CartContext)

    return (
        <>
            {cartList.map(prod =>
                <CardGroup>
                    <Card className='mb-3 mt-3'>
                        <Card.Img src={prod.imgURL} style={{ width: 300 }} className='mx-auto d-block' />
                    </Card >
                    <Card className='mb-3 mt-3' >
                        <Card.Body className='align-middle'>
                            <Card.Title>{prod.title}</Card.Title>
                            <Card.Text>{prod.description}</Card.Text>
                            <Card.Text>{prod.cantidad}</Card.Text>
                            <Card.Subtitle>{prod.price}</Card.Subtitle>
                            <Button className='mt-1 btn btn-info btn-sm' id={prod.id} >X</Button>
                        </Card.Body>
                    </Card >
                </CardGroup>
            )
            }
            <Button className='mb-3' onClick={() => vaciarCarrito()} >Vaciar Carrito</Button>
        </>
    )
}
