import React from 'react';
//NEXT.JS COMPONENTS
import Image from 'next/image'
import Link from 'next/link'
//CUSTOM COMPONENTS
import Button from "@/components/Button";
//IMAGES
import lutronicLogo from '@/public/logos/lutronic_logo.svg'
import classysLogo from '@/public/logos/classys_logo.svg'
//CUSTOM STYLES
import s from './devices-section.module.scss'

interface Device {
    logo: string,
    title: string | string[],
    text: string,
    link: string,
    secondBlock?: boolean
}

function DevicesSection() {

    const devices: Device[] = [
        {
            logo: lutronicLogo,
            title: ['Лазерное', 'и косметологическое оборудование'],
            text: 'Лазерные косметологические аппараты Picoplus, Lasemd, Spectra, Action II, Action II Petit Lady, eCO2, Clarity, Advantage, Healite II, аппарат RF-терапии Infini от мирового лидера — Lutronic',
            link: '/'
        },
        {
            logo: classysLogo,
            title: 'Косметологическое оборудование',
            text: 'Аппарат SMAS-лифтинга Ultraformer, аппарат криолиполиза Clatuu, контурирование тела Ulfit',
            link: '/',
            secondBlock: true
        }
    ]

    return (
        <section className={s.devices}>
            {devices.map(({logo,title,text,link,secondBlock},i)=>(
                <div
                    key={`${title}_${link}_${i}`}
                    className={`${s.devices__item} ${secondBlock ? s.devices__item_classys : ''}`}
                >
                    <div className={s.item__info}>
                        <div className={s.info__container}>
                            <Image
                                src={logo}
                                className={s.info__logo}
                            />
                            <h3  className={`${s.info__title} ${secondBlock ? s.item_classys__title : ''}`}>
                                {
                                    Array.isArray(title)
                                        ?  title.map((elem,i)=>(
                                            <span key={`${elem}_${i}`}>{elem}</span>
                                        ))
                                        : title
                                }
                            </h3>

                            <p className={s.info__text}>{text}</p>
                        </div>

                        <Link href={link}>
                            <a className={s.info__btn}>
                                <Button className={s.info__btn} variant={"gradient"}>Подробнее</Button>
                            </a>

                        </Link>
                    </div>
                </div>
            ))}


        </section>
    );
}

export default DevicesSection;