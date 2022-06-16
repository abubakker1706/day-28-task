
import React,{useState,useEffect} from 'react'
import {useParams,useHistory} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from 'formik'
import * as yup from "yup"













const EditProduct =()=>{
const [product , setProduct] =useState(null)

const {id}=useParams();

const getProductUpdate=()=>{
                         fetch('https://6291ca0c9d159855f0802547.mockapi.io/product/'+ id)
                         .then(data=>data.json())
                         .then((products)=>setProduct(products))        
}


useEffect(getProductUpdate,[])

return  product?  <EditForm product={product} /> : ""


}





const EditForm =({product})=>{


                         const history =useHistory()
                         // const[name ,setName]=useState(product.name)
                         // const[image ,setImage]=useState(product.image)
                         // const[price ,setPrice]=useState(product.price)
                         // const[specification ,setSpecification]=useState(product.specification)
                         const FormValidationSchema=yup.object({
                                                  name:yup.string().required(),
                                                  image:yup.string().required(),
                                                  price:yup.string().required(),
                                                  specification:yup.string().required(),
                                                 
                                                  
                         
                         })
                         const formik = useFormik({
                                                  initialValues:product,
validationSchema:FormValidationSchema,
onSubmit:(values)=>{
 fetch('https://6291ca0c9d159855f0802547.mockapi.io/product/' + product.id,{
                          method: 'PUT',
                         body:JSON.stringify(values),
                headers: {'Content-Type': 'application/json'}
}).then(()=>  history.goBack())
                                                                          }
})
                         
                         


                         

                         return(

 <div>
 <form onSubmit={formik.handleSubmit}>
 <TextField 
 type="text"
 id='name'
 name='name'
  placeholder="Mobile Name" 
  value={formik.values.name} 
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
 error={formik.errors.name && formik.touched.name}
 helperText={formik.errors.name && formik.touched.name ? formik.errors.name : "" }  
  
  
  
  />
 <TextField 
 type="url"
 id='image'
 name='image'
  placeholder="Mobile url"
 value={formik.values.image} 
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
 error={formik.errors.image && formik.touched.image}
 helperText={formik.errors.image && formik.touched.image ? formik.errors.image : "" }  
  
  
  
  />
 <TextField 
 type="text" 
 id='price'
 name='price'
 placeholder="Mobile Price" 
 value={formik.values.price} 
 onChange={formik.handleChange}
 onBlur={formik.handleBlur}
 error={formik.errors.price && formik.touched.price}
 helperText={formik.errors.price && formik.touched.price ? formik.errors.price : "" }  
 
 
 
 />
 <TextField type="text"
 id='specification'
 name='specification'
  placeholder="Mobile Specification" 
  value={formik.values.specification}
   onChange={formik.handleChange}
   onBlur={formik.handleBlur}
   error={formik.errors.specification && formik.touched.specification}
   helperText={formik.errors.specification && formik.touched.specification ? formik.errors.specification : "" }  
   
   
   />
 
 
 <Button type="submit">Add Mobile</Button>
 
 
 </form>
                                        
                                                  
                                                  
 </div>
                         
                         )

}





export default EditProduct