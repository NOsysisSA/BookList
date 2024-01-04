import {configureStore} from '@reduxjs/toolkit'
import booksReduser from './Books/reduser'

const store = configureStore(
    {
        reducer:{
            books:booksReduser
        }
    }
)
export default store