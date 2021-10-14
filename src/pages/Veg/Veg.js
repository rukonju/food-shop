import React from 'react';
import { Col } from 'react-bootstrap';

const Veg = ({veg}) => {
    const{ title,subtitle,image,price, rating }=veg?veg:{};
    return (
        <Col>
            <div className="m-4 p-3 breakfast">
                <img src={image} alt="" width="70%" />
                <h4>{title}</h4>
                <h6>{subtitle}</h6>
                <p>Rating:{rating}</p>
                <h5>Price: ${price}</h5>
            </div>
        </Col>
    );
};

export default Veg;