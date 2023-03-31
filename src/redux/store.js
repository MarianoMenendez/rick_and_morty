import { createStore, applyMiddleware, compose } from "redux"
import reducer from "./reducer"
import thunkMiddleware from "redux-thunk"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
)




export default store

/*
1- Creo 3 archivos store, actions, reducer
    store: es un objeto que se crea con la función createStore de redux
    reducer: es una función que tiene un state y actions
    actions: son las acciones que quiero ejecutar
    actions-type: es un archivo para crear los nombres de las acciones dentro de constantes
    */