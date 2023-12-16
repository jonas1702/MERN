import React, {useEffect, useState} from "react"
import axios from 'axios'
import { Link } from "react-router-dom"
import ExpandMore from "@material-ui/icons/ExpandMoreRounded"
import Dashboard from "@material-ui/icons/DashboardRounded"
//import TableRows from "@material-ui/icons/TableRowsRounded"
import Layers from "@material-ui/icons/LayersRounded"
import '../style.css'
import DeleteCard from "../components/deleteBook"


const Home = () => {

  const [books, setBooks] = useState([])
  const [toggle, setToggle] = useState(true)
  const [oldData, setoldData] = useState()

  const [deleteToggle, setDeleteToggle] = useState(false)
  const [deleteId, setDeleteId] = useState()

  const sortString = (data) => {

    const sortedBooks = [...books]

    sortedBooks.sort((a, b) => {
      const stringA = a[data].toUpperCase()
      const stringB = b[data].toUpperCase()

      if (toggle || oldData !== data) {
        return (
            setToggle(false),
            stringA.localeCompare(stringB)
          )
      } else {
        return (
            setToggle(true),
            stringB.localeCompare(stringA)
          )
      }
    })

    setBooks(sortedBooks)
    setoldData(data)
  }

  const sortNumbers = (data) => {
    const sortedBooks = [...books]

    sortedBooks.sort((a, b) => {

      if (toggle || oldData !== data) {
        return (
            setToggle(false),
            a[data] - b[data]
          )
      } else {
        return (
            setToggle(true),
            b[data] - a[data]
          )
      }
    })

    setBooks(sortedBooks)
    setoldData(data)

  }

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:27017/books/${id}`)
      .then(() => {
        window.location.reload()
      })
      .catch((error) => {
        console.log(error)
        alert('error!')
      })
      
  }

  const toggleDelete = () => {
    const deleteCard = document.querySelector('.delete-card')
    const overlay = document.querySelector('.overlay')
    if (deleteToggle) {
      deleteCard.style.display = 'none'
      overlay.style.display = 'none'
      setDeleteToggle(false)
    } else {
      deleteCard.style.display = 'flex'
      overlay.style.display = 'block'
      setDeleteToggle(true)
    }
  
  }

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
        <Link to='/books/create'>
          <button>Create Book</button>
        </Link>
        <div className="switch">
          <input type="checkbox" className="switch-checkbox" />
          <Dashboard className="switch-item-active" />
          <Layers className="switch-item" />
        </div>
      </div>
      <table className="table">
          <thead className="table-head">
            <tr>
              <th className="table-head-item">Number</th>
              <th className="table-head-item">
                <div className="th-container"> 
                  <div>Title</div>
                  <button className="default-button" onClick={() => sortString('title')}>
                    <ExpandMore />
                  </button>
                </div>
              </th>
              <th className="table-head-item">
                <div className="th-container"> 
                  <div>Author</div>
                  <button className="default-button" onClick={() => sortString('author')}>
                      <ExpandMore />
                  </button>
                </div>
              </th>
              <th className="table-head-item">
                <div className="th-container"> 
                  <div>Publish Year</div>
                  <button className="default-button" onClick={() => sortNumbers('publishYear')}>
                      <ExpandMore />
                  </button>
                </div>
              </th>
              <th className="table-head-item">Operations</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {books.map((book, index) => (
              <tr key={book._id}>
                <td className="table-cell">
                  {index + 1}
                </td>
                <td className="table-cell">
                  {book.title}
                </td>
                <td className="table-cell">
                  {book.author}
                </td>
                <td className="table-cell">
                  {book.publishYear}
                </td>
                <td className="table-cell">
                  <div className="op">
                    <Link to={`/books/details/${book._id}`}>
                      <button>Details</button>
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <button>Edit</button>
                    </Link>
                    <button className="delete-button-secondary" onClick={() => (toggleDelete(), setDeleteId(book._id))}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
      </table>
      <DeleteCard onDelete={() => handleDelete(deleteId)} onCancel={toggleDelete} />
      <div className="overlay"></div>
    </div>
  )
}

export default Home