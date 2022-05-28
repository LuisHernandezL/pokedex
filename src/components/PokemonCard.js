import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PokemonCard = ({pokemon,loading}) => {
    /*  if(loading){
        return <h2>Loading..</h2>
    } */
    const [pokemonInfo,setPokemonInfo]=useState({});
    useEffect(()=>{
        axios.get(pokemon)
        .then(res=>setPokemonInfo(res.data))
    },[])
    

 
    
    return (
        <div className='pokemon-card-container'>
            <div className='card-info'>
                <h3>{pokemonInfo.name}</h3>
                <h4>{pokemonInfo.types?.[0].type.name} / {pokemonInfo.types?.[1]?.type.name}</h4>
                <p>Tipo</p>
                <div>
                    <div>
                        <p>{pokemonInfo.stats?.[0].stat.name}</p><h4>{pokemonInfo.stats?.[0].base_stat}</h4>
                        <p>{pokemonInfo.stats?.[1].stat.name}</p><h4>{pokemonInfo.stats?.[1].base_stat}</h4>
                    </div>
                    <div>
                        <p>{pokemonInfo.stats?.[2].stat.name}</p><h4>{pokemonInfo.stats?.[2].base_stat}</h4>
                        <p>Velocidad</p><h4>{pokemonInfo.stats?.[5].base_stat}</h4>
                    </div>
                    
                </div>
                
            </div>

            
        </div>
    );
};

export default PokemonCard;