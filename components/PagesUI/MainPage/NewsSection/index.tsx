import React from 'react';
import s from './news.module.scss'
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

import Link from 'next/link'

import firstNewsImg from '@/public/main_page/news/1.png'
import secondNewsImg from '@/public/main_page/news/2.png'
import thirdNewsImg from '@/public/main_page/news/3.png'
import fourthNewsImg from '@/public/main_page/news/4.png'
import newsArrow from '@/public/icons/news_arrow.svg'
import rightArrow from '@/public/icons/arrow-left.svg'


import Button from "@/components/Button";

interface News {
    img: string,
    title: string,
    text: string,
    link: string
}

function NewsSection() {

    const newsList: News[] = [
        {
            img: firstNewsImg.src,
            title: 'Вебинар 15 августа',
            text: '13 августа состоится вебинар на тему: КРЕМА, СЫВОРОТКИ, ТОНИКИ – как разобраться в...',
            link: '/'
        },
        {
            img: secondNewsImg.src,
            title: 'Вебинар 15 августа',
            text: '13 августа состоится вебинар на тему: КРЕМА, СЫВОРОТКИ, ТОНИКИ – как разобраться в...',
            link: '/'
        },
        {
            img: thirdNewsImg.src,
            title: 'Вебинар 15 августа',
            text: '13 августа состоится вебинар на тему: КРЕМА, СЫВОРОТКИ, ТОНИКИ – как разобраться в...',
            link: '/'
        },
        {
            img: fourthNewsImg.src,
            title: 'Вебинар 15 августа',
            text: '13 августа состоится вебинар на тему: КРЕМА, СЫВОРОТКИ, ТОНИКИ – как разобраться в...',
            link: '/'
        }
    ]

    return (
        <section className={s.news}>
            <Container>
                <div className={s.news__content}>
                    <SectionTitle>Новости</SectionTitle>

                    <div className={s.content__list}>
                        {newsList.map(({img,title,text,link},i)=>(
                            <Link href={link} key={`${title}_${i}`}>
                                <a className={s.list__item}>
                                    <img className={s.item__image} src={img}/>

                                    <div className={s.item__info}>
                                        <h4 className={s.info__title}>{title}</h4>
                                        <p className={s.info__text}>{text}</p>

                                        <img className={s.info__arrow} src={newsArrow.src} alt=""/>
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </div>
                    <Link href={'/'}>
                        <a>
                            <Button variant={"outlined"} className={s.content__btn} mainColor={'#848484'} secondaryColor={"#fff"}>
                                Все новости
                                <img className={s.btn__arrow} src={rightArrow.src}/>
                            </Button>
                        </a>
                    </Link>
                </div>
            </Container>
        </section>
    );
}

export default NewsSection;