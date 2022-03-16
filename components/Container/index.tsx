import React from 'react';
import s from './container.module.scss'

interface Props{
    children: React.ReactNode,
    className?: string
}

function Container({children,className=''}:Props) {
    return (
        <div className={`${s.container} ${className}`}>{children}</div>
    );
}

export default Container;