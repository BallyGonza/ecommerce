import { React, useEffect, useContext } from 'react'
import { Container, Card, Button, CardGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { CartContext } from './Context/cartContext'

export function ItemDetail(props) {

    const { cartList, agregarProducto, addProduct, removeProduct, count, setCount } = useContext(CartContext)

    useEffect(() => {

        return () => {
            setCount(1)
        }
    }, [])

    function onAdd() {
        agregarProducto(props)
    }

    const navigate = useNavigate()

    return (
        <Container>
            <CardGroup>
                <Card className='mb-3 mt-3'>
                    <Card.Img src={props.imgURL} style={{ width: 300 }} className='mx-auto d-block' />
                </Card >
                <Card className='mb-3 mt-3' >
                    <Card.Body className='align-middle'>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text className='fst-italic'>{props.description}</Card.Text>
                        <Card.Subtitle className='mb-3 fst-italic'>${props.price}</Card.Subtitle>
                        {cartList.find(itemBuscado => itemBuscado.id == props.id) ?
                            <><Card.Text className='fw-bold' style={{ color: 'green' }}>Ya tenes este producto en tu carrito.</Card.Text><Button className='mt-2 btn btn-sm' style={{ marginRight: 10 }} variant="primary" onClick={() => navigate(`/Catalogue`)} >Volver a Catalogo</Button><Button className='mt-2 btn btn-sm' variant="success" onClick={() => navigate(`/Cart`)} >Ir al Carrito</Button></> : <> <Card.Text className='pt-3 fw-bold'>Cantidad: {count}</Card.Text>  <Button variant="outline-secondary" className='m-1' onClick={() => removeProduct()}>-</Button><Button variant="outline-secondary" className='m-1' onClick={() => addProduct()}>+</Button><Button className=' p-2 m-2 btn btn-sm' id={props.id} variant='success' onClick={() => onAdd(1)}>Agregar al Carrito</Button></>}
                    </Card.Body>
                </Card >
            </CardGroup>
        </Container >
    )
}
