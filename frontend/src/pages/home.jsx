import React, {useEffect, useState} from "react"
import axios from 'axios'
import { Link } from "react-router-dom"
import '../style.css'
import SwitchBtn from "../components/SwitchBtn"
import DeleteCard from "../components/DeleteBook"
import BookTable from "../components/BookTable"
import BookCards from "../components/BookCards"


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
    <div className="container">
      <div className="top-row">
        <h1>Book Database</h1>
        <div className="top-row-container">
          <Link to='/books/create'>
            <button>Create Book</button>
          </Link>
          <SwitchBtn isChecked={isChecked} setIsChecked={setIsChecked} />
        </div>
      </div>
        { !isChecked ?  <BookTable books={books} setBooks={setBooks} /> : <BookCards books={books} setBooks={setBooks} /> }
        
      <div className="overlay"></div>
    </div>
  )
}

export default Home