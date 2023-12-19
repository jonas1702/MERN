import React, {useState, useEffect} from "react"
import Search from "@material-ui/icons/SearchRounded";
import '../style.css';
import axios from 'axios';

function SearchBar( {setBooks} ) {

    const [oldBooks, setOldBooks] = useState([])

    useEffect(() => {
        axios
          .get('http://localhost:27017/books')
          .then((response) => {
              setOldBooks(response.data.data)
          })
          .catch((error) => {
            console.log(error)
          })
      }, [])

    const handleInput = () => {  
        const searchInp = document.querySelector('.search-input')
        const input = searchInp.value.toLowerCase()
        
        const filteredTitle = oldBooks.filter((book) => {
            return book.title.toLowerCase().includes(input.toLowerCase())
        })

        const filteredAuthor = oldBooks.filter((book) => {
            return book.author.toLowerCase().includes(input.toLowerCase())
        })

        const filteredPublishYear = oldBooks.filter((book) => {
            return String(book.publishYear).includes(input)
        })

        const filteredBooks = [...filteredTitle, ...filteredAuthor, ...filteredPublishYear] 

        if (input == '') return setBooks(oldBooks)

        setBooks(filteredBooks)
    }

    return (
        <div className='search-bar'>
            <input type='text' placeholder='Search' className="search-input"/>
            <button className='default-button' onClick={handleInput}>
                <Search />
            </button>
        </div>
    );
}

export default SearchBar;
