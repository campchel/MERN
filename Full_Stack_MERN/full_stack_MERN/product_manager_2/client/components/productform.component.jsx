import React,{useState,useEffect} from 'react'

const ProductForm = (props) => {
    const { initialTitle, initialPrice,initialDescription, onSubmitProp } = props;
    const [formData,setformData]=useState({title:initialTitle,price:parseFloat(initialPrice).toFixed(2),description:initialDescription});

    const handleChange =(e)=>{
        const name = e.target.name
        const value = e.target.value
        setformData({...formData,[name]:value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        onSubmitProp(formData)
        setformData({title:"",price:"",description:""})
    }


  return (
    <div>
        <h1>Product Manager</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input type="text" name='title' value={formData.title} onChange={handleChange}/> <br />
            <label htmlFor="price">Price: </label>
            <input type="number" name="price" value={formData.price} onChange={handleChange}/> <br />
            <label htmlFor="description">Description:</label>
            <input type="text" name='description' value={formData.description} onChange={handleChange} /> <br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default ProductForm