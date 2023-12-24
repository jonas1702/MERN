import React, {useState, useEffect} from "react"
import Search from "@material-ui/icons/SearchRounded";
import '../style.css';
import axios from 'axios';

function SearchBar( {setBooks} ) {

    const [oldBooks, setOldBooks] = useState([])
    //reset books to all books when component mounts
    const getallBooks = () => {
        axios
          .get('http://localhost:27017/books')
          .then((response) => {
              setOldBooks(response.data.data)
          })
          .catch((error) => {
            console.log(error)
          })
    }

    //prevent getallBooks from running on every render
    useEffect(() => {
        getallBooks()
    }, [])

    // filter books based on input
    const handleInput = () => {  

        getallBooks()
        
        const searchInp = document.querySelector('.search-input')
        const input = searchInp.value.toLowerCase()
        
        // filter books based on title, author, and publish year
        const filteredTitle = oldBooks.filter((book) => {
            return book.title.toLowerCase().includes(input.toLowerCase())
        })

        const filteredAuthor = oldBooks.filter((book) => {
            return book.author.toLowerCase().includes(input.toLowerCase())
        })

        const filteredPublishYear = oldBooks.filter((book) => {
            return String(book.publishYear).includes(input)
        })

        const filteredBooks = [...filteredTitle, ...filteredAuthor, ...filteredPublishYear] // combine all filtered arrays
        
        const uniqueBooks = [...new Set(filteredBooks)] // remove duplicates

        if (input == '') return setBooks(oldBooks) // if input is empty, reset books to all books

        setBooks(uniqueBooks) // set books to filtered books
    }

    // support for enter key press
    const onEnter = (e) => {   
        if (e.key === 'Enter') {
            handleInput()
        }
    }

    return (
        <div className='search-bar'>
            <input type='text' placeholder='Search' className="search-input" onKeyDown={onEnter}/>
            <button className='default-button' onClick={handleInput}>
                <Search />
            </button>
        </div>
    );
}

export default SearchBar;
