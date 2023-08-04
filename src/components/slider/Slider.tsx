import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination'
import './slider.css';

const Slider:React.FC = () => {
    const slides: JSX.Element[] = [];
    for(let i = 1; i < 5; i++) {
        slides.push(
            <SwiperSlide className="swiper-slide"
            key={`slide-${i}`}>
                <img src={`./img/img_slider${i}.png`} alt="food"></img>
            </SwiperSlide>
        )
    }

    return(  
        <section className="swiper">
            <Swiper className="swiper-wrapper" 
            slidesPerView={1}
            modules={[Navigation, Pagination]}
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