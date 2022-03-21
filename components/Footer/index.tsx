import React from 'react';
import s from './footer.module.scss'

import Link from 'next/link'

import logo from '@/public/navigation/logo.svg'
import aleskeroffLogo from '@/public/logos/aleskeroff.svg'
import Container from "@/components/Container"

import facebookIcon from '@/public/icons/facebook_black.svg'
import instagramIcon from '@/public/icons/instagram_black.svg'
import youtubeIcon from '@/public/icons/youtube_black.svg'

function Footer() {

    const navList = [
        {
            text: 'Оборудование',
            link: '/'
        },
        {
            text: 'Косметика',
            link: '/'
        },
        {
            text: 'Новости',
            link: '/'
        },
        {
            text: 'Контакты',
            link: '/'
        },
        {
            text: 'О компании',
            link: '/'
        },
    ]

    return (
        <footer className={s.footer}>
            <Container>
                <div className={s.footer__content}>
                    <div className={s.footer__top}>
                        <div className={s.top__logo}>
                            <img src={logo.src} alt=""/>
                        </div>

                        <div className={s.top__nav}>
                            {navList.map(({text, link}, i) => (
                                <Link key={`${link}_${i}`} href={link}>
                                    <a className={s.nav__item}>{text}</a>
                                </Link>
                            ))}
                        </div>

                        <p className={s.top__phone}>8 (800) 485 28 42</p>
                    </div>

                    <div className={s.footer__contacts}>
                        <div className={s.contacts__geolocation}>
                            <p className={s.geolocation__item}>г. Москва, ул. Пресненский Вал, д. 14, корп. 2</p>
                            <p className={s.geolocation__item}>
                                <strong>Время работы: пн-пт: 9:30 - 18:30, сб-вс: выходные дни</strong>
                            </p>
                        </div>

                        <a href="mailto: info@bella-systech.ru" className={s.contacts__email}>info@bella-systech.ru</a>

                        <div className={s.contacts__socials}>
                            <a className={s.socials__item} href={'/'}>
                                <img src={facebookIcon.src} alt=""/>
                            </a>

                            <a className={s.socials__item} href={'/'}>
                                <img src={instagramIcon.src} alt=""/>
                            </a>

                            <a className={s.socials__item} href={'/'}>
                                <img src={youtubeIcon.src} alt=""/>
                            </a>
                        </div>
                    </div>

                    <div className={s.footer__bottom}>
                        <div className={s.bottom__copyright}>
                            <span className={s.copyright__text}>Copyright © 2012-2018 Bella-systech</span>

                            <Link href={'/'}>
                                <a className={s.copyright__link}>Пользовательское соглашение</a>
                            </Link>
                        </div>

                        <div className={s.bottom__digital}>
                            <img src={aleskeroffLogo.src} alt=""/>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;