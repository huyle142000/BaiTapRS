import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return (
      <div className="col-lg-3 col-xxl-3 mb-6">
        <div className="card bg-light border-0 h-100">
          <div className="card-body text-center p-0">
            <div className="text-white mb-4">
              <img src="https://tiowatch.vn/wp-content/themes/Zephyr/img/placeholder/500x500.gif" className="img-fluid" alt="" />
            </div>
            <h2 className="fs-4">Card title</h2>
            <p className="mb-4 fs-8 p-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad possimus ducimus voluptas sit alias laboriosam.
            </p>
          </div>
          <div className="text-center p-2" style={{ backgroundColor: 'rgb(232 231 231 / 50%)' }}>
            <button className="btn btn-primary">Find Out More!</button>
          </div>
        </div>
      </div>

    )
  }
}
