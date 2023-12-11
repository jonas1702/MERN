import React, {useEffect, useState} from "react"
import axios from 'axios'
import { Link } from "react-router-dom"
import ExpandMore from "@material-ui/icons/ExpandMoreRounded"
import '../style.css'

const Home = () => {

  const [books, setBooks] = useState([])

  const sortString = (data) => {
    const sortedBooks = [...books];

    sortedBooks.sort((a, b) => {
      const stringA = a[data].toUpperCase();
      const stringB = b[data].toUpperCase();

      return stringA.localeCompare(stringB);
    });

    setBooks(sortedBooks);
  };

  const sortNumbers = (data) => {
    const sortedBooks = [...books];

    sortedBooks.sort((a, b) => {
      const numberA = a[data]
      const numberB = b[data]

      if (numberA < numberB) {

        return -1;

      } else if (numberA > numberB) {

        return 1;

      }
     
      return 0;
    });

    setBooks(sortedBooks);
  };

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
                    <Link to={`/books/delete/${book._id}`}>
                      <button>Delete</button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
      </table>
    </div>
  )
}

export default Home