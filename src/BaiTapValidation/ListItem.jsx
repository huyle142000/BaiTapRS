import React, { Component } from 'react'
import { connect } from 'react-redux'

class ListItem extends Component {
  componentDidMount() {

  }
  render() {
    let { listStudent } = this.props
    return (
      <React.Fragment>
        {
          listStudent.map((student, i) => {
            return (
              <tr key={i} >
                <td>{student.idName}</td>
                <td>{student.name}</td>
                <td>{student.phoneNumber}</td>
                <td>{student.email}</td>
                <td>
                  <button className='btn btn-success'>Cập nhật</button>
                  <button className='btn btn-danger'>Xóa</button>
                </td>
              </tr>
            )
          })
        }
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    listStudent: state.ValiReducer.listStudent
  }
}

export default connect(mapStateToProps, null)(ListItem)