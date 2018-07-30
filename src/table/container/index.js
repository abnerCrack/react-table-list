import React, { Component } from 'react';
import Content from './content'
import Header from './header'
import Footer from './footer'

export default class Table extends Component {
    render() {
        return (
            <div className = 'react-table'>
                {
                    /* <Header {...this.props}/>
                <Content {...this.props}/>
                <Footer {...this.props}/> */
                }
            </div>
        );
    }
}
export { Header,Content,Footer }