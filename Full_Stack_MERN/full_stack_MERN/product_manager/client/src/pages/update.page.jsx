import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Update() {
    const [ product, setProduct] = useState('')
    const {id} = useParams()
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
        axios.put(`http://localhost:8000/api/products/${id}`, productObject)
        navigate('/products/list')
    }


    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {setProduct(res.data.results)})
        .catch((err) => {console.log(err)})
    }, [])

    return (
        <div>
            <h1>Edit {product.title}</h1>
            <form onSubmit={submitProduct} >
                <div>
                <label htmlFor='title' >Title</label>
                <input type='text' name='title' placeholder={product.title} onChange={changeTitle} />
                </div>
                <div>
                <label htmlFor='price' >Price</label>
                <input type='number' name='price' placeholder={product.price} onChange={changePrice} />
                </div>
                <div>
                <label htmlFor='description' >Description</label>
                <input type='text' name='description' placeholder={product.description} onChange={changeDescription} />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}