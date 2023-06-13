import React,{useContext} from 'react'
import ContextObject from '../context/context';

const Form = () => {
    const context = useContext(ContextObject)
  return (
    <div style={{marginTop:'20px'}}>
        <label htmlFor="name">Your Name: </label>
        <input type="text" name='name' placeholder='Your name' onChange={(e)=>context.setName(e.target.value)}/>
    </div>
  )
}

export default Form
