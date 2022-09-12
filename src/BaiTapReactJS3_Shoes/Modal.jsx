import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        let {shoe} = this.props;
        return (
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">

            <div className="modal-dialog" style={{width:"400px"}}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{shoe.name}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className='text-center'>
                            
                        <img src={shoe.image} className="img-fluid" style={{width:"200px"}} alt="" />
                        </div>
                        <p>{shoe.description}</p>
                        <p className="text-danger">{shoe.quantity}$</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div >
        )
    }
}
