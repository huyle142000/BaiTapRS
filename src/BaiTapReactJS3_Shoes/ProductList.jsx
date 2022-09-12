import React, { Component } from 'react'
import Product from './Product'
export default class ProductList extends Component {

    render() {
        let { listShoe, handleDetail } = this.props;
        //render detail
        return (
            <div className="col-9">
                <div className="container p-5">
                    <div className="row">
                        {listShoe.map((item, index) => {
                            return <Product item={item} key={index} showDetails={handleDetail} />
                        })}
                    </div>

                </div>
            </div>
        )
    }
}
