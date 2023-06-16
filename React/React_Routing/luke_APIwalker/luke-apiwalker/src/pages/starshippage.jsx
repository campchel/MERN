import { Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Starship = () => {
    const { id } = useParams();
    const [starshipInfo, setStarshipInfo] = useState();

    console.log(starshipInfo)
    useEffect(() => {

        axios.get(`https://swapi.dev/api/starships/${id}/`).then(response => {
            console.log(response)
            setStarshipInfo(response.data) 
        }   
        )
            .catch((error) => {
                console.log(error)
            })
    }, [id])

    return (
        <>
            {
                starshipInfo &&
                <div style={{ margin: "20px" }}>
                    <h3><span>Name:</span> {starshipInfo.name}</h3>
                    <h3><span>Model: </span>{starshipInfo.model}</h3>
                    <h3><span>Crew: </span>{starshipInfo.crew}</h3>
                    <h3><span>Passengers: </span>{starshipInfo.passengers}</h3>
                </div>
            }
        </>
    )





}

export default Starship