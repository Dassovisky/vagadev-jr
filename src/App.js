import React from 'react';
import Footer from './components/footer/footer'
import Product from './components/product/product'
import Banner from './components/banner/banner'
import Header from './components/header/header'
import ProductBuy from './components/product/product-buy';

function App() {
  return (
    <>
      <ProductBuy />
      <Header />
      <Banner />
      <Product />  
      <Footer />

    </>
  );
}

export default App;
