import React, {createRef, useState} from 'react';
import s from "./intro-section.module.scss";
import Container from "@/components/Container";

import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination, Controller, Navigation} from 'swiper'

import Link from "next/link"

//IMAGES
import girlImg from '@/public/main_page/intro/1.png'
import LaserPicoplusImage from '@/public/main_page/intro/slider/laser_picoplus.png'
import lutronicLogo from '@/public/main_page/intro/slider/lutronic_logo.svg'
import SliderRightArrow from '@/public/main_page/intro/arrow-right.svg'
import SliderLeftArrow from '@/public/main_page/intro/arrow-left.svg'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Button from "@/components/Button";

SwiperCore.use([Pagination,Controller,Navigation])

function Intro() {
    const [controlledSwiper, setControlledSwiper] = useState<SwiperCore>();
    const [controlledSecondSwiper, setControlledSecondSwiper] = useState<SwiperCore>();

    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    const firstSliderContent = [
        {
            logoImg: lutronicLogo.src,
            suptitle: 'Пикосекундный лазер',
            title: "PICOPLUS",
            text: 'Мощность и универсальность для продвинутых методов лечения сложных случаев',
            link: '/'
        },
        {
            logoImg: lutronicLogo.src,
            suptitle: 'Пикосекундный лазер',
            title: "PICOPLUS",
            text: 'Мощность и универсальность для продвинутых методов лечения сложных случаев',
            link: '/'
        },
        {
            logoImg: lutronicLogo.src,
            suptitle: 'Пикосекундный лазер',
            title: "PICOPLUS",
            text: 'Мощность и универсальность для продвинутых методов лечения сложных случаев',
            link: '/'
        },
        {
            logoImg: lutronicLogo.src,
            suptitle: 'Пикосекундный лазер',
            title: "PICOPLUS",
            text: 'Мощность и универсальность для продвинутых методов лечения сложных случаев',
            link: '/'
        },
        {
            logoImg: lutronicLogo.src,
            suptitle: 'Пикосекундный лазер',
            title: "PICOPLUS",
            text: 'Мощность и универсальность для продвинутых методов лечения сложных случаев',
            link: '/'
        },
        {
            logoImg: lutronicLogo.src,
            suptitle: 'Пикосекундный лазер',
            title: "PICOPLUS",
            text: 'Мощность и универсальность для продвинутых методов лечения сложных случаев',
            link: '/'
        }
    ]

    const secondSliderContent = [
        LaserPicoplusImage,LaserPicoplusImage,LaserPicoplusImage,LaserPicoplusImage,LaserPicoplusImage,LaserPicoplusImage
    ]

    return (
        <section className={s.intro}>
            <Container>
                <div className={s.intro__content}>
                    <div className={s.content__info}>
                        <h3 className={s.intro__innovations}>Инновационные решения <br/> для эстетической медицины</h3>

                        <div className={s.sliders}>
                            <div className={s.sliders__content}>
                                <div className={`${s.slider_container} ${s.slider_container_text}`}>
                                    <Swiper
                                        modules={[Controller]}
                                        className={`${s.info__slider} ${s.info__slider_text}`}
                                        slidesPerView={1}
                                        loopedSlides={1}
                                        onSlideChange={() => console.log('slide change')}
                                        onSwiper={setControlledSecondSwiper}
                                        loop={true}
                                        initialSlide={1}
                                        centeredSlides={true}
                                        speed={1300}
                                        controller={{ control: controlledSwiper }}
                                        pagination={{
                                            clickable: true,
                                            type: 'bullets',
                                            el: s.info__slider__pagination,
                                            bulletElement: 'div',
                                            bulletClass: `${s.pagination__item}`,
                                            bulletActiveClass: `${s.pagination__item_active}`,
                                            renderBullet: function (index, className) {
                                                return '<div class="' + className + '">*</div>';
                                            }
                                        }}
                                    >
                                        {firstSliderContent.map(({logoImg,suptitle,title,text,link},i)=>(
                                            <SwiperSlide key={`${title}_${suptitle}_${i}`} className={s.info__slider__slide}>
                                                <img className={s.slide__logo} src={logoImg}/>
                                                <h3 className={s.slide__suptitle}>{suptitle}</h3>
                                                <h2 className={s.slide__title}>{title}</h2>
                                                <div className={s.slide__grey}>
                                                    <p className={s.slide__text}>{text}</p>
                                                    <Link href={link}>
                                                        <a>
                                                            <Button className={s.slide__btn} variant={"gradient"}>Подробнее</Button>
                                                        </a>
                                                    </Link>
                                                </div>


                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>

                                <div className={s.slider_container}>
                                    <Swiper
                                        modules={[Controller,Navigation]}

                                        className={`${s.info__slider} ${s.info__slider_image}`}
                                        slidesPerView={1}
                                        loopedSlides={1}
                                        onSlideChange={() => console.log('slide change')}
                                        loop={true}
                                        initialSlide={1}
                                        centeredSlides={true}
                                        speed={1300}
                                        controller={{ control: controlledSecondSwiper }}

                                        navigation={{
                                            prevEl: navigationPrevRef.current,
                                            nextEl: navigationNextRef.current,
                                        }}
                                        onSwiper={setControlledSwiper}

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
                                        {secondSliderContent.map((image,i)=>(
                                            <SwiperSlide key={`${image}_${i}`} className={s.info__slider__slide}>
                                                <img src={image.src}/>
                                            </SwiperSlide>
                                        ))}

                                        <button className={`${s.slider_arrow} ${s.slider_arrow_prev}`} ref={navigationPrevRef}>
                                            <img src={SliderRightArrow.src} />
                                        </button>
                                        <button className={`${s.slider_arrow} ${s.slider_arrow_next}`} ref={navigationNextRef}>
                                            <img src={SliderLeftArrow.src} />
                                        </button>

                                    </Swiper>
                                </div>
                            </div>
                            <div
                                className={`${s.info__slider__pagination} swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal`}></div>
                        </div>

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