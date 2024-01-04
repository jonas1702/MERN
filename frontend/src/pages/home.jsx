import React, {useEffect, useState} from "react"
import axios from 'axios'
import { Link } from "react-router-dom"
import '../style.css'
import SwitchBtn from "../components/SwitchBtn"
import Nav from "../components/Nav"
import BookTable from "../components/BookTable"
import BookCards from "../components/BookCards"
import Footer from "../components/Footer"
import SearchBar from "../components/Search"


const Home = () => {

  const [books, setBooks] = useState([])

  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    axios
      .get('http://localhost:27017/books')
      .then((response) => {
          setBooks(response.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <main>
      <div className="container">
        <div className="nav">
          <Nav />
          <div className="top-row">
            <h1>Book Database</h1>
            <div className="top-row-container">
              <SearchBar books={books} setBooks={setBooks} />
              <SwitchBtn isChecked={isChecked} setIsChecked={setIsChecked} />
            </div>
          </div>
        </div>
          { !isChecked ?  <BookTable books={books} setBooks={setBooks} /> : <BookCards books={books} setBooks={setBooks} /> }
          
        <div className="overlay"></div>
      </div>
      <Footer />
    </main>
  )
}

export default Home