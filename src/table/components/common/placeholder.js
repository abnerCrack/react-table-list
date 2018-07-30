import React, { Component } from 'react';
import Text from './text'
import Checkbox from './checkbox'
class Placeholder extends Component {
    firstUpperCase(str){
        return str.replace(/^\S/,function(s){return s.toUpperCase();})
    }
    get Components (){
        return {
            Text,
            Checkbox
        }
    }
    get RealComponent() {
        const { type } =this.props;
        const ComponentKey = this.firstUpperCase(type)
        if( !ComponentKey ) return <Text {...this.props}/>
        return this.Components[ComponentKey]
    }
    render() {
        return <this.RealComponent {...this.props}/>
    }
}
export default Placeholder;

