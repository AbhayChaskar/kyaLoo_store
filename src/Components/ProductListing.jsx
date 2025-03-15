import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import axios from 'axios'

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products)
  // console.log(products)

  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log('Error: ', err)
      })
      console.log(response.data)
  };

  useEffect(() => {
    fetchProducts();
  }, [])
  
  return (
    <div className='ui grid'>
      <ProductComponent/>   
    </div>
  )
}

export default ProductListing