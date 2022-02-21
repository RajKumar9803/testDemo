import React from 'react'
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';


function Brand() {
    return (
        <>
            <Navbar variant="light" bg="secondary" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home" className='text-light'>Company Name</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-dark-example" />
                    <Navbar.Collapse id="navbar-dark-example">

                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>

    )
}

export default Brand