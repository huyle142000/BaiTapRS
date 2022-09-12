import React, { Component } from 'react';
import dataGlasses from "../dataGlasses.json"

export default class AvatarModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: dataGlasses,
            dataGlasses: dataGlasses[0],
        }
    }
    changeGlasses(id) {
        let glassId;
        this.state.dataList.map((glass) => {
            if (glass.id === id) glassId = glass;

            return this.setState({
                dataGlasses: glassId,
            })
        })

    }

    render() {
        return (
            <div className="wrap_testGlass">
                <div className="glass_avatar d-flex justify-content-around align-items-center">
                    <div className="card" style={{ width: '14rem' }}>
                        <div>
                            <img src="./img/model.jpg" alt='' className="card-img-top" />
                            <img src={this.state.dataGlasses.url} alt="" className='glass_wearing' />
                        </div>
                        <div className="card-body position-absolute bottom-0">
                            <h5 className="card-title"> {this.state.dataGlasses.name}</h5>
                            <p className="card-text">{this.state.dataGlasses.desc}</p>
                            <p className='m-0'>Price: {this.state.dataGlasses.price}$</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: '14rem' }}>
                        <img src="./img/model.jpg" alt='' className="card-img-top" />
                    </div>
                </div>
                <div className="change_glass">
                    {this.state.dataList.map((data, index) => (
                        <img
                            key={index}
                            src={data.url1}
                            alt=''
                            onClick={() => { this.changeGlasses(data.id) }}
                            style={
                                data === this.state.dataGlasses ? ({ border: '1px solid black' }) : ({ border: 'none' })
                            }
                        />
                    ))}
                </div>
            </div>

        )
    }
}
