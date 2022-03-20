import React from 'react';
import s from './benefits.module.scss'
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

import serviceIcon from '@/public/icons/teh_service.svg'
import guaranteeIcon from '@/public/icons/guarantee.svg'
import educationIcon from '@/public/icons/education.svg'
import supportIcon from '@/public/icons/support.svg'
import SectionText from "@/components/SectionText";

interface Benefit {
    img: string,
    title: string,
    text: string
}

function BenefitsSection() {
    const benefitsList: Benefit[] = [
        {
            img: serviceIcon.src,
            title: 'Сервис',
            text: 'Собственный авторизованный сервисный центр в г. Москва '
        },
        {
            img: guaranteeIcon.src,
            title: 'Гарантия',
            text: 'Наличие РУ на все поставляемые аппараты '
        },
        {
            img: educationIcon.src,
            title: 'Обучение',
            text: 'Обучение Ваших врачей сертифицированными тренерами Bella Systech при покупке аппарата'
        },
        {
            img: supportIcon.src,
            title: 'Поддержка',
            text: 'Постоянное наличие комплектующих на складе'
        },
    ]

    return (
        <section className={s.benefits}>
            <Container className={s.benefits__container}>
                <div className={s.benefits__content}>
                    <SectionTitle>Наши преимущества</SectionTitle>

                    <div className={s.content__list}>
                        {benefitsList.map(({img,title,text},i)=>(
                            <div key={`${title}_${i}`} className={s.list__item}>
                                <img src={img} className={s.item__image} alt=""/>

                                <div className={s.item__info}>
                                    <h3 className={s.info__title}>{title}</h3>
                                    <SectionText className={s.info__text}>{text}</SectionText>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default BenefitsSection;