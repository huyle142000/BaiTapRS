import React, { Component } from 'react';
import Bill from './Bill';
import "../BaiTapBookingTicket.css";
import { ChairList } from './ChairList';
// 1:ta có input và value thì khi ta check cần cho 1 vòng lặp chạy qua tất cả các input xem số check đã bằng số ghế muốn chọn chưa nếu chưa thì tháo disable ngược lại gắn disable sau mỗi lần check nên state là danhSachGhe.dadat ban đầu sẽ bg là grey khi click
// chạy vòng lặp map để in ra các input chứa các giá trị
//initial : mảng đầu tiên


export default class BaiTapVePhim extends Component {
  render() {
    return (
      <div className='bg-avenger'>
        <div className="wrapper container-fluid">
          <div className="row">
            <div className="col-7">
              <ChairList />
            </div>
            <div className="col-5">
              <Bill />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
