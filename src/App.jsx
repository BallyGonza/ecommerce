import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { AppRouter } from './AppRouter'

export function App() {
    return (
        <Container>
            <AppRouter />
        </Container>
    )
}
