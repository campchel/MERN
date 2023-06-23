import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


export default function Dashboard() {
    const [ title, setTitle ] = useState('')
    const [ price, SetPrice ] = useState('')
    const [ description, setDescription ] = useState('')
    const navigate = useNavigate()

    const changeTitle = (e) => {
        setTitle(e.target.value)
    }

    const changePrice = (e) => {
        SetPrice(e.target.value)
    }

    const changeDescription = (e) => {
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
                    onChange={changeTitle}
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
                    onChange={changePrice} 
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
                    onChange={changeDescription}
                ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    </div>
);
};