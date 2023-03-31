import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/components/card/Card"

export default function Favorites() {
    const favorites = useSelector(state => state.favorites)
    return(
        <div>
            {favorites.map(character => <Card key={character.id} character={{...character}}/>)}
        </div>
    )
}