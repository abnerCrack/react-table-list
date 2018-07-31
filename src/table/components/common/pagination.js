
import React, { PureComponent } from 'react';
import './rc-pagination.scss';
import './rc-select.scss';

import Pagination from 'rc-pagination/lib';
import Select from 'rc-select';




const itemRender = (current, type, element) => {
    if (type === 'page') {
      return <a href={`#${current}`}>{current}</a>;
    }
    return element;
  };
  
  
export default class Checkbox extends PureComponent {
    render() {
        const { total, capacity, defaultCurrent ,handleCapacityChange,handlePagingChange } = this.props;
        return <div className="pagination">
            <Pagination
            showSizeChanger
            showLessItems
            selectComponentClass={Select}
            // showQuickJumper={{ goButton: <button>确定</button> }}
            defaultPageSize={capacity}
            defaultCurrent={defaultCurrent}
            onShowSizeChange={handleCapacityChange}
            onChange={handlePagingChange}
            total={total}
            />
        </div>
    }
}