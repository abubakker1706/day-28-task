import './ProductItem.css'
const ProductItem=(props)=>{
                         return (
                         <div className="product-container">
                         <ul>
                         <li>
                         <div >
                         <img src={props.image} alt={props.name}  className='product-poster' />
                         
                         
                         
                         </div>
                         <div className="product">
                         <h3>{props.name}</h3>
                         <h3>{props.price}</h3>
                         
                         </div>
                        
                         <div className="product-specs">
                         <p>{props.specification}</p>
                         
                         </div>
                         <div>
                         {props.delete} {props.productInfo} {props.editProduct}
                         
                         </div>
                         
                         
                         
                         
                         </li>
                         
                         
                         
                         </ul>
                         
                         
                         
                         
                         
                         </div>
                         )
}
export default ProductItem