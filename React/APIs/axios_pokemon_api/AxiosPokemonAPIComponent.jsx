import React,{useState} from 'react'
import axios from 'axios'

const PokeFetch = () => {
    const [poke,setPoke] = useState([]);

    const fetchPoke = () =>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1010")
        .then((response)=>response.json())
        .then((response)=>{
            console.log(response)
            console.log("Using fetch on the pokeapi")
            setPoke(response.results)
        })
        .catch((error) => console.log(error))
    }

    const axiosPoke = () =>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1010")
        .then((response)=>{
            console.log(response)
            console.log("Using Axios.get on the pokeapi")
            setPoke(response.data.results)
        })
    }

  return (
    <div style={{marginTop:'25px'}}>
        <button onClick={fetchPoke}>Fetch Pokemon</button><br />
        <button onClick={axiosPoke}>Axios Pokemon</button>
        <ul>
        {poke.map((p,i)=>{
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