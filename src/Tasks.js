import React from 'react'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';




function Tasks() {
    return (

        <div className='container'>
            <Card>
                <Card.Header>
                    <Container fluid="sm">
                        <Row>
                            <Col>Task ID</Col>
                            <Col>Task Name</Col>
                            <Col>Project</Col>
                            <Col>Comments</Col>
                            <Col>Task Edit</Col>
                            <Col>Task Delete</Col>

                        </Row>
                    </Container>
                </Card.Header>
                <Card.Body>
                    <Container fluid="sm">
                        <Row>
                            <Col>1</Col>
                            <Col>Task Name1</Col>
                            <Col>Java Project</Col>
                            <Col>Comments Added 1</Col>
                            <Col><Button variant="outline-dark" >Edit</Button></Col>
                            <Col><Button variant="outline-dark">Delete</Button></Col>

                        </Row>
                        <Row>
                            <Col>2</Col>
                            <Col>Task Name2</Col>
                            <Col>Python Project</Col>
                            <Col>Comments Added 2</Col>
                            <Col><Button variant="outline-dark" >Edit</Button></Col>
                            <Col><Button variant="outline-dark">Delete</Button></Col>

                        </Row>
                        <Row>
                            <Col>3</Col>
                            <Col>Task Name3</Col>
                            <Col>DevOps Project</Col>
                            <Col>Comments Added 3</Col>
                            <Col><Button variant="outline-dark" >Edit</Button></Col>
                            <Col><Button variant="outline-dark">Delete</Button></Col>

                        </Row>
                    </Container>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Tasks