import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Autoplay} from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import useFoods from '../../hooks/usefoods'
import './Home.css';
import Breakfast from '../Breakfast/Breakfast';
import { Container, Row, Spinner } from 'react-bootstrap';

SwiperCore.use([Autoplay]);

const Home = () => {
    
    const {foods, breakfasts,lunches,dinners}=useFoods();
    const[food,setFoods]=useState(breakfasts);
    const [isBreakfast, setIsBreakfast]=useState(true);
    const [isLunch, setIsLunch]=useState(false);
    const [isDinner, setIsDinner]=useState(false); 


     const handleFoodType=(name)=>{
         if(name==='breakfast'){
            setIsBreakfast(true)
            setIsLunch(false)
            setIsDinner(false)
            setFoods(breakfasts)

        }
        if(name==='lunch'){
            setIsBreakfast(false)
            setIsLunch(true)
            setIsDinner(false)
            setFoods(lunches)
        }
        if(name==='dinner'){
            setIsBreakfast(false)
            setIsLunch(false)
            setIsDinner(true)
            setFoods(dinners)
        } 
    } 

    if(foods.length){
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
            <div className="text-center my-5 d-flex justify-content-evenly food-type">
                <h3 className={isBreakfast?"active-food-type":"text-dark"} onClick={()=>handleFoodType('breakfast')}>Breakfast</h3>
                <h3 className={isLunch?"active-food-type":"text-dark"} onClick={()=>handleFoodType('lunch')}>Lunch</h3>
                <h3 className={isDinner?"active-food-type":"text-dark"} onClick={()=>handleFoodType('dinner')}>Dinner</h3>
            </div>
            
            
                <Container id="breakfast">
                <Row xs={2} md={2} lg={3} >
                    {
                        !food.length?
                        breakfasts.map(food=>
                         <Breakfast
                         key={food.id} 
                         breakfast={food}>   
                         </Breakfast> ):
                         food.map(food=>
                            <Breakfast
                            key={food.id} 
                            breakfast={food}>   
                            </Breakfast> )
                    }
                </Row>
                </Container>
             
        </div>
    );
    }
    else{
        return (
            <div style={{position:'absolute', left:'50%', top:'50%'}}>
                <Spinner animation="border" variant="primary" />
            </div>
        )
    }
    
};

export default Home;