
import React, { PureComponent } from 'react';
import cn from 'classnames'
function noop() { }
export default class Button extends PureComponent {
    static defaultProps = {
        buttonStyle : 'default',
        size: 'default',
        readonly: false,
        href: '',
        tipsInfo: 'Tips用禁用理由',
        title: '测试11',
        visible: false,
        style : {
        },
        onclick: noop
    }
    render() {
        const { style } = this.props;
        return <button style = {style}></button>
    }
}