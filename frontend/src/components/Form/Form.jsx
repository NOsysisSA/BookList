import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addbook } from '../../Redux/Books/actionCreators'

function Form() {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const dispatch = useDispatch()


    const hendlSubmit = (e) => {
        e.preventDefault()
        if(title && author){
            const book = {
                title,
                author
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
        </form>
    </div>
  )
}

export default Form