import React from 'react'
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';









function Model() {
    return (
        <div className='container'>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Create Task</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicTaskName">
                            <Form.Label>*Task Name</Form.Label>
                            <Form.Control type="text" />

                        </Form.Group>

                        <Form.Group className="mb-3 " controlId="formBasicProjectName">
                            <Form.Label>Project Name</Form.Label>
                            <DropdownButton variant="light" id="dropdown-basic-button" title="Select Project" className='bg-light border '>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </DropdownButton>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Badge pill bg="light" className='text-dark'>
                        Cancel
                    </Badge>{' '}
                    <Badge pill bg="secondary">
                        Create
                    </Badge>{' '}
                </Modal.Footer>
            </Modal.Dialog>




        </div>
    )
}

export default Model