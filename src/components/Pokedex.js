/**
 * Pokedex : Is provided, via props, an array of objects describing different pokemon, and renders a sequence of Pokecard components.
 */

import React from 'react';
import Pokecard from './Pokecard';

function Pokedex(){
    return (
        <>
            <Pokecard />
        </>
    )
}

export default Pokedex;