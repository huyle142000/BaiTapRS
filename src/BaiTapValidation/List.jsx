import React, { Component } from 'react'
import ListItem from './ListItem'
export default class List extends Component {
    render() {
        return (
            <table className="table">
                <thead className='bg-dark text-white p-2'>
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

        )
    }
}

