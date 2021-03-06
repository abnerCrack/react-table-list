import React, { PureComponent } from 'react';
import Column from './column'
import { mergeAndSortChildren } from '../../util'
import Text from '../common/text'
import Checkbox from '../common/checkbox'
import Placeholder from '../common/placeholder'
import { Object } from 'core-js';
import { firstUpperCase } from '../../util'
export default class Row extends PureComponent {
    componentDidMount() {
        console.log('%c    Row Did Mount    ','background:#3498db;color:#fff');
    }
    getDefaultChildren() {
        // const {components} = this.props
        return [
            // ...components
            //     <Checkbox
            //             {...this.props}
            //             key="checkbox"
            //             order={0}
            //         />
        ];
    }
    // componentsHashMapping(_components) {
    //     // Text,
    //     const components = Object.create(null);
    //     _components.map(component => {
    //         const Type = firstUpperCase(component.props.type)
    //         if(!Type) {
    //             console.warn(`${component.type.name} 扩展组件type未定义,默认渲染为Text `)
    //             return 
    //         }
    //         components[Type] = component
    //     })
    //     return components
    // }
    getExternalsChildren() {
        const { row, components } = this.props;
        // const newComponents = this.componentsHashMapping(components)
        // 解析默认数据类型
        // todo 增加 子节点特殊字段类型解析
        return row.map((column, index) => <Column prefix={column.type} column={column} order={index} key={`column-${index}`}>
            {<Placeholder {...this.props} components={components} name = {column.key} order={index} {...column} />}
        </Column>)
    }
    getChildren() {
        const children = React.Children.toArray(this.props.children);
        const defaultChildren = this.props.disableDefaultControls ? [] : this.getDefaultChildren();
        const externalsChildren = this.props.disableExternalsControls ? [] : this.getExternalsChildren()
        return mergeAndSortChildren(defaultChildren, children, externalsChildren, this.props);
    }
    render() {
        const children = this.getChildren()
        return (
            <li className="row">
                <ul className="column-container">
                    {children}
                </ul>
            </li>
        );
    }
}

