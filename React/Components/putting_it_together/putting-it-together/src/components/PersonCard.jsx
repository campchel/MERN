import React, {useState} from 'react';

const PersonCard = (props) => {
        const {firstName, lastName, age, hairColor} = props
        let [plusAge, setAge] = useState(age);
        const updateAge = () => setAge(plusAge + 1);
    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {plusAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={updateAge}>Happy Birthday!</button> 
        </div>
    )
}

export default PersonCard