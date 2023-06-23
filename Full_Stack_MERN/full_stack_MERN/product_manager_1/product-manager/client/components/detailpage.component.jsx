import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {useParams,useNavigate} from 'react-router-dom'
import DeleteBtn from './deletebtn.component';  

const Detail = (props) => {
  const navigate = useNavigate();
    const [product,setProduct] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+id)
        .then((res)=>setProduct(res.data.result))
        .catch((err)=>console.log(err))
    },[])

    const deleteProduct = (id) => {
      axios.delete("http://localhost:8000/api/products/" + id)
        .then(res => console.log(res))
        .catch(err => console.log(err))
      navigate('/')
    }

  return (
    <div>
        <h1>{product.title}</h1>
        <h2>{parseFloat(product.price).toFixed(2)}</h2>
        <h3>{product.description}</h3>
        <button onClick={()=>navigate(-1)}>Go Back</button><br />
        <button onClick={()=>navigate('/update/'+id)}>Update</button><br />
        <DeleteBtn successCallback={()=>deleteProduct(id)}/>
    </div>
  )
}

export default Detail