import React from 'react'
import { useParams } from 'react-router-dom'

const Wordcolor = () => {
    const {word,color,background} = useParams();
    const style = {
        color:color,
        backgroundColor:background
    }
  return (
    <div>
        {isNaN(word)?<h1 style={style}>The word is: {word}</h1>:""}
    </div>
  )
}

export default Wordcolor