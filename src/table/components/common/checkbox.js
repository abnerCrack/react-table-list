
import React, { PureComponent } from 'react';
import './checkbox.scss'
export default class Checkbox extends PureComponent {
    static defaultProps(){
        checked : false
    }
    render() {
        const { checked ,handleCheck} = this.props;
        return <span onClick = { handleCheck } className="react-checkbox__wraper">
            <input type="checkbox" checked ={ checked }/>
            <span  className="react-checkbox__display"></span>
          </span>
    }
}