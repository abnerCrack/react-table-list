
import React, { PureComponent } from 'react';
import 'rc-pagination/assets/index.css';
import 'rc-select/assets/index.css';

import Pagination from 'rc-pagination';
import Select from 'rc-select';




const itemRender = (current, type, element) => {
    if (type === 'page') {
      return <a href={`#${current}`}>{current}</a>;
    }
    return element;
  };
  
  
export default class Checkbox extends PureComponent {
    render() {
        const { total, capacity, totalCurrent ,handleCapacityChange,handlePagingChange } = this.props;
        return <div className="pagination">
            <Pagination
            showSizeChanger
            showLessItems
            selectComponentClass={Select}
            showQuickJumper={{ goButton: <button>确定</button> }}
            defaultPageSize={capacity}
            defaultCurrent={totalCurrent}
            onShowSizeChange={handleCapacityChange}
            onChange={handlePagingChange}
            total={total}
            />
        </div>
    }
}