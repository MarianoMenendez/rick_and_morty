import React, { useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import {consultaPersonaje} from "../../../redux/actions"

/*Estableces el valor que se está escribiendo en el input*/
export default function SerchBar({setCharacters, characters, onSearch}) {
    const dispatch = useDispatch();
    const character = useSelector(state => state.character)
    const [id, setId] = useState("") /*Creo un estado id para que vaya tomando el valor que vamos escribiendo en el input y luego pueda usar para buscar al personaje*/
    const handleInputChange = (event) => {
        setId(event.target.value)
    }
    const onClick = (id) => {
        if(id>826 || id<1) alert("No existen personajes con ese código")
        else {character.find(element => element.id == id) ? alert("El personaje ya existe") :(
        dispatch(consultaPersonaje(id))
        )}
    }
    /*Esta función hace la consulta al servidor con axios */ 
    /*Agregas un componente character al estado characters cuando toco click en Crear devolviendo al componente padre el listado de los personajes a agregar*/
    return (
    <div>
        {/* Creamos el serchbar */}
        <input type="text" onChange={handleInputChange} value={id} />
        <button onClick={() => onClick(id)} >Crear</button> {/*Cuando usamos el onClick y debemos pasar un parametro para que la función no se ejecute cada vez que re renderiza la página*/}
    </div>
    )}

    /*Qué hace este componente?
    Este componente tiene como responsabilidad:
    Crear un searchbar el cual buscará un personaje en un array de personajes y devolverá un array de personajes con los personajes encontrados en esa lista */