import React, {createRef, useRef} from 'react'
// NEXT COMPONENTS
import Image from 'next/image'
import Link from 'next/link'
// CUSTOM COMPONENTS
import Container from "@/components/Container"
import Button from "@/components/Button"
// IMAGES
import LogoImg from '@/public/navigation/logo.svg'
import SearchImg from '@/public/navigation/search.svg'
import FirstPixelsImg from '@/public/navigation/menu/first_pixels.svg'
import SecondPixelsImg from '@/public/navigation/menu/second_pixels.svg'
import FacebookIcon from '@/public/navigation/menu/icon_facebook.svg'
import InstagramIcon from '@/public/navigation/menu/icon_instagram.svg'
import YoutubeIcon from '@/public/navigation/menu/icon_youtube.svg'
//STYLES
import s from "./navbar.module.scss"

interface Props {

}

function NavBar(props: Props) {
    const {} = props

    const menuRef = createRef<HTMLDivElement>();

    const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.currentTarget.classList.toggle(`${s.contacts__burger_active}`);

        menuRef.current && menuRef.current.classList.toggle(`${s.menu_active}`);

    }

    const navLinks = [
        {text:'Оборудование',link:'/'},
        {text:'Косметика',link:'/'},
        {text:'Новости',link:'/'},
        {text:'Контакты',link:'/'},
        {text:'О нас',link:'/'}
    ]

    const contactLinks = [
        {src: FacebookIcon, link: '/'},
        {src: InstagramIcon, link: '/'},
        {src: YoutubeIcon, link: '/'}
    ]

    return (
        <Container>
            <div className={s.navbar}>
                <div className={s.navbar__info}>
                    <Image
                        className={s.info__logo}
                        src={LogoImg}
                        width={280}
                    />

                    <div className={s.info__text}>Лазерное и косметологическое оборудование, профессиональная косметика, PRP-пробирки</div>
                </div>

                <div className={s.navbar__contacts}>
                    <Image
                        className={s.info__logo}
                        src={SearchImg}
                        width={30}
                        height={30}
                    />

                    <span className={s.contacts__phone}>8 (800) 485 28 42</span>

                    <Button className={s.contacts__button} variant={"gradient"}>Получить консультацию</Button>

                    <button onClick={clickHandler} className={s.contacts__burger}>
                        <span className={`${s.burger__line} ${s.burger__line_first}`}></span>
                        <span className={`${s.burger__line} ${s.burger__line_second}`}></span>
                    </button>
                </div>
            </div>

            <div ref={menuRef} className={s.nav_menu}>
                <Container className={s.nav_menu__container}>
                    <div className={s.nav_menu__content}>
                        <div className={s.content__links}>
                            {navLinks.map(({text,link},i)=>(
                                <Link href={link} key={`${link}_${i}`}>
                                    <a className={s.links__item}>{text}</a>
                                </Link>
                            ))}
                        </div>

                        <img
                            className={s.content__first_pixels}
                            src={FirstPixelsImg.src}
                        />

                        <img
                            className={s.content__second_pixels}
                            src={SecondPixelsImg.src}
                        />

                        <div className={s.content__contacts}>
                            <h4 className={s.contacts__title}>8 (800) 485 28 42</h4>
                            <p className={s.contacts__text}>info@bella-systech.ru</p>
                            <p className={s.contacts__text}>г. Москва, ул. Пресненский Вал, д. 14, корп. 2</p>

                            <div className={s.contacts__links}>
                                {contactLinks.map(({src,link},i)=>(
                                    <a className={s.links__item} key={`${link}_${i}`} href={link}>
                                        <Image src={src}/>
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>
                </Container>
            </div>
        </Container>
    )
}

export default NavBar