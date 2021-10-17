import React from 'react';
import { Col, Form, Row, Button, Container } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Shopping = () => {
    const {user}=useAuth();
    console.log(user.displayName)
    return (
        <Container className='my-5'>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" defaultValue={user.displayName} />
                    </Form.Group>

                    <Form.Group as={Col} >
                    <Form.Label>Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter phone number" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Agree with privacy and policy" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default Shopping;