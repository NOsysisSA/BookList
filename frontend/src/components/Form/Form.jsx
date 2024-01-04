import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addbook } from '../../Redux/Books/actionCreators'
import booksData from "../../data/books.json"
import {v4 as uuidv4} from 'uuid'

function Form() {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const dispatch = useDispatch()
    const handleAddRandomBokk = () => {
        const randomIndex = Math.floor(Math.random()*booksData.length)
        console.log(randomIndex)
        const randomBook = booksData[randomIndex]
        const randomBookWithID = {
            ...randomBook,
            id: uuidv4()
        }
        dispatch(addbook(randomBookWithID))
    }


    const hendlSubmit = (e) => {
        e.preventDefault()
        if(title && author){
            const book = {
                title,
                author,
                id: uuidv4(),
            }
            dispatch(addbook(book))
            setTitle('')
            setAuthor('')
        }
    }

  return (
    <div>
        <h2>Form</h2>
        <form onSubmit={hendlSubmit}>
            <div>
                <label htmlFor='title'>Title:</label>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label htmlFor='author'>Author:</label>
                <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <button type='submit'>Add Book</button>
            <button type = 'button' onClick={handleAddRandomBokk}>Add random book</button>
        </form>
    </div>
  )
}

export default Form