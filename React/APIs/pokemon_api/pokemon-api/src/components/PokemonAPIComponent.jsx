import React,{useState} from 'react'

const PokeFetch = () => {
    const [pokemon,setPokemon] = useState([]);

    const fetchPokemon = () =>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1010")
        .then((response)=>response.json())
        .then((response)=>{
            setPokemon(response.results)
        })
        .catch((error) => console.log(error))
    }

    return (
        <div style={{marginTop:'25px'}}>
            <button onClick={fetchPokemon}>Fetch Pokemon</button><br />
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