import React,{useContext} from 'react'
import ContextObject from '../context/context'

const Navbar = () => {
    const context = useContext(ContextObject);
  return (
    <div style={{width:'100%',height:'70px',backgroundColor:'rebeccapurple',color:'white',paddingTop:'25px'}}>
        <h1 style={{marginTop:'0'}}>Welcome, {context.name}</h1>
    </div>
  )
}

export default Navbar