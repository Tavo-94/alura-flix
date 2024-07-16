import React, {useState } from 'react'
import { useMainContext } from '../../context/MainContext'

const Tag = ({ size = "md", categoria }) => {
    const sizeStyles = {

        sm: "px-4 py-2 text-sm",
        md: "px-8 py-4 text-xl",
        lg: "px-4 py-0 text-5xl"
    }

    const colorVariatns = {
        "front end": "bg-[#6BD1FF]",
        "back end": "bg-[#00C86F]",
        "innovación y gestión": "bg-[#FFBA05]",
    }

    return (
        <div className={`${colorVariatns[categoria.nombre]} ${sizeStyles[size]} font-bold text-white w-fit rounded-xl h-24 flex justify-center items-center z-10`} >
            <p>{categoria.nombre.toUpperCase()}</p>
        </div>
    )
}

export default Tag