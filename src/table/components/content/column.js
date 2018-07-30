import React, { Component } from 'react';
class Column extends Component {

  componentDidMount(){
    console.log('%c    Column Did Mount    ','background:#34495e;color:#fff');
  }
  
  render() {
    const { column,prefix } = this.props;
    return (
      <li className={`${prefix}-column column`}>
        <div className="content">
           {this.props.children}
        </div>
      </li>
    );
  }
}
export default Column;

