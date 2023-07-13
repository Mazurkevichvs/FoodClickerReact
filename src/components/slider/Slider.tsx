import React from "react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css'
import './Slider.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

const Slider:React.FC = () => {
    const slides: JSX.Element[] = [];
    for(let i = 1; i < 5; i++) {
        slides.push(
            <SwiperSlide className="swiper-slide"
            key={`slide-${i}`}>
                <img src={`img/img_slider${i}.png`} alt="food"></img>
            </SwiperSlide>
        )
    }

    return(  
        <section className="swiper">
            <Swiper className="swiper-wrapper" 
            slidesPerView={1}
            navigation
            pagination = {{clickable: true}}
            speed={600}
            loop
            autoplay
            >               
                {slides}                                           
            </Swiper>   
        </section>
    )
}

export default Slider;