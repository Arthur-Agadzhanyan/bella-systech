import React, {useCallback, useState} from 'react';
import s from './corse-enrollment.module.scss'
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";

import leftTopPixels from '@/public/enrollment/left_top_pixels.png'
import centerTopPixels from '@/public/enrollment/center_top_pixels.png'
import rightTopPixels from '@/public/enrollment/right_top_pixels.png'
import leftBottomPixels from '@/public/enrollment/bottom_left_pixels.png'
import centerBottomPixels from '@/public/enrollment/bottom_center_pixels.png'
import rightBottomPixels from '@/public/enrollment/bottom_right_pixels.png'

function CourseEnrollment() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        checked: false
    })

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(!form.name || !form.email || !form.phone){
            console.log('aaa')
            alert('Не все элементы формы заполнены')
        }else if(!form.checked){
            alert('нет согласия на обработку персональных данных')
        }
    }

    const changeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form,[`${e.target.getAttribute('name')}`]: e.target.value})
    },[form])
    const checkPolicy = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setForm({...form, checked: !form.checked})
    }

    return (
        <section className={s.enrollment}>
            <div className={`${s.top__pixels} ${s.enrollment__pixels}`}>
                <img src={leftTopPixels.src} alt=""/>
                <img src={centerTopPixels.src} alt=""/>
                <img src={rightTopPixels.src} alt=""/>
            </div>

            <div className={s.enrollment__content}>
                <SectionTitle className={s.content__title}>Запишитесь на презентацию аппарата</SectionTitle>
                <p className={s.content__text}>и получите индивидуальное КП</p>

                <div className={s.content__form_block}>

                    <form onSubmit={submitHandler} className={s.content__form}>
                        <div className={s.form__div}>
                            <input name={'name'} type="text" className={s.form__input} placeholder=" " id="input1" value={form.name} onChange={changeHandler}  required/>
                            <label htmlFor="input1" className={s.form__label}>ФИО</label>
                        </div>

                        <div className={s.form__div}>
                            <input name={'email'} type="email" className={s.form__input} placeholder=" " id="input2" value={form.email} onChange={changeHandler} required/>
                            <label htmlFor="input2" className={s.form__label}>Почта</label>
                        </div>

                        <div className={s.form__div}>
                            <input name={'phone'} type="text" className={s.form__input} placeholder=" " id="input3" value={form.phone} onChange={changeHandler} required/>
                            <label htmlFor="input3" className={s.form__label}>Телефон</label>
                        </div>

                        <Button className={s.form__btn}>Получить консультацию</Button>

                        <div className={s.form__check_item}>
                            <label className={s.item__check}>
                                <input className={s.check__input} type="checkbox" onChange={checkPolicy} checked={form.checked} />
                                <span className={s.check__custom}></span>
                                <span className={s.check__text}>Согласие на обработку персональных данных</span>
                            </label>
                        </div>
                    </form>
                </div>
            </div>

            <div className={`${s.bottom__pixels} ${s.enrollment__pixels}`}>
                <img src={rightBottomPixels.src} alt=""/>
                <img src={centerBottomPixels.src} alt=""/>
                <img src={leftBottomPixels.src} alt=""/>
            </div>
        </section>
    );
}

export default CourseEnrollment;