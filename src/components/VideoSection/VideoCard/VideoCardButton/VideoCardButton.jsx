import React from 'react'

const VideoCardButton = ({texto, icono, onClick}) => {
  return (
    <button 
    className='flex justify-center items-center gap-2 text-white text-2xl hover:text-white hover:bg-gray-700 rounded-lg p-3'
    onClick={onClick}
    >
        {icono}
        {texto}
    </button>
  )
}

export default VideoCardButton