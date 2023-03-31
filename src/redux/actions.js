import { CONSULTA_PERSONAJE, DELETE_PERSONAJE, DETAIL_PERSONAJE, MANAGEDELETE_FAVORITES, MANAGEADD_FAVORITES } from "./action-types";


/*Las actions creators son acciones que retornan un objeto con un type y cuando sea necesario un payload*/

export const consultaPersonaje = (id) => { //vamos a evitar duplicados
    return function(dispatch) { //Se lo tengo que pasar al middelware thunk
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => res.json())
        .then(data => {
            dispatch({type: CONSULTA_PERSONAJE, payload: data})})
    }
}

export const deletePersonaje = (id) => {
    return {
        type: DELETE_PERSONAJE, payload: id
    }
}

export const detailsPersonaje = (id) =>  {
    return {
        type: DETAIL_PERSONAJE, payload: id
    }
}

export const manageAddFavorites = (id)  => {
    return {
        type: MANAGEADD_FAVORITES, payload: id
    }
}
export const manageDeleteFavorites = (id)  => {
    return {
        type: MANAGEDELETE_FAVORITES, payload: id
    }
}