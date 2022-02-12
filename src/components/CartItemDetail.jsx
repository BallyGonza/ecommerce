import { React, useEffect, useState } from 'react'
import { useContext } from 'react'
import { CartContext } from './Context/cartContext'
import { Card, Button, CardGroup } from 'react-bootstrap'


export function CartItemDetail({ prod }) {

    const { cartList, vaciarCarrito, item, total, setCartList, setTotal, setTotalItemsCarrito, totalItemsCarrito, addProduct, removeProduct, restarProdOrden, sumarProd } = useContext(CartContext)

    const [quantity, setQuantity] = useState(0)

    // let cantidad = prod.cant

    useEffect(() => {
        setQuantity(prod.cant)
    }, [])


    function deleteItem(item, cartList) {
        const index = cartList.indexOf(cartList.find(itemBuscado => itemBuscado.id == item.id))
        setCartList(cartList.slice(0, index).concat(cartList.slice(index + 1)))
        setTotal(total - (item.price * item.cant))
        setTotalItemsCarrito(totalItemsCarrito - item.cant)
    }

    let restarProd = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
            restarProdOrden(prod.id)
            setTotal(total - prod.price)
        }
    }

    let sumarProducto = () => {
        setQuantity(quantity + 1)
        sumarProd(prod.id)
        setTotal(total + prod.price)
    }

    return (
        <CardGroup>
            <Card className='mb-3 mt-3'>
                <Card.Img src={prod.imgURL} style={{ width: 300 }} className='mx-auto d-block' />
            </Card >
            <Card className='mb-3 mt-3' >
                <Card.Body className='align-middle'>
                    <Card.Title>{prod.title}</Card.Title>
                    <Card.Text className='fst-italic'>{prod.description}</Card.Text>
                    <Card.Subtitle className='fw-bold'>${prod.price}  x{quantity} = ${(prod.price * quantity).toFixed(2)}</Card.Subtitle>
                    <br />
                    <Button variant="outline-secondary" className='m-1' onClick={() => restarProd()}>-</Button>
                    <Button variant="outline-secondary" className='m-1' onClick={() => sumarProducto()}>+</Button>
                    <br />
                    <Button className='mt-3 btn btn-danger btn-sm' id={prod.id} onClick={() => deleteItem(prod, cartList)} >Quitar del carrito.</Button>
                </Card.Body>
            </Card >
        </CardGroup >
    )
}
