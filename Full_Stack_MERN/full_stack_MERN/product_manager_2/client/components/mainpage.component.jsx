import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from './list.component'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Main = () => {
const navigate = useNavigate();
const [products, setProducts] = useState([]);
const [loaded, setLoaded] = useState(false);

useEffect(() => {
    axios.get("http://localhost:8000/api/products")
        .then((res) => {
        setProducts(res.data.result);
        setLoaded(true)
    })
        .catch((err) => { console.log(err) })
}, [loaded])

const createProduct = (formData) => {
    axios.post("http://localhost:8000/api/products", formData)
        .then((res) => {
        console.log(res)
        setLoaded(false)
    })
        .catch((err) => console.log(err));
}

const deleteProduct =(id)=>{
    axios.delete("http://localhost:8000/api/products/"+id)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    setLoaded(false)
}

return (
    <div>
        <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription="" />
        <hr />
        {loaded && <ProductList products={products} updateList={() => setLoaded(!loaded)} deleteProduct={deleteProduct}/>}
    </div>
    )
}

export default Main