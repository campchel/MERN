import React,{useState} from 'react'
import ContextObject from '../context/context'

const Wrapper = (props) => {
    const [name, setName] = useState("Name");
  return (
    <div>
        <ContextObject.Provider value={{name,setName}}>
            {props.children}
        </ContextObject.Provider>
    </div>
  )
}

export default Wrapper