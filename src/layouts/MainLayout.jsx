import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import MainContextProvider, { useMainContext } from '../context/MainContext'

const MainLayout = () => {
    const { state } = useMainContext()
    return (


        <>
            {
                state.loading ? <div className='text-9xl font-black text-center'>Cargando...</div> : <>
                    <NavBar />
                    <Outlet />
                    <Footer />
                </>
            }



        </>
    )
}

export default MainLayout