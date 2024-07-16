import FormNewVideo from "../../components/Form/FormNewVideo"

const NewVideoPage = () => {
  return (
    <>
      <main className="bg-main-background px-4 pt-28 pb-12 min-h-screen  flex flex-col gap-12 md:px-16">
        <header className="flex flex-col gap-4 items-center">
          <h2 className="text-white text-5xl font-black">Nuevo Video</h2>
          <p className="text-white text-lg text-center">Complete el formulario para crear una nueva tarjeta de video</p>
        </header>
        <FormNewVideo />
      </main>
    </>
  )
}

export default NewVideoPage