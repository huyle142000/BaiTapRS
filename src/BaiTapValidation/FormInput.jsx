import React, { Component } from "react";
import { connect } from "react-redux";
import { addStudent, updateStudent } from "../redux/Action/ValidateAction";
class FormInput extends Component {
  state = {
    mess: { idName: "", name: "", phoneNumber: "", email: "" },
    valueInput: { idName: "", name: "", phoneNumber: "", email: "" },
    valid: true,
  };
  onChangeValue = (e) => {
    const { name, value } = e.target;
    //Regex:
    let ruleName = /[A-Z a-z]+$/;

    let ruleEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let ruleNumber = /^[-+]?[0-9]+$/;
    //Create empty err message
    let err = "";

    //lấy danh sách mảng để so sánh id đã tồn tại chưa
    if (name === "idName") {
      let index = this.props.list.listStudent.findIndex((student) => {
        return student.idName === value;
      });
      if (index !== -1) {
        err = name + "đã tồn tại vui lòng nhập mã khác";
      }
    }

    //Check Name :
    if (name === "name") {
      if (!ruleName.test(value)) {
        err = "Vui lòng nhập họ và tên (không nhập số) ";
      }
    }
    //check Phone
    if (name === "phone") {
      if (!ruleNumber.test(value)) {
        err = "Vui lòng nhập số";
      }
    }
    // Check email
    if (name === "email") {
      if (!ruleEmail.test(value)) {
        err = "Vui lòng nhập đúng email";
      }
    }
    if (value.trim() === "") {
      err = "Vui lòng nhập trường này";
    }

    //Copy state curren to assign new value và new err
    let newValue = { ...this.state.valueInput, [name]: value };
    let newErr = { ...this.state.mess, [name]: err };
    //set new state
    let validNew = { ...this.state.valid };
    for (let key in newErr) {
      if (newErr[key] !== "" || newValue[key] === "") {
        validNew = true;
        break;
      } else {
        validNew = false;
      }
    }

    this.setState({ valid: validNew, valueInput: newValue, mess: newErr });
  };

  addStudent = (e) => {
    e.preventDefault();
    this.props.dispatch(addStudent(this.state.valueInput));
    this.setState({
      mess: { idName: "", name: "", phoneNumber: "", email: "" },
      valueInput: { idName: "", name: "", phoneNumber: "", email: "" },
      valid: true,
    });
  };

  render() {
    console.log(this.props.list.isFilter);
    return (
      <React.Fragment>
        <h1 className="bg-dark text-white p-2">Thông tin sinh viên</h1>
        <form
          className="d-flex"
          onSubmit={(e) => {
            this.addStudent(e);
          }}
        >
          <div className="form-group">
            <label htmlFor="idInput">Mã</label>
            <input
              type="text"
              className="form-control"
              id="idInput"
              name="idName"
              disabled={
                this.props.list.isUpdate && this.props.list.isFilter
                  ? true
                  : false
              }
              value={this.state.valueInput.idName}
              onChange={(e) => {
                this.onChangeValue(e);
              }}
            />
            <span className="message">{this.state.mess.idName}</span>
          </div>
          <div className="form-group">
            <label htmlFor="name">Họ Tên</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={this.state.valueInput.name}
              onChange={(e) => {
                this.onChangeValue(e);
              }}
            />
            <span className="message">{this.state.mess.name}</span>
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Số điện thoại</label>
            <input
              type="number"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              value={this.state.valueInput.phoneNumber}
              onChange={(e) => {
                this.onChangeValue(e);
              }}
            />
            <span className="message">{this.state.mess.phoneNumber}</span>
          </div>
          <div className="form-group">
            <label htmlFor="emailInput">Email address</label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              name="email"
              value={this.state.valueInput.email}
              onChange={(e) => {
                this.onChangeValue(e);
              }}
            />
            <span className="message">{this.state.mess.email}</span>
          </div>
          {this.props.list.isUpdate === false && (
            <button
              type="submit"
              className="btn btn-primary"
              disabled={this.state.valid}
            >
              Thêm Sinh Viên
            </button>
          )}
          {this.props.list.isUpdate === true && (
            <button
              type="button"
              className="btn btn-primary"
              disabled={this.state.valid}
              onClick={() => {
                this.setState({
                  ...this.state,
                  valueInput: {
                    idName: "",
                    name: "",
                    phoneNumber: "",
                    email: "",
                  },
                });
                this.props.dispatch(updateStudent(this.state.valueInput));
              }}
            >
              Cật Nhật
            </button>
          )}
        </form>
      </React.Fragment>
    );
  }

  componentDidUpdate(prevProps, preState) {
    if (
      prevProps.list.checkStudent.idName !== this.props.list.checkStudent.idName
    ) {
      this.setState({
        ...this.state,
        valueInput: this.props.list.checkStudent,
      });
    }
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.ValiReducer,
  };
};

export default connect(mapStateToProps)(FormInput);
