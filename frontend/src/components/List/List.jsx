import React from 'react'
import { useSelector } from 'react-redux'
function List() {
  const books = useSelector((state) => state.books)
  return (
    <div>
        <h2>Book list</h2>
        {books.length === 0 ? (
          <p>NO books</p>
        ):(
          <ul>
            {books.map((book, i) => (<li kay={i}>
              <div className='book-indo'>{++i} {book.title} by <strong>{book.author}</strong></div>
            </li>))}
          </ul>
        )}
    </div>
  )
}

export default List