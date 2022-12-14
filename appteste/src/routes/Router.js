import React from 'react'
import { 
  BrowserRouter, 
  Routes, 
  Route 
    } from "react-router-dom"

import Header from "../components/Header/Header"
import Footer from '../components/Footer/Footer'

import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignupPage from "../pages/SignupPage/SignupPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import ForumPage from "../pages/ForumPage/ForumPage"
import AlbumsPage from "../pages/AlbumsPage/AlbumsPage"
import TodoPage from "../pages/TodoPage/TodoPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import InBuildPage from '../pages/InBuildPage/InBuildPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path='/entrar' element={<LoginPage />}></Route>
        <Route path='/cadastrar' element={<SignupPage />}></Route>
        <Route path='/perfil' element={<ProfilePage />}></Route>
        <Route path='/forum' element={<InBuildPage />}></Route>
        <Route path='/albums' element={<InBuildPage />}></Route>
        <Route path='/todo' element={<TodoPage />}></Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default Router