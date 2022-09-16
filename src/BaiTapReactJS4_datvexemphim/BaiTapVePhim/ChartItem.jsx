import React, { Component } from 'react'
import { connect } from "react-redux"

class ChartItem extends Component {
    render() {
        const arrChairs = this.props.data;
        const danhSachGhe = this.props.danhSachGhe;
        return (
            <React.Fragment>
                {arrChairs.map((item, i) => {
                    let { hang } = item
                    // console.log(item.danhSachGhe)
                    return (
                        <tr key={i}>
                            <td>
                                {hang}
                            </td>
                            {
                                (hang === "")
                                    ? (danhSachGhe[i].map((items, i) => {
                                        // console.log(items)
                                        return (
                                            <td key={i} >
                                                {items.soGhe}
                                            </td>
                                        )
                                    }))
                                    : (danhSachGhe[i].map((items, i) => {
                                        let viTri = i + 1
                                        return (
                                            <td
                                                key={i}
                                                className="position-relative"
                                            >
                                                <input
                                                    id={items.soGhe}
                                                    type="checkbox"
                                                    value={items.soGhe}
                                                    disabled={items.daDat}
                                                />
                                                <label
                                                    onClick={() => this.props.chonGhe(items.soGhe, items.gia)}
                                                    htmlFor={items.soGhe}
                                                    className='position-absolute chair'
                                                >
                                                    <div className={items.daDat === true ? "gheDuocChon" : "ghe"}>
                                                    </div>
                                                    <span
                                                        className='vitri'
                                                        style={
                                                            items.daDat === true ? { color: "black" } : { color: "white" }
                                                        }>{viTri}</span>
                                                </label>
                                            </td>
                                        )
                                    }))

                            }
                        </tr>
                    )

                })
                }
                <tr>
                    <td colSpan="20">
                        <button
                            className="btn btn-danger p-3 font-weight-bold"
                            onClick={() => { this.props.danhSachDaChon() }}
                        >Đặt Ghế
                        </button>
                    </td>
                </tr>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    // console.log(state.TicketReducer.danhSachGhe)
    return {
        danhSachGhe: state.TicketReducer.danhSachGhe,
        data: state.TicketReducer.data,
    }
}

const mapStateToDispatchProps = (dispatch) => {
    // console.log(state.TicketReducer.danhSachGhe)
    // ta cần có một mảng lưu các ghế đã chọn ghế chọn thì push vô còn ko thì splice truyền index vào
    let arrChecked = [];

    return {
        chonGhe(value, gia) {
            let inputCheck = document.getElementById(`${value}`).checked
            if (!inputCheck) {
                arrChecked.push({
                    value,
                    gia
                })
            } else {
                let index = arrChecked.findIndex((values) => values === value)
                arrChecked.splice(index, 1)
            }
        },
        danhSachDaChon() {
            const action = {
                type: "DAT_GHE",
                danhsach: arrChecked
            }
            dispatch(action)

        }

    }
}
export default connect(mapStateToProps, mapStateToDispatchProps)(ChartItem)