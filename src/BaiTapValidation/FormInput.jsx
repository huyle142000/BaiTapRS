import React, { Component } from 'react'
import { connect } from 'react-redux'
class FormInput extends Component {
    state = {
        mess: {

        },
        idName: "",
        name: "",
        phoneNumber: "",
        email: "",
    }
    onChangeValue = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({ ...this.state, [name]: value })
    }



    checkValidate = (valuesObj) => {

        // lấy giá trị của các thuộc tính obj
        let { idName, name, phoneNumber, email } = valuesObj
        //Regex:
        let ruleUser = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;

        let ruleName = /[A-Z a-z]+$/;

        let ruleEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        let ruleNumber = /^[-+]?[0-9]+$/;
        let newMess = {};
        //checkID
        //lấy danh sách mảng để so sánh id đã tồn tại chưa
        let {listStudent} =this.props;
        console.log(listStudent)

        if (!idName) {
            newMess.errId = "Vui lòng nhập trường này";
        } else if (ruleUser.test(idName)) {
        } else {
            newMess.errId = "Vui lòng nhập kí tự chữ và số (không bao gồm khoảng trắng)";
        }
        //checkName
        if (!name) {
            newMess.errName = "Vui lòng nhập trường này";
        }
        else if (ruleName.test(name)) {
        } else {
            newMess.errName = "Vui lòng nhập họ và tên ";
        }
        //check Phone
        if (ruleNumber.test(phoneNumber)) {
        } else if (!phoneNumber) {
            newMess.errNumber = "Vui lòng nhập trường này";

        } else {
            newMess.errNumber = "Vui lòng nhập số";

        }
        // Check email
        if (ruleEmail.test(email)) {
        } else if (!email) {
            newMess.errEmail = "Vui lòng nhập trường này";
        } else {
            newMess.errEmail = "Vui lòng nhập đúng email";
        }
        this.setState({ ...this.state.mess, mess: newMess })
        if (Object.keys(newMess).length > 0) {
            return false
        }
        let data = { idName, name, phoneNumber, email }
        return data

    }
    addStudent = (e) => {
        e.preventDefault();
        let data = this.checkValidate(this.state)
        if (data) {
            this.props.handleAddStudent(data)
            // return this.setState({
            //     ...this.state,
            //     idName: "",
            //     name: "",
            //     phoneNumber: "",
            //     email: "",
            // })
        }

    }
    render() {
        let { errId, errName, errNumber, errEmail } = this.state.mess;

        return (
            <React.Fragment>
                <h1 className='bg-dark text-white p-2'>Thông tin sinh viên</h1>
                <form className="d-flex" onSubmit={(e) => { this.addStudent(e) }}>
                    <div className="form-group">
                        <label htmlFor="idInput">Mã</label>
                        <input
                            type="text"
                            className="form-control"
                            id="idInput"
                            name='idName'
                            value={this.state.idName}
                            onChange={
                                (e) => { this.onChangeValue(e) }
                            }
                        />
                        <span className="message">
                            {errId}
                        </span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Họ Tên</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name='name'
                            value={this.state.name}
                            onChange={
                                (e) => { this.onChangeValue(e) }
                            }
                        />
                        <span className="message">
                            {errName}
                        </span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Số điện thoại</label>
                        <input
                            type="number"
                            className="form-control"
                            id="phoneNumber"
                            name='phoneNumber'
                            value={this.state.phoneNumber}
                            onChange={
                                (e) => { this.onChangeValue(e) }
                            }
                        />
                        <span className="message">
                            {errNumber}
                        </span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailInput">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="emailInput"
                            name='email'
                            value={this.state.email}
                            onChange={
                                (e) => { this.onChangeValue(e) }
                            }
                        />
                        <span className="message">
                            {errEmail}
                        </span>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >Thêm Sinh Viên
                    </button>
                </form>

            </React.Fragment >

        )
    }
}
const mapStateToProps = (state) => {
    return {
        listStudent: state.ValiReducer.listStudent
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

        handleAddStudent(data) {
            const action = {
                type: "ADD_STUDENT",
                payload: data,
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormInput)