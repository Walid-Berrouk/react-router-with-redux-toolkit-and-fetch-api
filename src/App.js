import React from 'react'

import { Routes, Route, Navigate, Outlet } from 'react-router-dom'

import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import PrivateRoute from './components/PrivateRoute'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProfilesPage from './pages/ProfilesPage'
import SingleProfilePage from './pages/SingleProfilePage'

function Main() {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

function App() {


  return (
    <>
      <Routes>
        <Route path="main" element={<Main />}>
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<AboutPage /> } />
          <Route path="contact" element={<ContactPage />} />
          <Route path="profiles" element={<ProfilesPage />} />
          <Route path="profiles/:id" element={
               <PrivateRoute isAuth={true}>
                <SingleProfilePage />
              </PrivateRoute>
          } />
        </Route>
        <Route
            path="*"
            element={<Navigate to="/main/home" />}
        />
      </Routes>
    </>
  )
}

export default App
