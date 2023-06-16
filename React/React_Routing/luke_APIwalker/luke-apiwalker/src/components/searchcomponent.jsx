import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import obiwanImage from "./static/obiwankenobi.png"





const Search = (props) => {
    const [user, setUser] = useState('person');
    const [idInput, setIdInput] = useState();
    const [error, setError] = useState('');
    const [image, setImage] = useState(false);
    const navigate = useNavigate();


    const submitHandler = (e) => {
        e.preventDefault();
        if(user === 'person' && idInput < 10 || 'planets' && idInput < 10 || 'starships' && idInput < 20){
            navigate(`/${user}/${idInput}`)
            setError('')
            setImage('');
        }

        else if (user === 'person' && idInput >= 11 || 'planets' && idInput >= 11 || 'starships' && idInput >= 21 ) {
                setError("These arent the droids you're looking for!")
                setImage(true)
                navigate('/');
        }
    }

    const userHandler = (e) => {
        setUser(e.target.value);
    }

    const idHandler = (e) => {
        setIdInput(e.target.value);
    }

    return (
        <div className="container mt-5">
            <form onSubmit={submitHandler}>

                <div className="form-row align-items-center">
                    <div className="col-auto">
                        <label htmlFor="searchInput">Search for: </label>
                    </div>
                    <div className="col-auto">
                        <select onChange={userHandler} defaultValue={user} className="form-control">
                            <option>People</option>
                            <option>Planets</option>
                            <option>Starships</option>
                        </select>
                    </div>
                </div>
                <div className="form-row align-items-center mt-3">
                    <div className="col-auto">
                        <label htmlFor="searchNumber">Enter ID:</label>
                    </div>
                    <div className="col-auto">
                        <input onChange={idHandler}
                            type="number"
                            className="form-control"
                            id="searchId"
                            placeholder="Enter ID number"
                        />
                    </div>
                </div>
                <div className="form-row mt-3">
                    <div className="col">
                        <button type="submit" className="btn btn-primary">Search</button>
                    </div>
                </div>
            </form>
            <div style={{ margin: "20px" }} className="col">
                <Link to="/" className="btn btn-primary">Home</Link>
            </div>
            <div>
                <p style={{ color: "red" }}>{error}</p>
                {image ? <img src={obiwanImage} alt = "star wars img"></img> : ""}
            </div>
        </div>

    )
    }
export default Search