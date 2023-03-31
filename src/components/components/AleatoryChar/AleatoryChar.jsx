import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { consultaPersonaje } from "../../../redux/actions";

export default function AleatoryCharacter({setCharacters, characters}){
    const dispatch = useDispatch()
    const character = useSelector(state => state.character)
    const aleatoryCharacter = () => {
        const numero = (Math.floor(Math.random()*826)+1)
        character.find(element => element.id == numero) ? alert("El personaje ya existe") : (
        dispatch(consultaPersonaje(numero))
        )
        
  
    }
    return(
        <button onClick={() => aleatoryCharacter()}>Aleatorio</button>
    )
}