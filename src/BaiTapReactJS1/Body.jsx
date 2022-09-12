import React, { Component } from 'react'
import Banner from './Banner';
import ProductList from './ProductList';
export default class Body extends Component {
  render() {
    return (
      <div className="container px-lg-5">
        <Banner />
        <div className="container px-lg-5">
          <div className="row gx-lg-5">
            <ProductList />
          </div>
        </div>

      </div>
    )
  }
}
