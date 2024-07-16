import { useState } from "react"
import { useMainContext } from "../../context/MainContext"
import ImageVideoThumbnail from "../ImageVideoThumbnail/ImageVideoThumbnail"
import Tag from "../Tag/Tag"


const Banner = () => {
  const { state } = useMainContext()
  console.log("BANNER",state.categorias[2].color)




  const [imgColor, setImgColor] = useState("")

  
  
  return (
    <header className="bg-hero-pattern h-screen lg:h-[85vh]">
      <div className="bg-gradient-to-b from-zinc-900 w-full h-full px-4 grid grid-cols-1 place-items-center">

        <div className=" lg:ms-5">

          {
            <Tag size="lg" categoria={state.categorias[0]} />
          }
          <h2 className="text-5xl font-bold text-white mt-4">Challange React</h2>
          <p className="text-2xl font-medium text-white">Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
        </div>
        {
          <ImageVideoThumbnail imgUrl={state.videos[0].imagen} categoria={state.categorias[0]} />
        }

      </div>


    </header>
  )
}

export default Banner