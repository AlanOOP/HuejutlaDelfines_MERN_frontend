<<<<<<< HEAD

=======
// import React from 'react';
>>>>>>> ae19f65f1bc766fccbe99e6dba83cf5a13ac9c8e
import { Swiper, SwiperSlide } from 'swiper/react';
// import { logos } from '../../constants/images.js';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import imgSlider1 from '../../assets/images/imgSlider1.jpg';
import imgSlider2 from '../../assets/images/imgSlider2.jpg';
import imgSlider3 from '../../assets/images/imgSlider3.jpg';
import imgSlider4 from '../../assets/images/imgSlider4.jpg';
import imgSlider5 from '../../assets/images/imgSlider5.jpg';
import imgSlider6 from '../../assets/images/imgSlider6.jpg';
import imgSlider7 from '../../assets/images/imgSlider7.jpg';



const Galery = () => {

    const imgSlider = [imgSlider1, imgSlider2, imgSlider3, imgSlider4, imgSlider5, imgSlider6, imgSlider7];

    return (
        <div>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    slideShadows: false,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                speed={1000}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                {
                    imgSlider.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img src={item} alt="slider" className='absolute brightness-90' />
                            <div className='relative flex flex-col items-center'>
                                <p className='text-center text-white my-10 text-3xl'>Huejutla Delfines</p>
                                <p className='text-center text-white my-10 text-3xl'>El 09</p>
                            </div>
                        </SwiperSlide>
                    ))
                }



                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>

        </div >
    )
}

export default Galery

