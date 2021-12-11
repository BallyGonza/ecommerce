import React from 'react'
import { Widget } from '../../Widgets/CartWidget'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export function Nav_Bar() {
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
                    <Nav.Link><Link to='/Help' style={{ textDecoration: "none", color: "black" }}>Help</Link></Nav.Link>
                </Nav>
                <Link to='/Cart'>
                    <Widget className='d-flex' icon={faShoppingCart} />
                </Link>
            </Container>
        </Navbar >
    )
}
