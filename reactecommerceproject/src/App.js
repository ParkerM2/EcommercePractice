import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar } from './components';


const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    // make call to the e commerce api to list our stored products, returns a promise.
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  useEffect(() => {
    //load our products on start, and set products.
    fetchProducts();
  }, [])

  

  return ( 
    <div>
        <Navbar />
        <Products products={products}/>
    </div>
  )
}

export default App
