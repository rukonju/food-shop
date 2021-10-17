import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const RestFood = ({restfood}) => {
    return (

        <Col>
        <Link to={`/details/${restfood.id}`}>
        
        <img src={restfood.image} alt="" width="100%" />
        </Link>
        </Col>
    );
};

export default RestFood;