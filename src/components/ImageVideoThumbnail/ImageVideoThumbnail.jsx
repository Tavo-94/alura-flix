import React, { useState } from 'react'

const ImageVideoThumbnail = ({ imgUrl, categoria, size = "lg" }) => {

    console.log("IMAGEN", categoria)
    const setStyles = (size, categoria) => {
        let estilos = ""

        let color = "red-500"

        if (categoria.nombre === "front end") {
            color = "front-end"
        }

        if (categoria.nombre === "back end") {
            color = "back-end"
        }
        
        if (categoria.nombre === "innovación y gestión") {
            color = "innovación-gestión"
        }
        

        console.log(color)
        switch (size) {

            case "sm":
                estilos = `overflow-hidden border-[8px] shadow-inner w-[100px] h-[100px] border-${color} `

                return estilos

            case "md":
                estilos = `overflow-hidden border-[8px] shadow-inner w-[200px] h-[200px] border-${color} `

                return estilos

            case "lg":
                estilos = `border-[8px] shadow-inner  border-${color} `
                console.log(estilos)
                return estilos

            default:
                return `overflow-hidden border-[8px] shadow-inner w-[100px] h-[100px] border-[#${color}] `
        }
    }


    const [imgStyles, setImgStyles] = useState(setStyles(size, categoria))

    console.log("IMAGEN", imgStyles)


    return (
        <div className={`${imgStyles}  `}>
            <img src={imgUrl} alt="imagen thumbnail" className="aspect-video object-cover" />
        </div>

    )
}

export default ImageVideoThumbnail