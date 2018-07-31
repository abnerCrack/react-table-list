import React, { PureComponent } from 'react';
import Text from './text'
import Checkbox from './checkbox'
import { firstUpperCase } from '../../util'
class Placeholder extends PureComponent {

    get Components (){
        const {components} = this.props;
        return {
            Text,
            Checkbox,
            // 后置spread 覆盖原有对象
            ...components,
        }
    }
    get RealComponent() {
        const { type,name } = this.props;
        // console.log(this.props)
        const ComponentKey = firstUpperCase(type)
        if( this.Components[ComponentKey] ) {
            return this.Components[ComponentKey]
        }
        console.warn(`${ComponentKey} 组件未定义,请传入对应组件,组件name为 ${name}`)
        return Text
    }
    render() {
        return <this.RealComponent {...this.props}/> 
    }
}
export default Placeholder;

