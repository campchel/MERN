import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'

const Number = () => {
    const navigate = useNavigate();
    const {num} = useParams();

    if(isNaN(num)){
        navigate('/home');
    }

    return (
        <div>
            {isNaN(num)? <h1>The word is: {num}</h1>:<h1>The number is: {num}</h1>}
        </div>
    )
}

export default Number