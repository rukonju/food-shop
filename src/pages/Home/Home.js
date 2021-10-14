import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Autoplay} from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import useFoods from '../../hooks/usefoods'
import './Home.css';
import Breakfast from '../Breakfast/Breakfast';
import { Container, Row } from 'react-bootstrap';
import Lunch from '../Lunch/Lunch';
import Dinner from '../Dinner/Dinner';


SwiperCore.use([Autoplay]);

const Home = () => {
    
    const {breakfasts,lunches, dinners}=useFoods();    

    
    
    return (
        <div>
            <Swiper 
                autoplay={{
                    "delay": 5000,
                    "disableOnInteraction": false
                  }}   
                className="swiper"
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides
               /*  onSlideChange={() => console.log("slide change")}
                onSwiper={swiper => console.log(swiper)} */
                >
                <SwiperSlide>
                    <h1 className="header">Welcom to my Food Shop</h1>
                    <img src="./food-banner-3.png" alt="" width="100%"/>
                </SwiperSlide>
                <SwiperSlide>
                    <h1 className="header">Very easy to shop from here</h1>
                    <img src="./food-banner-2.png" alt="" width="100%"/>
                </SwiperSlide>
                <SwiperSlide>
                    <h1 className="header">Find your favorite food</h1>
                    <img src="./bannerbackground.png" alt="" width="100%"/>
                </SwiperSlide>
            </Swiper>

            <div className="text-center">
                <h1>Choose Your Breackfast</h1>
            </div>
            
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

            <div className="text-center">
                <h1>Choose Your Lunch</h1>
            </div>
            <Container>
                <Row xs={2} md={2} lg={3} >
                    {   
                        lunches?.map(food=>
                         <Lunch
                         key={food.id} 
                         lunch={food}>   
                         </Lunch> )

                    }
                </Row>
            </Container>

            <div className="text-center">
                <h1>Choose Your Dinner</h1>
            </div>
            <Container>
                <Row xs={2} md={2} lg={3} >
                    {   
                        dinners?.map(food=>
                         <Dinner
                         key={food.id} 
                         dinner={food}>   
                         </Dinner> )

                    }
                </Row>
            </Container>

        </div>
    );
};

export default Home;