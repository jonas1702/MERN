import React, {useEffect, useState} from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../style.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreateBook = () => {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')
  const navigate = useNavigate()

  const [index, setIndex] = useState()

  const notify = () => toast.error('Please send all the required fields! :)', {

    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",

  });

  const handleSave = () => {
    
    const data = {
      index,
      title,
      author,
      publishYear
    }

    axios
      .post('http://localhost:27017/books', data)
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
        notify()
      })
  }

  useEffect(() => { 
    axios
      .get('http://localhost:27017/books')
      .then((response) => {
          setIndex(response.data.data.length + 1)
      })
      .catch((error) => {
        console.log(error)
    })
  }, [])

  return (
    <div className="page">
      <BackButton />
      <h1>Create Book</h1>

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

        <button onClick={handleSave}>Save!!</button>
      </div>

      <ToastContainer />

    </div>
    
  )
}

export default CreateBook