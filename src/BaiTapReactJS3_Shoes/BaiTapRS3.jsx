import React, { Component } from 'react'
import ProductList from './ProductList'
import dataShoe from '../DataShoe.json'
import Modal from './Modal'
export default class BaiTapRS3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoe: dataShoe[0],
    }
  }
  handleDetail = (sp) => {
    this.setState({ shoe: sp });
  }
  render() {
    return (
      <div className='container-fluid'>
        <div className="row">
          <div className="col-3 d-flex align-items-center" style={{ borderRight: "1px solid #52a8e8" }}>
            <nav className="nav"
              style={
                {
                  height: "100vh",
                  position: "fixed",
                  top: "30%",
                  width: "20%",
                }
              }>
              <div style={{ width: "100%" }}>
                <a className="nav-link active"
                  href="/#"
                  style={
                    {
                      width: "100%",
                      border: "1px solid",
                      borderRadius: "5px",
                    }
                  }
                >Home
                </a>
                <a className="nav-link" href="/#">Shop</a>
              </div>
            </nav>

          </div>
          <ProductList listShoe={dataShoe} handleDetail={this.handleDetail} />
        </div >
        <Modal shoe={this.state.shoe} />
      </div >
    )
  }
}
