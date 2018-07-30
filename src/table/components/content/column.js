import React, { Component } from 'react';
class Column extends Component {

  componentDidMount(){
    console.log('%c    Column Did Mount    ','background:#34495e;color:#fff');
  }
  
  render() {
    const { column } = this.props;
    return (
      <li className="column">
        <div className="content">
           {this.props.children}
        </div>
      </li>
    );
  }
}
export default Column;

