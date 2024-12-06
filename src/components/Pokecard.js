/**
 * Pokecard : Shows a single Pokemon, with their name, image, and type. 
 */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Pokecard({ pokemon = Pokecard.defaultProps.pokemon }) {
    // uses bootstrap cards for presentation.
    // uses map function to loop over the props array (passed in or default).
    return (
        <div className="container-fluid">
            <div className="row row-cols-1 row-cols-md-4 g-3">
                {pokemon.map(p => (
                    <div key={p.id} className="col">
                        <div className="card h-100 shadow-sm bg-light">
                            <div className="card-body text-center">
                                <h5 className="card-title">{p.name}</h5>
                                <img 
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`} 
                                    alt={p.name} 
                                    className="img-fluid mb-3"
                                />
                                <p className="card-text">
                                    Type: {p.type}<br />
                                    Base Experience: {p.base_experience}
                                </p>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}  // END Pokecard

Pokecard.defaultProps = {
    pokemon: [
        { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
        { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
        { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
        { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
        { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
        { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
        { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
        { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 },
    ],
};

export default Pokecard;