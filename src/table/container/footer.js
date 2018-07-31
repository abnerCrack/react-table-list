// 统计组件 分页器组件
import Pagination from '../components/common/pagination'
import React, { PureComponent } from 'react';
import './footer.scss'
export default class Footer extends PureComponent {
    render() {
        const { total } =this.props;
        return (
            <div className="table-footer">
                <span className="total">
                {`共${total}条`}
                </span>
                <Pagination {...this.props}/>
            </div>
        );
    }
}