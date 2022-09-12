import React, { Component } from 'react'
import "../Baitap2.css"
import AvatarModel from './AvatarModel';

export default class BaiTapRJ2 extends Component {
    render() {
        return (
            <div className='glass-app text-center'>
                <div className="overlay">
                </div>
                <div className="glass_content">
                    <div className='glass_title'>
                        <h1 className='p-3'>TRY GLASSES APP ONLINE</h1>
                    </div>
                    <AvatarModel/>
                </div>

            </div>
        )
    }
}
