import React,{useState} from "react"
import './App.css';
import ProductList from './components/ProductList'
import AddProduct from './components/AddProduct'
import ProductInfo from './components/ProductInfo'
import {Switch,Route} from 'react-router-dom'
import EditProduct from './components/EditProduct'
import {useHistory} from 'react-router-dom'
import Button from '@mui/material/Button'



function App() {
  const history=useHistory()
  const [product , setProduct]=useState([])

  const productHandler=(current)=>{

    setProduct((prev)=>[current, ...prev])
  }

  return (
    <div>
    <Button onClick={()=>history.push('/')}>Home</Button>
    <Button onClick={()=>history.push('/add-product')}>Add Product</Button>
    
    <Switch>
 <Route exact path ='/'>
 

     <ProductList product={product} setProduct={setProduct} />
     
 
 </Route>
 <Route exact path='/add-product'>
 <AddProduct productHandler={productHandler}/>
 
 
 </Route>
    

<Route  exact path="/product-info/:id">       


<ProductInfo  product={product} setProduct={setProduct}/>  



</Route>
<Route exact path='/product/edit/:id'>
<EditProduct products={product} setProduct={setProduct}/>


</Route>




</Switch>
</div>
  
    
    
  );
}

export default App;
