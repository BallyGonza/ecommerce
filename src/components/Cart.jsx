import React from 'react'
import { useContext } from 'react'
import { Card, Button, CardGroup } from 'react-bootstrap'
import { CartContext } from './Context/cartContext'
import { useNavigate } from 'react-router'

export function Cart() {

    const { cartList, vaciarCarrito, item, total, setCartList, setTotal, setTotalItemsCarrito, totalItemsCarrito } = useContext(CartContext)

    function deleteItem(item, cartList) {
        const index = cartList.indexOf(cartList.find(itemBuscado => itemBuscado.id == item.id))
        setCartList(cartList.slice(0, index).concat(cartList.slice(index + 1)))
        setTotal(total - (item.price * item.cant))
        setTotalItemsCarrito(totalItemsCarrito - item.cant)
    }

    const navigate = useNavigate()


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
                            <Card.Text>{prod.description}</Card.Text>
                            <Card.Text>{prod.cantidad}</Card.Text>
                            <Card.Subtitle>${prod.price} * {prod.cant} = ${prod.price * prod.cant}</Card.Subtitle>
                            <Button className='mt-1 btn btn-info btn-sm' id={prod.id} onClick={() => deleteItem(prod, cartList)} >X</Button>
                        </Card.Body>
                    </Card >
                </CardGroup>
            )
            }
            <Button className='mb-3' onClick={() => vaciarCarrito()} >Vaciar Carrito</Button>
            <Card><Card.Title>Total: ${total}</Card.Title></Card>
        </> : <Card><Card.Title>No posee productos en su carrito.</Card.Title>
            <Button className='mt-1 btn btn-info btn-sm' onClick={() => navigate(`/Catalogue`)} >Volver a Catalogo</Button>

        </Card>
    )
}
