import React, { Component } from 'react';
class Text extends Component {
  render() {
    const { value } = this.props;
    return (
        <div className="text">
           {value}
        </div>
    );
  }
}
export default Text;

