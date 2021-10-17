import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useFoods from '../../hooks/usefoods';
import Breakfast from '../Breakfast/Breakfast';

const Breakfasts = () => {
    const {breakfasts}=useFoods();
    return (
        <div>
            <Container id="breakfast">
                <Row xs={2} md={2} lg={3} >
                    {   
                        breakfasts?.map(food=>
                         <Breakfast
                         key={food.id} 
                         breakfast={food}>   
                         </Breakfast> )

                    }
                </Row>
            </Container>
        </div>
    );
};

export default Breakfasts;