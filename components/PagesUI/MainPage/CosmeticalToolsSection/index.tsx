import React from 'react';
//NEXT COMPONENTS
import Image from 'next/image'
import Link from 'next/link'
//CUSTOM COMPONENTS
import Container from "@/components/Container";
//IMAGES
import leftTopPixels from '@/public/main_page/cosmetical_tools/pixels/left_top.png'
import leftBottomPixels from '@/public/main_page/cosmetical_tools/pixels/left_bot.png'
import rightPixels from '@/public/main_page/cosmetical_tools/pixels/right.png'

import greenVial from '@/public/main_page/cosmetical_tools/1.png'
import redVial from '@/public/main_page/cosmetical_tools/2.png'

import yellowCream from '@/public/main_page/cosmetical_tools/cream_first.png'
import blueCream from '@/public/main_page/cosmetical_tools/cream_second.png'
import violetCream from '@/public/main_page/cosmetical_tools/cream_third.png'

import Button from "@/components/Button";
// CUSTOM STYLES
import s from './cosmetical-tools.module.scss'

function CosmeticalTools() {
    return (
        <section className={s.cosmetical_tools}>
            <img src={leftTopPixels.src} className={`${s.tools__pixels} ${s.left_top_pixels}`} alt=""/>
            <img src={leftBottomPixels.src} className={`${s.tools__pixels} ${s.left_bottom_pixels}`} alt=""/>
            <img src={rightPixels.src} className={`${s.tools__pixels} ${s.right_pixels}`} alt=""/>

            <Container>
                <div className={s.cosmetical_tools__content}>
                    <div className={s.content__vials}>\
                        <img src={redVial.src} className={s.vials__red}/>
                        <img src={greenVial.src} className={s.vials__green}/>
                    </div>

                    <div className={s.content__info}>
                        <h3 className={s.info__title}>Специализированные профессиональные косметические средства</h3>
                        <p className={s.info__subtitle}>для постлазерного и постаппаратного ухода</p>
                        <Link href={'/'}>
                            <a>
                                <Button className={s.info__btn}>Подробнее</Button>
                            </a>
                        </Link>
                    </div>

                    <div className={s.content__creams}>
                        <img src={yellowCream.src} className={`${s.cream__item} ${s.creams__yellow}`}/>
                        <img src={blueCream.src} className={`${s.cream__item} ${s.creams__blue}`}/>
                        <img src={violetCream.src} className={`${s.cream__item} ${s.creams__violet}`}/>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default CosmeticalTools;