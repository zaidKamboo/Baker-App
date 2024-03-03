import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
    const slides = [
        { image: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80', title: 'tit1' },
        { image: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80', title: 'tit1=2' },
        { image: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80', title: 'tit22' },
    ];
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        if (slider) {
            const interval = setInterval(() => {
                slider.slickNext();
            }, 2500); // Adjust autoplay delay (5 seconds)

            return () => clearInterval(interval);
        }
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        pauseOnFocus: true,
    };

    return (
        <div className="w-screen h-1/2 overflow-hidden pt-5">
            <Slider {...settings} ref={sliderRef} className='h-full'>
                {slides.map((slide, index) => (
                    <div key={index} className="lg:h-[60vh] width-[80vw]  ">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col h-[100%] w-full justify-center items-center"
                        >
                            <div className='h-[70vh]  gap-5 lg:w-[60vw] md:2/3 w-[90vw] rounded-lg overflow-hidden bg-red-50'>
                                <img src={slide.image} alt={slide.title} className="w-full h-full max-h-full max-w-full object-cover rounded-lg" />
                            </div>
                            <h2 className="py-5">{slide.title}</h2>
                        </motion.div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
