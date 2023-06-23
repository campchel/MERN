import React from 'react'

const DeleteBtn = (props) => {
    const {successCallback} = props;
  return (
    <button onClick={successCallback}>
        Delete
    </button>
  )
}

export default DeleteBtn