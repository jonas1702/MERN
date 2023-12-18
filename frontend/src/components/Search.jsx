import React, {useState} from "react"
import Search from "@material-ui/icons/SearchRounded";
import '../style.css';

function SearchBar( {books, setBooks} ) {

    const [searchBooks, setSearchBooks] = useState([])

    const handleInput = () => {  
        const searchInp = document.querySelector('.search-input')
        const input = searchInp.value

        const filteredBooks = books.filter((book) => {
            return book.title.toLowerCase().includes(input.toLowerCase())
        })

        if (input == '') return setSearchBooks(books)

        setSearchBooks(filteredBooks)
    }

    const handleSubmit = () => {

        handleInput()

        setBooks(searchBooks)
    }

    return (
        <div className='search-bar'>
            <input type='text' placeholder='Search' className="search-input"/>
            <button className='default-button' onClick={handleSubmit}>
                <Search />
            </button>
        </div>
    );
}

export default SearchBar;
