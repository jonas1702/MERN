import React, {useState, useEffect} from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import '../style.css'

const UpdateBook = () => {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')
  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    axios
      .get(`http://localhost:27017/books/${id}`)
      .then((response) => {
        setAuthor(response.data.author)
        setTitle(response.data.title)
        setPublishYear(response.data.publishYear)
      })
      .catch((error) => {
        console.log(error)
        alert('error')
      })
  }, [])

  const handleEdit = () => {
    const data = {
      title,
      author,
      publishYear
    }

    axios
      .put(`http://localhost:27017/books/${id}`, data)
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
        alert('error')
      })
  }

  return (
    <div className="page">
      <BackButton />
      <h1>Update Book</h1>

      <div className="form">
        <div className="form-cell">
          <label className="form-cell-title">Title:</label>
          <input className="form-cell-input" type="text" value={title} placeholder="Enter title" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-cell">
          <label className="form-cell-title">Author:</label>
          <input className="form-cell-input" type="text" value={author} placeholder="Enter Author" onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div className="form-cell">
          <label className="form-cell-title">Publish Year:</label>
          <input className="form-cell-input" type="number" value={publishYear} placeholder="Enter Publish Year" onChange={(e) => setPublishYear(e.target.value)} />
        </div>

        <button onClick={handleEdit}>Save!!</button>
      </div>
    </div>
  )
}

export default UpdateBook