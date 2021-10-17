import React, { useState } from 'react';
import { Button, Col, Container, Form, Offcanvas, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useFoods from '../../hooks/usefoods';
import RestFood from '../RestFood/RestFood';


const Details = () => {
    const {id}=useParams();
    const {foods}=useFoods()
    const food=foods?.find(food=>food.id===id);
    const restFoods=foods?.filter(food=>food.id!==id);
    const {title,image,details,price}=food?food:{};
    const [quantity,setQuantity]=useState(1);
    const [prices,setPrices]=useState(0)
    const [show, setShow] = useState(false);
    
    
    const handleCart=(e)=>{
        let quantity=e.target.value;
        setQuantity(quantity)  
    }
    
    const handleClose = () => setShow(false);
    const handleShow = (e) =>{
        e.preventDefault()
        console.log(e.target.value)
        setShow(true);
        const prices=quantity*food?.price;
        setPrices(prices)
        food.quantity=quantity;
        
    };

       return (
        <div>
            <Container>
            <Row className="align-items-center">
                <Col>
                    <h1>{title}</h1>
                    <p>{details}</p>
                    <h4>Price: ${price}</h4>
                    <Form onSubmit={handleShow}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>How many items do you want?</Form.Label>
                        <Form.Control style={{width:'100px', fontWeight:'500'}} onBlur={handleCart} type="number" defaultValue="1" min="1" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add to cart
                    </Button>
                    </Form>
                    <Row>
                        
                    
                        {

                        restFoods.slice(0,6).map(food=><RestFood key={food.id} restfood={food}></RestFood>)
                        }
                    
                        
            
                    </Row>
                </Col>
                <Col>
                    <img src={image} alt="" width="100%" />
                </Col>
            </Row>
            
            </Container>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Your card</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        <h5>Total items: {food?.quantity?food.quantity:0}</h5>
                        <br />
                        <p>Total: ${prices?prices:price} </p>
                        <p>Shipping: $15 </p>
                        <p>tax: ${prices?prices*0.1:'00'} </p>
                        <p>Grand Total: ${prices?prices+(prices*0.1)+15:'00'}</p>
                        <Link to='/shopping'>
                            <Button>Order Now</Button>
                        </Link>

                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
};

export default Details;