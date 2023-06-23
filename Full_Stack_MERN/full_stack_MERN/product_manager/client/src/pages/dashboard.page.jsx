import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


export default function Dashboard() {
    const [ title, setTitle ] = useState('')
    const [ price, SetPrice ] = useState('')
    const [ description, setDescription ] = useState('')
    const navigate = useNavigate()

    const updateTitle = (e) => {
        setTitle(e.target.value)
    }

    const updatePrice = (e) => {
        setPrice(e.target.value)
    }

    const updateDescription = (e) => {
        setDescription(e.target.value)
    }

    const submitProduct = (e) => {
        e.preventDefault()
        const productObject = {title, price, description}
        axios.post('http://localhost:8000/api/products/new', productObject)
        navigate('/products/list')
    }

    return (
        <div className="container" style={{ margin: "0 auto", width: "500px", padding: "20px" }}>
        <h1>Product Manager</h1>
        <form onSubmit={submitProduct} >
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    <h3>Title:</h3>
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    onChange={updateTitle}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="price" className="form-label">
                    <h3>Price:</h3>
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="price"
                    value={price}
                    onChange={updatePrice} 
                />
            </div>

            <div className="mb-3">
                <label htmlFor="description" className="form-label">
                    <h3>Description:</h3>
                </label>
                <textarea
                    className="form-control"
                    id="description"
                    rows="3"
                    value={description}
                    onChange={updateDescription}
                ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    </div>
);
};