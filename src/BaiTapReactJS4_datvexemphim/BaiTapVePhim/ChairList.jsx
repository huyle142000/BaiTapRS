import React, { Component } from 'react'
import ChartItem from './ChartItem'
export class ChairList extends Component {


    render() {

        return (
            <div className='text-center'>
                <h1>Đặt Vé Xem Phim</h1>
                <table style={{ width: '100%' }}>
                    <tbody className='tbody'>
                        <ChartItem />
                    </tbody>
                </table>
            </div>
        )
    }
}
