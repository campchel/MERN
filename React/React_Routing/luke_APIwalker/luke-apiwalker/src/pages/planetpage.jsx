import { Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Planet = () => {
    const { id } = useParams();
    const [planetInfo, setPlanetInfo] = useState();


    useEffect(() => {

        axios.get(`https://swapi.dev/api/planets/${id}/`).then(response => {
            setPlanetInfo(response.data) 
        })
            .catch((error) => {
                console.log(error)
            })
    }, [id])

    return (
        <>
            {
                planetInfo &&
                <div style={{ margin: "20px" }}>
                    <h3><span>Name:</span> {planetInfo.name}</h3>
                    <h3><span>Terrain: </span>{planetInfo.terrain}</h3>
                    <h3><span>Surface Water: </span>{planetInfo.surface_water}</h3>
                    <h3><span>Population: </span>{planetInfo.population}</h3>
                </div>
            }
        </>
    )





}

export default Planet