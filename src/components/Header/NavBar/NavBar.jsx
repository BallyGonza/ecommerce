import React from 'react'
import { Widget } from '../../Widgets/CartWidget'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

export function Nav_Bar() {

    const navigate = useNavigate()

    const handlerOnClick = (e) => {
        navigate(`/Categoria/${e.target.id}`)
    }

    return (
        <Navbar bg="light" expand='lg' variant="light" className='mb-3'>
            <Container>
                <Link to='/Home'>
                    <Navbar.Brand>
                        <img
                            alt=""
                            src="https://logodownload.org/wp-content/uploads/2019/08/funko-logo-1.png"
                            width="120"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                </Link>
                <Nav className="me-auto">
                    <Nav.Link><Link to='/Home' style={{ textDecoration: "none", color: "black" }}>Home</Link></Nav.Link>
                    <Nav.Link><Link to='/Catalogue' style={{ textDecoration: "none", color: "black" }}>Catalogue</Link></Nav.Link>
                    <Dropdown>
                        <Dropdown.Toggle variant="white">
                            Categorias
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item id='Marvel' onClick={handlerOnClick}>Marvel</Dropdown.Item>
                            <Dropdown.Item id='Disney' onClick={handlerOnClick}>Disney</Dropdown.Item>
                            <Dropdown.Item id='CartoonNetwork' onClick={handlerOnClick}>Cartoon Network</Dropdown.Item>
                            <Dropdown.Item id='Playstation' onClick={handlerOnClick}>PlayStation</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Nav.Link><Link to='/Help' style={{ textDecoration: "none", color: "black" }}>Help</Link></Nav.Link>
                </Nav>
                <Link to='/Cart'>
                    <Widget className='d-flex' icon={faShoppingCart} />
                </Link>
            </Container>
        </Navbar >
    )
}
