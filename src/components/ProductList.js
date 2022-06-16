import React,{useState ,useEffect} from 'react'

import ProductItem from './ProductItem'
import './ProductList.css'
import {useHistory} from 'react-router-dom'

import Button from '@mui/material/Button'
const ProductList =(props)=>{

     const [product,setProduct]=useState([])
const history = useHistory()
const getProduct=()=>{
                         fetch('https://6291ca0c9d159855f0802547.mockapi.io/product',
                         {method:"GET"})
                         .then(data=>data.json())
                         .then((product)=>setProduct(product))        
}

useEffect(getProduct,[])
const deleteProduct=(id) =>{
     fetch('https://6291ca0c9d159855f0802547.mockapi.io/product/'+id ,{
                              method:"DELETE"
     }).then(data=>data.json()).then(()=>getProduct())
}
                        
                         return(
                         <div className="product-list">

                         
                    {product.map((product,index)=>(
                                             <ProductItem
                                             
                                             id= {product.id}
                                             name={product.name}
                                             image={product.image}
                                             specification={product.specification}
                                             price={product.price}
                                             delete={<Button onClick={()=>deleteProduct(product.id)}>Delete</Button>}
                                             productInfo={<Button 
                         onClick={()=>history.push('/product-info/' + product.id)}> view</Button>}
                                             editProduct={<Button 
                                                  onClick ={()=> history.push('/product/edit/'+ product.id)}
                                             
                                             
                                             
                                             >edit</Button>}
                                             
                                             />



                                            
                   
                                             ))}

                                           
                      
                         
                         </div>
                         )
}
export default ProductList;