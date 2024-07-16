import React from 'react'
import ImageVideoThumbnail from '../../ImageVideoThumbnail/ImageVideoThumbnail'
import VideoCardButton from './VideoCardButton/VideoCardButton'
import { LuTrash2 } from "react-icons/lu";
import { LuPencilLine } from "react-icons/lu";
import { useMainContext } from '../../../context/MainContext';


const VideoCard = ({ video, categoria }) => {

  const colorVariatns = {
    "front end": "border-[#6BD1FF] border-4 shadow-[0px_0px_5px_4px] shadow-[#6BD1FF]",
    "back end": "border-[#00C86F] border-4 shadow-[0px_0px_5px_4px] shadow-[#00C86F]",
    "innovación y gestión": "border-[#FFBA05] border-4 shadow-[0px_0px_5px_4px] shadow-[#FFBA05]",
  }

  const { dispatch, modalRef,openModal, refreshProducts, triggerFetch } = useMainContext()



  return (
    <div className={`${colorVariatns[categoria.nombre]} rounded-2xl flex flex-col`}>
      <img src={video.imagen} alt={`thumbnail del video: ${video.titulo}`} className=' aspect-video object-cover rounded-t-xl' />

      <div className='py-2 flex flex-row justify-around bg-black rounded-b-2xl'>
        <VideoCardButton texto="Borrar" icono={<LuTrash2 className='text-3xl' />} onClick={() => {
          dispatch({ type: "DELETE_VIDEO", payload: video.id })
          refreshProducts(triggerFetch);

        }} />



        <VideoCardButton texto="Editar" icono={<LuPencilLine className='text-3xl' />} onClick={()=>{

          dispatch({ type: "EDIT_VIDEO", payload: video });
          openModal(modalRef);
          }} />

      </div>

    </div>
  )
}

export default VideoCard