import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar } from './components';


const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    // make call to the e commerce api to list our stored products, returns a promise.
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  useEffect(() => {
    //load our products on start, and set products.
    fetchProducts();
    //load our cart objects
    fetchCart();
  }, [])

  console.log(cart, "cart")

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  return ( 
    <div>
        <Navbar />
        <Products products={products}/>
    </div>
  )
}

export default App
