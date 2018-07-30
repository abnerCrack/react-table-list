import React, { Component } from 'react';
import Column from './column'
import { mergeAndSortChildren } from '../../util'
import Text from '../common/text'
class Checkbox extends Component {
    render() {
        return <input type="checkbox" name="" id="" />
    }
}
export default class Row extends Component {
    componentDidMount(){
        console.log('%c    Row Did Mount    ','background:#3498db;color:#fff');
    }
    getDefaultChildren() {
        return [
            <Column key = {0.2}>
                <Checkbox
                        {...this.props}
                        key="checkbox"
                        order={0}
                    />
            </Column>
        ];
    }
    getExternalsChildren() {
        const { row } = this.props;
        // 解析默认数据类型
        // todo 增加 子节点特殊字段类型解析
        return row.map((column, index) => <Column column= {column} order = {index}  key = {`column-${index}`}>
            <Text {...column}/>
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

