import React, { Component } from 'react'
import { connect } from 'react-redux'
class List extends Component {
    render() {
        let { listStudent } = this.props
        return (
            <table className="table">
                <thead className='bg-dark text-white p-2'>
                    <tr>
                        <th>Mã SV</th>
                        <th>Họ và Tên SV</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                {listStudent.map((student,i) =>{
                    return(
                        <tr key={i} >
                            <td>{student.idName}</td>
                            <td>{student.name}</td>
                            <td>{student.phoneNumber}</td>
                            <td>{student.email}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        listStudent: state.ValiReducer.listStudent
    }
}
export default connect(mapStateToProps, null)(List)
