import React, { useState } from "react";
import { Link, useLocation} from "react-router-dom";

export default function NavBar({logOut}) {
    const id = useLocation()
    console.log(id)
    
    return(
        id.pathname =="/" ? <></> : (
        <nav>
            <Link to="/home"><button >Home</button></Link>
            <Link to="/about"><button>About</button></Link>
            <Link to="/favorites"><button>Favorites</button></Link>
            
            <button onClick={logOut}>Cerrar Sesion</button>
        </nav>
        )
    )
}