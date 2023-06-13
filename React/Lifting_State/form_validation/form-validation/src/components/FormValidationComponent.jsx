import React, {useReducer} from 'react'


const Form = () => {
    const initialState ={
        firstName:{
            value:"", 
            error:null
        },
        lastName:{
            value:"",
            error:null
        },
        email:{
            value:"",
            error:null
        }
    };
    
    const reducer =(state,action)=> {
        return{
            ...state,
            [action.type]: action.payload
        };
    }

    const [state,dispatch] = useReducer(reducer, initialState);

    const Changehandler=(e)=>{
        const {name,value} = e.target;
        dispatch({
            type:name,
            payload:value
        })
    }

return (
    <div>
        {JSON.stringify(state)}
        <div>
            <div>
                <label htmlFor="firstName">First Name: </label>{''}
                <input type="text" name='firstName' value={state.firstName} onChange={Changehandler}/> <br />
                {state.firstName.error?<h3 className="error" style={{color:'red'}}>First Name must be at least 3 characters long</h3>:""}
            </div>
            <div>
                <label htmlFor="lastName">Last Name: </label>{''}
                <input type="text" name='lastName' value={state.lastName} onChange={Changehandler}/> <br />
                {state.lastName.error?<h3 className="error" style={{color:'red'}}>Last Name must be at least 3 characters long</h3>:""}
            </div>
            <div>
                <label htmlFor="email">Email: </label>{''}
                <input type="email" name='email' value={state.email} onChange={Changehandler} /><br />
                {state.email.error?<h3 style={{color:'red'}}>Invalid email</h3>:""}
            </div>
        </div>
    </div>
)

}

export default Form