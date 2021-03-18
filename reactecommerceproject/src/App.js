import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart, Checkout, HomePage, Footer, QuoteForm, Gallery, FacebookFeed, Location} from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductParser from './lib/ProductParser';
import ImageParser from './lib/ImageParser';

const App = () => {
  const [products, setProducts] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [cart, setCart] = useState({});
  const [shirts, setShirts] = useState([]);
  const [vehicle, setVehicle] = useState([]);
  const [carDecals, setCarDecals] = useState([]);
  const [windowLettering, setWindowLettering] = useState([]);
  const [outdoorSigns, setOutdoorSigns] = useState([]);
   // make call to commerce.js api to retrieve the items in the cart currently
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const fetchProducts = async () => {
    // make call to the e commerce api to list our stored products, returns a promise.
    const { data } = await commerce.products.list();
   
    //Sends product array of parsed out active products
    setProducts(ProductParser(data));

    //Sends the array of products to the corresponding hooks to be used in the gallery page
    setShirts(ImageParser(data).tShirtsArray);
    setVehicle(ImageParser(data).vehicleWrapsArray);
    setCarDecals(ImageParser(data).cardDecalsArray);
    setWindowLettering(ImageParser(data).windowSignsArray);
    setOutdoorSigns(ImageParser(data).outDoorSignsArray);

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

  
  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_unique_items} />
        <Switch>
          {/* Home Route */}
          <Route exact path="/">
          <HomePage cart={cart} />
          </Route>
          {/* Shop Route */}
          <Route exact path="/shop">
            <Products products={products} onAddToCart={handleAddToCart} cart={cart} />
          </Route>
          {/* Cart Route */}
          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleUpdateCartQuantity={handleUpdateCartQuantity}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>
          {/* Checkout Route */}
          <Route exact path="/checkout">
            <Checkout cart={cart}/>
          </Route>
          {/* Quote Form Route*/}
          <Route exact path="/quote">
            <QuoteForm cart={cart}/>
          </Route>
          {/* Gallery route */}
          <Route exact path="/gallery">
            <Gallery
              shirts={shirts}
              vehicle={vehicle}
              carDecals={carDecals}
              windowLettering={windowLettering}
              outdoorSigns={outdoorSigns} />
          </Route>
          <Route exact path="/Facebook">
            <FacebookFeed />
          </Route>
          <Route exact path="/Location">
            <Location />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
