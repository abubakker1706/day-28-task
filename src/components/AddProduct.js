import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useHistory} from 'react-router-dom'
import {useFormik} from 'formik'
import * as yup from "yup"










const AddProduct=()=>{
const history =useHistory()
// const[name ,setName]=useState('')
// const[image ,setImage]=useState('')
// const[price ,setPrice]=useState('')
// const[specification ,setSpecification]=useState('')

const FormValidationSchema=yup.object({
                         name:yup.string().required(),
                         image:yup.string().required(),
                         price:yup.string().required(),
                         specification:yup.string().required(),
                        
                         

})
const formik = useFormik({
                         initialValues:{
                         name:"",
                         image:"",
                         price:"",
                         specification:'' ,
                          
                         },
                         validationSchema:FormValidationSchema,
                         onSubmit:(values)=>{
             fetch('https://6291ca0c9d159855f0802547.mockapi.io/product',{
                     method: 'POST',
                     body:JSON.stringify(values),
                    headers: {'Content-Type': 'application/json'}
                     }).then(()=>history.push('/'))
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
export default AddProduct