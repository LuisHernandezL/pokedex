import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Pagination from './Pagination';
import PokemonCard from './PokemonCard';
import '../styles/pokedex.css'
import logo from '../styles/images/pokedexLogo.png'
import NavBar from './NavBar';

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
            <NavBar/>
            
            <p className='wellcome-text'><b>Bienvenido! {userName}</b>, aqui podras encontrar tu pokemon favorito!</p>
            
            <form>
                <input type="text"/>
            </form>

            <div className="info-container">
                <div className='card-container'>
                    <ul className='list-container'>
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
            

            
        </div>
    );
};

export default Pokedex;