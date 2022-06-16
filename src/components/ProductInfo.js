import React,{useState,useEffect} from 'react'

import {useParams,useHistory } from "react-router-dom"
import './ProductList.css'
import Button from '@mui/material/Button'




const ProductInfo=()=>{
                         const history = useHistory()
        const {id} = useParams()

        const [product,setProduct]=useState({})
const getProductDetail=()=>{
                         fetch('https://6291ca0c9d159855f0802547.mockapi.io/product/'+ id
                         )
                         .then(data=>data.json())
                         .then((product)=>setProduct(product))        
}


useEffect(getProductDetail,[])

                     
return <div>
<div>
<img src ={product.image} alt={product.name} className='product-poster'/>
<div>
<h3>{product.name}</h3>
<h3>{product.price}</h3>
</div>

<div>
<p>{product.specification}</p>

</div>

<Button onClick={()=>history.goBack()}>back</Button>



</div>


</div>
}
export default ProductInfo