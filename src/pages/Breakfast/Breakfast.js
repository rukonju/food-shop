import React from 'react';
import { Card, Col, Placeholder } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Breakfast.css';

const Breakfast = ({breakfast}) => {
    const{catagory, id, title,subtitle,image,price, rating }=breakfast;
    return (
        <Col>
        {
            breakfast.image?
            <div className="m-4 breakfast text-center">
                <Link to={`/details/${id}`}>
                    <div className="p-3">
                        <p>
                        <span className="catagory">{catagory.toUpperCase()}</span>
                        </p>
                        <img src={image} alt="" width="70%" />
                        <h4>{title}</h4>
                        <h6>{subtitle}</h6>
                        <p>Rating:{rating}</p>
                        <h5>Price: ${price}</h5>
                    </div>
                </Link>
            </div>:
            <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                <Placeholder xs={6} /> <Placeholder xs={8} />
              </Placeholder>
              <Placeholder.Button variant="primary" xs={6} />
            </Card.Body>
          </Card>
        }
            
        </Col>
    );
};

export default Breakfast;