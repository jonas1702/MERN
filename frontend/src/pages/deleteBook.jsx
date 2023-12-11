import React, {useState} from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";



const DeleteBook = () => {

  const navigate = useNavigate()
  const { id } = useParams()

  const handleDelete = () => {
    axios
      .delete(`http://localhost:27017/books/${id}`)
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
        alert('error!')
      })
  }
  return (
    <div>
      <BackButton />
      <h1>Delete Book</h1>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default DeleteBook