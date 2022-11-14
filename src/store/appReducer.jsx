import { GET_CONTACTS, GET_SINGLE_CONTACT, GET_MOVIE_CHARACTERS } from "./AppActions";

const appReducer = (state, action) => {
    switch (action.type) {
        case GET_CONTACTS:
            sessionStorage.setItem('contacts', JSON.stringify(action.payload));

        return {
            ...state,
            movies: action.payload,
        }

        case GET_SINGLE_CONTACT: 
            sessionStorage.setItem('contact', JSON.stringify(action.payload));

        return {
            ...state,
            singleMovie: action.payload,
        }

        case GET_MOVIE_CHARACTERS: 
            sessionStorage.setItem('casts', JSON.stringify(action.payload));

        return {
            ...state,
            movieCast: action.payload,
        }

        default:
            return state
    }
}

export default appReducer