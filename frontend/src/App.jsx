import React from "react";
import Home from "./pages/home";
import CreateBook from './pages/createBook'
import UpdateBook from "./pages/updateBook";
import GetBook from "./pages/getBook";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";

import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={< Home/>}/>
      <Route path='/users/login' element={< LoginPage/>}/>
      <Route path='/users/register' element={< RegisterPage/>}/>
      <Route path='/books/create' element={< CreateBook/>}/>
      {/* <Route path='/books/delete/:id' element={< DeleteBook/>}/> */}
      <Route path='/books/edit/:id' element={< UpdateBook/>}/>
      <Route path='/books/details/:id' element={< GetBook/>}/>
    </Routes>
  )
}

export default App