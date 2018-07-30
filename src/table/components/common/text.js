import React, { PureComponent } from 'react';
class Text extends PureComponent {
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

