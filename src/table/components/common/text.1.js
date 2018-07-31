import React, { PureComponent } from 'react';
class Text extends PureComponent {
  render() {
    const { value } = this.props;
    return (
        <div style = {{background:'#f90'}} onClick = {this.props.handleTextClick} className="text">
           {value}
        </div>
    );
  }
}
export default Text;

