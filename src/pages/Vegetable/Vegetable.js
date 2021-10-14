import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useFoods from '../../hooks/usefoods';
import Veg from '../Veg/Veg';

const Vegetable = () => {
    const {vegetable}=useFoods();
    return (
        <div>
            <Row style={{backgroundColor:"rgba(0,128,0,0.4)", justifyContent:"center", alignItems:"center"}}>
                <Col>
                    <h1 style={{fontSize:"65px", color:"white"}}>Vegetable</h1>
                </Col>
                <Col>
                    <img src="./vegetable-3.png" alt="" width="100%" />
                </Col>
            </Row>
            
            <Container>
                <Row xs={2} md={3} lg={3} >
                    {   
                        vegetable?.map(veg=><Veg key={veg.id} veg={veg}></Veg>)

                    }
                </Row>
            </Container>
        </div>
    );
};

export default Vegetable;