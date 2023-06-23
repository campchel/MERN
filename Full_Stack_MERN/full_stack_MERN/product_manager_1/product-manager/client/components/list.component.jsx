import React from 'react'
import axios from 'axios';
import {Link} from "react-router-dom"
import DeleteBtn from './DeleteButton';

const ProductList = (props) => {
    const {products,deleteProduct} = props

    

  return (
    <div>
        {products.map((p,i)=>{
            return(
                <div key={i}>
                    <h1>All Products:</h1>
                    <Link to={`/product/${p._id}`}><h1>{p.title}</h1></Link>
                    <Link to={`/update/${p._id}`}>Update</Link> <br />
                    <DeleteBtn successCallback={()=>deleteProduct(p._id)}/>
                    <hr />
                </div>
            )
        })}
    </div>
  )
}

export default ProductList