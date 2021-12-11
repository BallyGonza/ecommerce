import { React, useState, useContext } from 'react'
import { Container, Card, Button, CardGroup, InputGroup, FormControl } from 'react-bootstrap'
import { CartContext } from './Context/cartContext'

export function ItemDetail(props) {

    const { cartList, agregarProducto, addProduct, removeProduct, count } = useContext(CartContext)


    function onAdd() {
        agregarProducto(props)
        console.log(cartList)
    }

    return (
        <Container>
            {/* <Card className='mb-3' style={{ width: 300 }}>
                <Card.Img src={props.imgURL} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                    <Card.Subtitle>{props.price}</Card.Subtitle>
                    <Button className='mt-1 btn btn-info btn-sm' id={props.id} onClick={() => onAdd(1)}>Agregar al Carrito</Button>
                </Card.Body>
            </Card > */}
            <CardGroup>
                <Card className='mb-3 mt-3'>
                    <Card.Img src={props.imgURL} style={{ width: 300 }} className='mx-auto d-block' />
                </Card >
                <Card className='mb-3 mt-3' >
                    <Card.Body className='align-middle'>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>{props.description}</Card.Text>
                        <Card.Text>{props.cantidad}</Card.Text>
                        <Card.Subtitle>{props.price}</Card.Subtitle>
                        <InputGroup.Text > {count}
                            {/* {cartList.find(itemBuscado => itemBuscado.id == props.id) ?
                            <Button variant="outline-secondary" disabled onClick={() => removeProduct()}>-</Button> : <> <Card.Text>{count}</Card.Text>  <Button variant="outline-secondary" onClick={() => removeProduct()}>-</Button></>}
                        {cartList.find(itemBuscado => itemBuscado.id == props.id) ? <Button variant="outline-secondary" disabled onClick={() => addProduct()}>+</Button> : <Button variant="outline-secondary" onClick={() => addProduct()}>+</Button>} */}
                            <Button variant="outline-secondary" onClick={() => removeProduct()}>-</Button>
                            <Button variant="outline-secondary" onClick={() => addProduct()}>+</Button>
                        </InputGroup.Text>
                        <Button className='mt-1 btn btn-info btn-sm' id={props.id} onClick={() => onAdd(1)}>Agregar al Carrito</Button>
                    </Card.Body>
                </Card ></CardGroup>
        </Container>
    )
}
