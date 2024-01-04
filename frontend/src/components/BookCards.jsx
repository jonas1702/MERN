import React, {useState} from 'react';
import { Link } from "react-router-dom"
import '../style.css'
import DeleteCard from "../components/DeleteBook"
import axios from 'axios'

function BookCards( { books } ) {

    const [deleteToggle, setDeleteToggle] = useState(false)
    const [deleteId, setDeleteId] = useState() 

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

        if ( deleteToggle ) {

            deleteCard.style.display = 'none'
            overlay.style.display = 'none'
            setDeleteToggle(false)

        } else {

            deleteCard.style.display = 'flex'
            overlay.style.display = 'block'
            setDeleteToggle(true)

        }
    
    }

    return (
        <div>
            <div className='card-container'>
                {books.map((book) => (
                    <div className='card' key={book._id}>
                        <div className='card-top'>
                            <h3>{book.index}</h3>
                            <h3>{book.title}</h3>
                            <div className='card-top-container'>
                                <p>{book.author}, </p>
                                <p>{book.publishYear}</p>
                            </div>
                        </div>
                        <div className='card-bottom'>
                            <div className='card-bottom-buttons'>
                                <Link to={`/books/${book._id}`}>
                                    <button className='card-edit-button'>Edit</button>
                                </Link>
                                <button className="delete-button-secondary" onClick={() => {
                                    toggleDelete()
                                    setDeleteId(book._id)
                                }}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <DeleteCard onDelete={() => handleDelete(deleteId)} onCancel={toggleDelete} />

        </div>
    );
}

export default BookCards;
