

import React, { PureComponent } from 'react';
import { mergeAndSortChildren } from '../../util'
import Row from '../../components/content/row'
function noop() { }
class RowContainer extends PureComponent {
    constructor(props){
        super(props)
        this._ref = React.createRef();
    }
    static defaultProps = {
        handleMouseEnter: noop,
        handleMouseLeave: noop,
        handleClick: noop,
    }
    componentDidMount() {
        // console.log('%c    RowContainer Did Mount    ', 'background:#2ecc71;color:#fff');
    }
    getDefaultChildren() {
        return [
            <Row
                {...this.props}
                key="default-row"
                order={0}
            />
        ];
    }
    getChildren() {
        // const { rowComponents =[] } = this.props;
        // const children = React.Children.toArray(this.props.children);
        const children = []
        // 是否屏蔽默认 row组件
        const defaultChildren = this.props.disableDefultRow ? [] : this.getDefaultChildren();
        // 扩展类组件 传入方式待定
        const externalsChildren = []
        return mergeAndSortChildren(defaultChildren, children, externalsChildren, this.props);
    }
    render() {
        const children = this.getChildren()
        // console.log(this.props)
        return (
            <ul className="row-container"
                ref = {this._ref}
                onMouseEnter={this.props.handleMouseEnter}
                onMouseLeave={this.props.handleMouseLeave}
                onClick={this.props.handleClick}>
                {children}
            </ul>

        );
    }
}
export default RowContainer;
