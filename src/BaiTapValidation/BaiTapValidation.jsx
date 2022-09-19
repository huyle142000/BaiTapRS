import React, { Component } from 'react'
import FormInput from './FormInput'
import List from './List'
import "./Valicss/Validate.css"
export default class BaiTapValidation extends Component {
    render() {
        return (
            <div className="container">
                <FormInput />
                <List />
            </div>
        )
    }
}
