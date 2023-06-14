import React,{useState} from 'react'
import axios from 'axios'

const PokeFetch = () => {
    const [pokemon,setPokemon] = useState([]);

    const fetchPoke = () =>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1010")
        .then((response)=>response.json())
        .then((response)=>{
            setPokemon(response.results)
        })
        .catch((error) => console.log(error))
    }

    const axiosPoke = () =>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1010")
        .then((response)=>{
            console.log(response)
            setPokemon(response.data.results)
        })
    }

  return (
    <div style={{marginTop:'25px'}}>
        <button onClick={fetchPoke}>Fetch Pokemon</button><br />
        <button onClick={axiosPoke}>Axios Pokemon</button>
        <ul>
        {pokemon.map((p,i)=>{
            return(
                <li key={i}>
                    <p>{i+1}. {p.name[0].toUpperCase() + p.name.slice(1)}</p>
                    <hr />
                </li>
            )
        })}
        </ul>
    </div>
  )
}

export default PokeFetch