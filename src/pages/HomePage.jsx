import { useRef } from "react"
import Banner from "../components/Banner/Banner"
import VideoSection from "../components/VideoSection/VideoSection"
import { useMainContext } from "../context/MainContext"
import FormNewVideo from "../components/Form/FormNewVideo"
import { LuXCircle } from "react-icons/lu";


const HomePage = () => {

  const { state, modalRef } = useMainContext()



  return (


    <>

      <div className="bg-main-background ">


        <Banner />

        <dialog ref={modalRef} className="backdrop:bg-accent-darker/80 w-[1000px]">
          {
            <div className="border-4 border-front-end bg-accent-darker px-16 relative ">
              <div>
                <LuXCircle className="absolute top-2 right-2 text-4xl text-white" onClick={() => modalRef.current.close()} />
              </div>
              <FormNewVideo video={state.videoEnEdicion} />

            </div>
          }

        </dialog>
        {

          state.videos.length === 0 ? <div className="text-white text-3xl font-bold">No hay videos</div> : state.categorias.map((categoria) => {
            return <VideoSection key={categoria.id} categoria={categoria} />
          })
        }

      </div>


    </>

  )
}

export default HomePage