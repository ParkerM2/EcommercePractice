import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart, Checkout, HomePage } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({})

   // make call to commerce.js api to retrieve the items in the cart currently
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const fetchProducts = async () => {
    // make call to the e commerce api to list our stored products, returns a promise.
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  const handleAddToCart = async (productId, quantity) => {
    const {cart} = await commerce.cart.add(productId, quantity);

    setCart(cart);
  }

  const handleUpdateCartQuantity = async (productId, quantity) => {
    const {cart} = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  }

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  }

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  }

  useEffect(() => {
    //load our products on start, and set products from commerce.js
    fetchProducts();
    //load our cart objects from commerce.js
    fetchCart();
    
  }, [])
  console.log(cart)
  
  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_unique_items} />
        <Switch>
          <Route exact path="/">
          <HomePage cart={cart} />
          </Route>
          
          <Route exact path="/shop">
            <Products products={products} onAddToCart={handleAddToCart} cart={cart} />
          </Route>
            
          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleUpdateCartQuantity={handleUpdateCartQuantity}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>

          <Route exact path="/checkout">
            <Checkout cart={cart}/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
