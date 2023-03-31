import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { detailsPersonaje } from "../../../redux/actions";

export default function Details() {
    const {id} = useParams();
    console.log(id)
    const charDetail = useSelector(state => state.charDetail) //Tener mucho cuidado con el nombre que le ponemos
    const dispatch = useDispatch()
    useEffect(()=>{dispatch(detailsPersonaje(id))
    console.log(charDetail)}, []) //Se que esto yiene un problema que debe desmontarse y quitar borrar el cardDetail que me queda en el estado global porque si es algo pesado va a tardar en cambiarlo y es una mala experiencia de usuario. SE HACE CON USE efect
    
    return(
       <div>
            <img src={charDetail.image && charDetail.image} alt={charDetail.name} />
            <h2>{charDetail.name}</h2>
            <h2>{charDetail.state}</h2>
            <h2>{charDetail.origin && charDetail.origin.name}</h2>
       </div>
    )
}