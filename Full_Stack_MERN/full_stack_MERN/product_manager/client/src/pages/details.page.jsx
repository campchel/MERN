import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Details() {
    const [ product, setProduct] = useState('')
    const {id} = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {setProduct(res.data.results)})
        .catch((err) => {console.log(err)})
    }, [])

    const deleteProduct = (e) => {
        e.preventDefault()
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .catch((err) => {console.log(err)})
        navigate('/products/list')
    }

    return (
        <div>
            <h1>View One Product</h1>
            <table className='table'>
                <thead>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td>
                            <button> <Link to={`/products/update/${product._id}`}>Edit</Link></button>|
                            <button onClick={deleteProduct}>Delete</button>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}
