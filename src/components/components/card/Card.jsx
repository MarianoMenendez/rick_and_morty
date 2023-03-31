import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePersonaje, manageAddFavorites, manageDeleteFavorites} from "../../../redux/actions";

import styles from "./Card.module.css"

function Card({character}) {
    const [favoritesState, setFavoritesState] = useState(false)
    const dispatch = useDispatch()
    const handleClick = (event) => {
        dispatch(deletePersonaje(event.target.id))
        dispatch(manageDeleteFavorites(event.target.id))
    }
    const handleAddClick = (event) => {
        setFavoritesState(true)
        dispatch(manageAddFavorites(event.target.id))
    }
    const handleDeleteClick = (event) => {
        setFavoritesState(false)
        dispatch(manageDeleteFavorites(event.target.id))
    }
    const favorites = useSelector(state => state.favorites)
    useEffect(()=>{
        favorites.forEach(element => {
            if(element.id == character.id) setFavoritesState(true)
        })
    }, [favorites])

    return (
        <div>
            <div className="caraFrontal">
                <div className={styles.card}> {/*Esta key se renderiza en el Virtual DOM y hace que el componente devuelto tenga una clave, por si hay que modificar algo en el dom solo modifique realmente los valores que cambiaron */}
                        <button id={character.id} onClick={handleClick}>x</button>
                        {!favoritesState ? <button id={character.id} onClick={handleAddClick}>❤</button> : (
                        <button id={character.id} onClick={handleDeleteClick}>💖</button>)}
                    <div className={styles.imgContainer}>
                        <Link to={`/detail/${character.id}`}><img src={character.image} alt={character.name} className={styles.img}/></Link> {/*Si no agrego la barra antes me asume que se va a un hijo*/}
                    </div>
                    <div className={styles.nombreContainer}>
                        <p className={styles.nombre}>{character.name}</p>
                    </div>
                </div>
            </div>
        </div>
    
    )
}
export default Card