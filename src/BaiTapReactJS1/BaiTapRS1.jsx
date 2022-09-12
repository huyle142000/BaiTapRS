import React, { Component } from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import "../styles.css"

export default class BaiTapRS1 extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Body />
                <Footer />
                </React.Fragment>
        )
    }
}
