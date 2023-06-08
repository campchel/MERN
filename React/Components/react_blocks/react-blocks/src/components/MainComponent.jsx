import React from 'react'

const MainStyle = {
    flex: '4',
    margin:'20 px 0 0 0',
    padding: '20px',
    background: 'red'
}

const Main = (props) => {
    return (
        <div style={MainStyle}>{props.children}</div>
    )
}


export default Main