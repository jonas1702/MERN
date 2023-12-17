import React from 'react'

const Card = () => {
    return (
        <div className='card'>
            <div className='card-text-container'>
                <h3 className='card-title'>Book Title</h3>
                <p className='card-author'>Book Author</p>
                <p className='card-genre'>Book Genre</p>
                <p className='card-year'>Book Year</p>
                <p className='card-description'>Book Description</p>
            </div>
        </div>
    )
}

export default Card
