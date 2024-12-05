/**
 * Pokedex : Is provided, via props, an array of objects describing different pokemon, and renders a sequence of Pokecard components.
 */

import React from 'react';

function Pokedex(props){
    return (
        <>
        <p>Checking if the Component is making it to the client... <b>Hi, I'm {props.name}</b></p>
        </>
    )
}

export default Pokedex;