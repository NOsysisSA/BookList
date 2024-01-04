import*as a from './actionTypes'
export const addbook = (newBook) => {
    return{
        type: a.ADD_BOOK,
        payload: newBook
    }
}