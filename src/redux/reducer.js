import { CONSULTA_PERSONAJE, DELETE_PERSONAJE, DETAIL_PERSONAJE, MANAGEADD_FAVORITES, MANAGEDELETE_FAVORITES } from "./action-types"
const initialState = {
    character: [],
    charDetail: {},
    favorites: []
}

export default function reducer(state = initialState, action) {
    switch (action.type){
        case CONSULTA_PERSONAJE:
            return {...state, character: [...state.character, action.payload] }
        case DELETE_PERSONAJE:
            return{...state, character: state.character.filter(character=> character.id != action.payload)}
        case DETAIL_PERSONAJE:
            console.log(state.charDetail)
            return {...state, charDetail: state.character.filter(character=> character.id == action.payload)[0]}
        case MANAGEADD_FAVORITES:
            return {...state, favorites: [...state.favorites, state.character.filter(character=> character.id == action.payload)[0]]}
        case MANAGEDELETE_FAVORITES:
            return {...state, favorites: state.favorites.filter(character=> character.id != action.payload)}
        default:
            return {...state}
    }
}

//el reducer siempre retorna una copia del estado y el elemento que quiero modificar..