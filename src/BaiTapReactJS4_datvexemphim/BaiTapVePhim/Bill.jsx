import React, { Component } from 'react'
import { connect } from "react-redux"
class Bill extends Component {
    renderBill() {
        let bill = this.props.danhSachGheDaDat;
        return (
            bill.map((item, i) => {
                return (
                    <tr key={i} className="billBody">
                        <td>{item.value}</td>
                        <td>{item.gia.toLocaleString()} VNĐ</td>
                        <td>
                            <button className="btn text-danger font-weight-bold" >X</button>
                        </td>
                    </ tr>

                )
            })
        )
    }
    render() {
        let bill = this.props.danhSachGheDaDat;
        return (
            <div style={{ marginTop: "40px" }}>
                <h2>DANH SÁCH GHẾ BẠN CHỌN</h2>
                <p><span className='bgChair1 bgChair'></span> Ghế đã đặt</p>
                <p><span className='bgChair2 bgChair'></span>Ghế đang chọn</p>
                <p><span className='bgChair3 bgChair'></span>Ghế chưa đặt</p>
                <table className="tadivble">

                    <thead className='tableBill'>
                        <tr>
                            <td>Số ghế</td>
                            <td>Giá</td>
                            <td>Hủy</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderBill()}
                    </tbody>
                    {
                        bill.length === 0
                            ? ""
                            : (
                                <tfoot>
                                    <tr>
                                        <td style={{ fontSize: "20px" }}>
                                            Thành tiền :
                                        </td>
                                        <td style={{ fontSize: "18px", color: "green" }} colSpan="2">
                                            {this.props.danhSachGheDaDat.reduce((init, ghe, i) => {
                                                return init += Number(ghe.gia)
                                            }, 0).toLocaleString()} VNĐ
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button
                                                className="btn btn-success font-weight-bold p-3"
                                                onClick={() => this.props.handlePrintBill()}
                                            >
                                                In Hóa Đơn
                                            </button>
                                        </td>
                                    </tr>
                                </tfoot>
                            )
                    }

                </table>


            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        danhSachGheDaDat: state.TicketReducer.danhSachGheDaDat,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handlePrintBill(bill) {
            const action = {
                type: "IN_HOA_DON",
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Bill)