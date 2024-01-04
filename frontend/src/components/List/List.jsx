import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../../Redux/Books/actionCreators";

function List() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch()

  const hendlDeleteBook = (id) => {
    dispatch(deleteBook(id))
  };
  return (
    <div>
      <h2>Book list</h2>
      {books.length === 0 ? (
        <p>NO books</p>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li kay={book.id}>
              <div className="book-indo">
                {++i} {book.title} by <strong>{book.author}</strong>
              </div>

              <div className="bookActions">
                <button onClick={() => hendlDeleteBook(book.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default List;
