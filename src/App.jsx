import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import NewVideoPage from './pages/NewVideoPage/NewVideoPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='newvideo' element={<NewVideoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App