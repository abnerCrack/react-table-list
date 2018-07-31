
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
    onShowSizeChange = (current, pageSize) => {
        console.log(current);
        console.log(pageSize);
      }
    
      onChange = (current, pageSize) => {
        console.log('onChange:current=', current);
        console.log('onChange:pageSize=', pageSize);
      }
    
    
    render() {
        return <div className="pagination">
            <Pagination
            showSizeChanger
            showLessItems
            selectComponentClass={Select}
            showQuickJumper={{ goButton: <button>确定</button> }}
            defaultPageSize={20}
            defaultCurrent={5}
            onShowSizeChange={this.onShowSizeChange}
            onChange={this.onChange}
            total={450}
            />
        </div>
    }
}