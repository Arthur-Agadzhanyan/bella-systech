import React from 'react';
import s from "./intro-section.module.scss";
import Container from "@/components/Container";

import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination} from 'swiper'

//IMAGES
import girlImg from '@/public/main_page/intro/1.png'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Pagination])

function Intro() {

    return (
        <section className={s.intro}>
            <Container>
                <div className={s.intro__content}>
                    <div className={s.content__info}>
                        <h3 className={s.intro__innovations}>Инновационные решения <br/> для эстетической медицины</h3>

                        <Swiper
                            className={s.content__slider}
                            slidesPerView={1}
                            loopedSlides={1}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            loop={true}
                            initialSlide={1}
                            centeredSlides={true}
                            speed={1300}
                            slideActiveClass={s.slide_active}
                            pagination={{
                                clickable: true,
                                type: 'bullets',
                                el: ".swiper-pagination-clickable",
                                bulletElement: 'div',
                                bulletClass: `${s.pagination__item}`,
                                bulletActiveClass: `${s.pagination__item_active}`,
                                renderBullet: function (index, className) {
                                    return '<div class="' + className + '">*</div>';
                                }
                            }}
                        >
                            <SwiperSlide className={s.info__slider__slide}>
                                ggg
                            </SwiperSlide>

                            <SwiperSlide className={s.info__slider__slide}>
                                ggg
                            </SwiperSlide>

                            <SwiperSlide className={s.info__slider__slide}>
                                ggg
                            </SwiperSlide>

                            <SwiperSlide className={s.info__slider__slide}>
                                ggg
                            </SwiperSlide>
                        </Swiper>

                        <div className={`${s.info__slider__pagination} swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal`}></div>
                    </div>

                    <div className={s.content__girl}>
                        <img src={girlImg.src} alt=""/>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Intro;