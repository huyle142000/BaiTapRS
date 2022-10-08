import React, { Component } from "react";
import ListItem from "./ListItem";
import { connect } from "react-redux";
import { backList, filterStudent } from "../redux/Action/ValidateAction";
class List extends Component {
  state = {
    valueFilter: "",
  };

  render() {
    return (
      <React.Fragment>
        <div className="bg-dark text-light py-1 container">
          <h3>Lọc kết quả (Điền vào ô trống ):</h3>
        </div>
        <div className="container d-flex align-items-center">
          <input
            disabled={this.props.isFilter}
            type="text"
            placeholder="Nhập Mã hoặc Tên học sinh"
            value={this.state.valueFilter}
            onChange={(e) => {
              let { value } = e.target;
              this.setState({
                valueFilter: value,
              });
            }}
            className="w-50 mr-3"
            style={{ height: "100%" }}
          />
          <button
            className="btn btn-info"
            disabled={this.props.isFilter}
            onClick={() => {
              this.setState({
                valueFilter: "",
              });
              this.props.dispatch(filterStudent(this.state.valueFilter));
            }}
          >
            Lọc kết quả
          </button>
        </div>
        <table className="table">
          <thead className="bg-dark text-white p-2">
            <tr>
              <th>Mã SV</th>
              <th>Họ và Tên SV</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th>Chỉnh sửa</th>
            </tr>
          </thead>
          <tbody>
            <ListItem />
          </tbody>
        </table>
        {this.props.isFilter ? (
          <button
            className="btn btn-info"
            onClick={() => {
              this.props.dispatch(backList());
            }}
          >
            Trở về
          </button>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    listStudent: state.ValiReducer.listStudent,
    isFilter: state.ValiReducer.isFilter,
  };
};
export default connect(mapStateToProps)(List);
