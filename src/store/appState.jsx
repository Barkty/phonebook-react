// import { useReducer } from "react";
// import { GET_CONTACTS, GET_MOVIE_CHARACTERS, GET_SINGLE_CONTACT } from "./AppActions";
// import AppContext from "./appContext";
// import appReducer from "./appReducer";

// let phoneContacts = JSON.parse(sessionStorage.getItem('contacts')) || null
// let singleContact = JSON.parse(sessionStorage.getItem('contact')) || null
// let movieCast = JSON.parse(sessionStorage.getItem('casts')) || null

// const initialState = {
//     movieCast: movieCast,
//     phoneContacts: phoneContacts,
//     singleContact: singleContact
// }

// const AppState = ({children}) => {
//     const [state, dispatch] = useReducer(appReducer, initialState);

//     const getAllContacts = (allMovies) => {
//         dispatch({
//             type: GET_CONTACTS,
//             payload: allMovies
//         })
//     }

//     const getSingleContact = (movie) => {
//         dispatch({
//             type: GET_SINGLE_CONTACT,
//             payload: movie
//         })
//     }

//     const getMovieCast = (cast) => {
//         dispatch({
//             type: GET_MOVIE_CHARACTERS,
//             payload: cast
//         })
//     }


//     return (
//         <AppContext.Provider value={{...state, getAllContacts, getSingleContact, getMovieCast}}>
//             {children}
//         </AppContext.Provider>
//     )
// }

// export default AppState