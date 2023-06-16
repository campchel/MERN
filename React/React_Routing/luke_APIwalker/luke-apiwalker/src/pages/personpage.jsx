// import { Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';
import axios from 'axios';






const Person = () => {
    const { id } = useParams();
    const [peopleInfo, setPeopleInfo] = useState();


    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`).then(response => {
            setPeopleInfo(response.data) 
        })
            .catch((error) => {
                console.log(error)
            })
    }, [id])

    return (

        <>
            {
                peopleInfo &&
                <div style={{ margin: "20px" }}>
                    <h3><span>Name: </span> {peopleInfo.name}</h3>
                    <h3><span>Height: </span>{peopleInfo.height}</h3>
                    <h3><span>Mass: </span>{peopleInfo.mass}</h3>
                    <h3><span>Hair Color: </span>{peopleInfo.hair_color}</h3>
                    <h3><span>Skin Color: </span>{peopleInfo.skin_color}</h3>
                </div>
            }
        </>

    )
}

export default Person