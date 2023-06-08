import React, { useState } from 'react'


const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const [inputError, setInputError]= useState("");

    const errorHandler = (e) => {
        setInputError(e.target.value);
        if(e.target.value.length < 1) {
            setInputError("Input is required!");
        }else if (e.target.value.length < 2) {
            setInputError("Input needs to be at least 2 characters long!");
        }else{
            setInputError("");
        }
    }
    let [userInfo, setUserInfo] = useState([])

    const createUser = (e) => {
        e.preventDefault()
        console.log("Form submitted", firstName, lastName, email, password)
        const userObj = {firstName,lastName, email, password}
        setUserInfo([...userInfo, userObj])    
    }

    return (
        <div>
            <h1>More Forms</h1>
            <form onSubmit={ createUser }>
            <div className= 'form-group'>
                <label>First Name: </label> 
                <input type="text" onChange={errorHandler} className= 'form-control' />
                {firstName.length>0 && firstName.length<2 ? <p>must be 2 characters</p> : ""}
            </div>
            <div className= 'form-group'>
                <label>Last Name: </label> 
                <input type="text" onChange={errorHandler} className= 'form-control' />
            </div>
            <div className= 'form-group'>
                <label>Email Address: </label> 
                <input type="text" onChange={errorHandler} className= 'form-control'  />
            </div>
            <div className= 'form-group'>
                <label>Password: </label>
                <input type="text" onChange={errorHandler} className= 'form-control' />
            </div>
            <div className= 'form-group'>
                <label>Confirm Password: </label>
                <input type="text" onChange={errorHandler} className= 'form-control' />
            </div>
            <div>
            {
                inputError ? <p>{inputError}</p> : ""
            }
            <input type="submit" value="Create User" className='btn btn-outline-dark mt-3'></input>
            </div>
            </form>
            <hr />
            <div className='user-card'>
                {
                    userInfo.map((user, index)=>{
                        return(
                            <div key={index}>
                                <h3>{user.firstName}</h3>
                                <p>First Name: {index}</p>
                                <h4>{user.lastName}</h4>
                                <h5>{user.email}</h5>
                                <h5>{user.password}</h5>
                            </div>
                        )
                    })
                }
            </div>  
        </div>
    )
}

export default Form