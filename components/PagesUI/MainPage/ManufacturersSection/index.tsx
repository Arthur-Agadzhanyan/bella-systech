import React from 'react';
//NEXT COMPONENTS
import Image from 'next/image'
import Link from 'next/link'
//CUSTOM COMPONENTS
import SectionTitle from "@/components/SectionTitle";
//IMAGES
import lutronicLogo from "@/public/logos/lutronic_logo.svg"
//STYLES
import s from './manufacturers.module.scss'
import SectionText from "@/components/SectionText";
import Container from "@/components/Container";
import Button from "@/components/Button";

interface Manufacturer {
    img: string,
    title: string,
    text: string,
    link: string
}

function ManufacturersSection(){

    const manufacturersList = [
        {
            img: lutronicLogo,
            title: 'LUTRONIC',
            text: 'Lutronic признана мировым лидером и новатором в разработке и производстве как медицинских лазеров для врачей, стоматологов, так и лазерного оборудования для эстетической косметологии и гинекологии.',
            link: '/'
        },
        {
            img: lutronicLogo,
            title: 'CLASSYS',
            text: 'Компания Classys - производитель высокотехнологичных аппаратов для эстетической косметологии. Разработанные Classys эффективные и безопасные неинвазивные технологии ухода за кожей и для коррекции тела применяются ведущими мировыми специалистами.',
            link: '/'
        },
        {
            img: lutronicLogo,
            title: 'HISTOLAB',
            text: 'Компания Classys - производитель высокотехнологичных аппаратов для эстетической косметологии. Разработанные Classys эффективные и безопасные неинвазивные технологии ухода за кожей и для коррекции тела применяются ведущими мировыми специалистами.',
            link: '/'
        },
        {
            img: lutronicLogo,
            title: 'YCELLBIO',
            text: 'Компания Classys - производитель высокотехнологичных аппаратов для эстетической косметологии. Разработанные Classys эффективные и безопасные неинвазивные технологии ухода за кожей и для коррекции тела применяются ведущими мировыми специалистами.',
            link: '/'
        },
        {
            img: lutronicLogo,
            title: 'SKINWELL',
            text: 'Компания Classys - производитель высокотехнологичных аппаратов для эстетической косметологии. Разработанные Classys эффективные и безопасные неинвазивные технологии ухода за кожей и для коррекции тела применяются ведущими мировыми специалистами.',
            link: '/'
        },
        {
            img: lutronicLogo,
            title: 'BNV biolab',
            text: 'Компания Classys - производитель высокотехнологичных аппаратов для эстетической косметологии. Разработанные Classys эффективные и безопасные неинвазивные технологии ухода за кожей и для коррекции тела применяются ведущими мировыми специалистами.',
            link: '/'
        },
    ]

    return (
        <section className={s.manufacturers}>
            <Container>
                <div className={s.manufacturers__content}>
                    <SectionTitle>Производители</SectionTitle>
                    <div className={s.manufacturers__list}>
                        {manufacturersList.map(({img,title,text,link},i)=>(
                            <Link href={link} key={`${title}_${i}`}>
                                <a className={s.list__item}>
                                    <div className={s.item__top}>
                                        <Image className={s.top__image} src={img}/>
                                    </div>

                                    <hr className={s.item__line}/>

                                    <h3 className={s.item__title}>{title}</h3>
                                    <SectionText className={s.item__text}>{text}</SectionText>

                                    <span className={s.item__link}>Подробнее</span>
                                </a>
                            </Link>

                        ))}
                    </div>
                    <Button className={s.manufacturers__btn} variant={"gradient"}>Получить консультацию</Button>
                </div>
            </Container>
        </section>
    );
}

export default ManufacturersSection;