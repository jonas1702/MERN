import React, {useEffect, useState} from "react";
import axios from "axios";
import BackButton from "../components/BackButton";
import { useParams } from "react-router-dom";

const GetBook = () => {

  const [book, setBook] = useState([])

  const { id } = useParams()

  useEffect(() => {
    axios
      .get(`http://localhost:27017/books/${id}`)
      .then((response) => {
          setBook(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
 
  return (
    <div className="container">
      <BackButton />
      <h1>{book.title}</h1>
      <h2>{book.author}</h2>
      <h2>{book.publishYear}</h2>

    </div>
  )
}

export default GetBook