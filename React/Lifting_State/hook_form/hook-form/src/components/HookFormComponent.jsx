import React, { useState } from 'react'

const Form = () => {
    // firstName, lastName, email, password
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    let [userInfo, setUserInfo] = useState([])

    const createUser = (e) => {
        e.preventDefault()
        console.log("Form submitted", firstName, lastName, email, password)
        let userObj = {firstName,lastName, email, password}
        setUserInfo([...userInfo, userObj])
    }

    return (
        <div>
            <h1>Hook Form</h1>
            <form onSubmit={ createUser }>
            <div className= 'form-group'>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } className= 'form-control' />
            </div>
            <div className= 'form-group'>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } className= 'form-control' />
            </div>
            <div className= 'form-group'>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } className= 'form-control'  />
            </div>
            <div className= 'form-group'>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } className= 'form-control' />
            </div>
            <div className= 'form-group'>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } className= 'form-control' />
            </div>
            <input type="submit" value="Create User" className='btn btn-outline-dark mt-3' />
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