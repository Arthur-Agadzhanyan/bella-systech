import React from 'react';
import s from './section-title.module.scss'

interface Props {
    className?: string,
    children: React.ReactNode
}

function SectionTitle({children, className = ''}: Props) {
    return (
        <h2 className={`${s.section_title} ${className}`}>{children}</h2>
    );
}

export default SectionTitle;