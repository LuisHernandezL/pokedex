import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Pagination from './Pagination';
import PokemonCard from './PokemonCard';

const Pokedex = () => {
    const userName = useSelector(state=>state.userName)
    const [pokemons,setPokemons]=useState([]);
    const [loading,setLoading]=useState(false);
    const [currentPage,setCurrentPage]=useState(1);
    const[postPerPage,setPostPerPage]=useState(20);
    useEffect(()=>{
        setLoading(true);
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126')
        .then(r=>{
            setPokemons(r.data.results);
            setLoading(false);
        });
    },[]);
    //get current post
    const indexOfLastPost=currentPage*postPerPage;
    const indexOfFirtsPost=indexOfLastPost-postPerPage;
    const currentPost= pokemons.slice(indexOfFirtsPost,indexOfLastPost);
    
    //change page
    const paginate=(pageNumber)=>{setCurrentPage(pageNumber)}
    return (
        <div className='pokedex-container'>
            <h2 className='pokedex-title'>Pokedex</h2>
            <p>Bienvenido <b>{userName}</b>, aqui podras encontrar tu pokemon favorito!</p>
            <div className='card-container'>
                <ul>
                    {
                        currentPost.map(pokemon=>(
                            //se puede poner pokemon.url en pokemon
                            <li key={pokemon.name}><PokemonCard pokemon={pokemon.url}/></li>
                        ))
                    }
                    <Pagination postPerPage={postPerPage} totalPost={pokemons.length} paginate={paginate} currentPage={currentPage}/>
                </ul>

            </div>

            
        </div>
    );
};

export default Pokedex;