import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import { setProducts } from '../redux/actions/productActions'
import axios from 'axios'

const ProductListing = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      console.log('API Response: ', response.data);
      dispatch(setProducts(response.data));
    } catch (err) {
      console.error('Error: ', err);
    } 
  };

  useEffect(() => {
    fetchProducts();
  }, [dispatch])

  return (
    <div className='ui grid'>
      <ProductComponent/>   
    </div>
  )
}

export default ProductListing