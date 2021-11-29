import React, { Component } from 'react';

class Ad extends Component {
    // componentDidMount() {
    //     // try {
    //     //     (adsbygoogle = window.adsbygoogle || []).push({});
    //     // } catch (error) {
    //     //     console.log('ads load failed')
    //     // }
    // }
    render() {
        return (
            <ins {...this.props}>
            </ins>
        );
    }
}

export default Ad;
