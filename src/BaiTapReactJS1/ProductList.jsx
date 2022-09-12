import React, { Component } from 'react'
import Product from './Product'

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <Product />
                <Product />
                <Product />
                <Product />
            </React.Fragment>
        )
    }
}
