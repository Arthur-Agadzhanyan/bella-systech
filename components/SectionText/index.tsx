import React from 'react';
import s from './section-text.module.scss'

interface Props{
    children: React.ReactNode,
    className?: string,
    color?: string
}

function SectionText({children,className='',color='#272727'}:Props) {
    return (
        <p
            style={{color}}
            className={`${s.section_text} ${className}`}
        >
            {children}
        </p>
    );
}

export default SectionText;