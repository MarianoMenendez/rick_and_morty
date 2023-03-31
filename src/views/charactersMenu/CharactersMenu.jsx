import AleatoryCharacter from "../../components/components/AleatoryChar/AleatoryChar";
import Cards from "../../components/containers/cards/Cards";
import SerchBar from "../../components/containers/searchBar/SearchBar";


export default function CharactersMenu() {
    return(
        <>
            <div><SerchBar />
            <AleatoryCharacter/>
            </div>
            <div>Aca van a ir tres filtros que van a filtrar los personajes que se agregaron</div>
            <div>
                <Cards /> {/*La key se agrega cuando invocas al componente */}
            </div>
        </>
    )
}

//CharactersMenu va a ser la encargada de interactuar con los personajes:
/*
1- Permite crear personajes en función de su ID
    El characters importado es un array que contiene 5 objetos
    Para crear personajes le pasa la información de los personajes que deben ser creados a CARDS
    cards es la responsable de procesar esa información y devolver los personajes.
    De donde sale la infomación de los personajes a crear? De un input que hace el usuario.
    Se consultará a un servidor por los personajes a crear
2- Agregar a favoritos a personajes.
3- Filtar personajes.
4- Borrar personajes.
*/