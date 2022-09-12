import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    let { item, showDetails } = this.props;
    return (
      <div className="col-4">
        <div className="card">
          <img src={item.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.name} </h5>
            <p className="card-text">{item.price}$ </p>
            <button type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
              onClick={() => { showDetails(item) }}>
              Get details
            </button>
          </div>
        </div>

      </div>
    )
  }
}
