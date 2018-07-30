import React, { PureComponent } from 'react';
import Text from './text'
import Checkbox from './checkbox'
class Placeholder extends PureComponent {
    firstUpperCase(str){
        return str.replace(/^\S/,function(s){return s.toUpperCase();})
    }
    get Components (){
        const {components} = this.props;
        return {
            // ...components,
            Text,
            Checkbox
        }
    }
    get RealComponent() {
        const { type } =this.props;
        const ComponentKey = this.firstUpperCase(type)
        if( this.Components[ComponentKey] ) { 
            return this.Components[ComponentKey]
        }
        // 遍历 一次 性能问题
        console.warn(`${type} 组件未定义,请传入对应组件 `)
        return Text
    }
    render() {
        return <this.RealComponent {...this.props}/>
    }
}
export default Placeholder;

