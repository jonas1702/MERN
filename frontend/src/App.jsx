import React from "react";
import Home from "./pages/home";
import CreateBook from './pages/createBook'
import UpdateBook from "./pages/updateBook";
import GetBook from "./pages/getBook";

import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={< Home/>}/>
      <Route path='/books/create' element={< CreateBook/>}/>
      {/* <Route path='/books/delete/:id' element={< DeleteBook/>}/> */}
      <Route path='/books/edit/:id' element={< UpdateBook/>}/>
      <Route path='/books/details/:id' element={< GetBook/>}/>
    </Routes>
  )
}

export default App