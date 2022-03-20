import React from 'react';
//NEXT COMPONENTS
import Image from 'next/image'
//CUSTOM COMPONENTS
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
//IMAGES
import pixelsFirst from '@/public/main_page/about_us/pixels_1.svg'
import pixelsSecond from '@/public/main_page/about_us/pixels_2.svg'
import pixelsThird from '@/public/main_page/about_us/pixels_3.svg'
//STYLES
import s from './about_us.module.scss'

function AboutUsSection() {

    const aboutUsList = [
        {
            img: pixelsFirst,
            text: "10 лет в России"
        },
        {
            img: pixelsSecond,
            text: "Более 700 наших аппаратов представлены в клиниках России"
        },
        {
            img: pixelsThird,
            text: "32 аппарата зарегистрировано нами в Роспотребнадзоре"
        }
    ]

    return (
        <section className={s.about_us}>
            <Container>
                <div className={s.about_us__content}>
                    <SectionTitle>О нас</SectionTitle>

                    <div className={s.content__list}>
                        {aboutUsList.map(({img,text},i)=>(
                            <div key={`${text}_${i}`} className={s.list__item}>
                                <Image className={s.item__img} src={img}/>
                                <p className={s.item__text}>{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default AboutUsSection;