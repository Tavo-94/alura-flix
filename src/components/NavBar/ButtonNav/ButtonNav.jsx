import React, { useEffect, useState } from 'react'

const ButtonNav = ({ text, typeStyle = 'filled', size = "md", type, onClick }) => {

    const [buttonTypeStyle, setButtonTypeStyle] = useState('');
    const [buttonSizeStyle, setButtonSizeStyle] = useState('');



    useEffect(() => {

        const buttonStyle = () => {

            switch (typeStyle) {
                case 'filled':
                    return 'bg-black text-accent-dark border-2 border-accent-dark shadow-inner shadow-accent-dark ';

                case 'outlined':
                    return 'bg-transparent border-white border-2 text-white';

                default:
                    return 'text-white';
            }
        }

        const buttonSizeStyle = () => {

            switch (size) {
                case 'sm':
                    return 'px-8 py-4 text-sm';
                case 'md':
                    return 'px-14 p-6 text-2xl';

                default:
                    return 'px-14 p-6 text-2xl';
            }
        }



        setButtonSizeStyle(buttonSizeStyle());
        setButtonTypeStyle(buttonStyle());
    }, [typeStyle, size])

    return (
        <button onClick={onClick} className={`${buttonSizeStyle} rounded-xl font-bold ${buttonTypeStyle}`} type={type}>{text}</button>)
}

export default ButtonNav