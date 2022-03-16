import React, { FC } from 'react'

interface Props{
    className?: string
}

function IconsHOC(Component:FC<Props>) {
    return ({className=''}: Props)=>{
        return <Component className={className}/>
    }
}

export default IconsHOC
