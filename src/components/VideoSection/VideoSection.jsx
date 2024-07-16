import React, { useRef } from 'react'
import VideoCard from './VideoCard/VideoCard'
import { useMainContext } from '../../context/MainContext'
import Tag from '../Tag/Tag'

const VideoSection = ({ categoria }) => {

    const { state } = useMainContext()



    return (

        state.videos.some((video) => video.categoria === categoria.id)?

        <>


            <section className='grid grid-cols-1 lg:grid-cols-3 gap-6 p-6'>
                <div className='lg:col-span-3'>

                    <Tag text={categoria.nombre} size="md" categoria={categoria} />
                </div>

                {
                    state.videos.map((video) => {
                        if (video.categoria === categoria.id) {
                            return <VideoCard key={video.id} video={video} categoria={categoria} />
                        }
                    })


                }
            </section>
        </> : <></>
    )
}

export default VideoSection