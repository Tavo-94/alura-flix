import React, { useState } from 'react'
import ButtonNav from './ButtonNav/ButtonNav'
import { LuMenu, LuX } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { useMainContext } from '../../context/MainContext';


const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const { dispatch } = useMainContext()

  return (
    <header className='bg-main-background border-b-8 border-accent-dark'>
      <nav className={`p-8 flex flex-col justify-center items-stretch ${menuOpen && 'gap-8 divide-y-2 divide-accent-dark'}`}>
        <div className='flex justify-between items-center'>
          <Link to={"/"}>
            <img src="/img/logo-alura-flix.png" alt="" />
          </Link>
          <div className='hidden md:flex gap-4'>

            <Link to={"/"}>
              <ButtonNav text={'INICIO'} typeStyle={'filled'} size='sm' />
            </Link>
            <Link to={"/newvideo"}>
              <ButtonNav text={'NUEVO VIDEO'} typeStyle={'outlined'} size='sm' onClick={() => {
                dispatch({ type: "RESET_EDIT_VIDEO_STATE" })
              }} />
            </Link>
          </div>
          <div className='md:hidden'>
            {
              menuOpen
                ? <LuX size={32} color='white' onClick={() => setMenuOpen(false)} />
                : <LuMenu size={32} color='white' onClick={() => setMenuOpen(true)} />
            }

          </div>
        </div>

        <div className={`${menuOpen && 'pt-8'} md:hidden`}>
          {
            menuOpen && (
              <div className='flex flex-row justify-between'>
                <Link to={"/"}>
                  <ButtonNav text={'INICIO'} typeStyle={'filled'} size='sm' />
                </Link>
                <Link to={"/newvideo"}>
                  <ButtonNav text={'NUEVO VIDEO'} typeStyle={'outlined'} size='sm' />
                </Link>
              </div>
            )
          }
        </div>
      </nav>
    </header>
  )
}

export default NavBar