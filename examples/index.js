
import React, { PureComponent } from 'react';
import { Table, RowWraper, Column, Row } from '../src/table'
import TableContainer from '../src/table/container'
import { table } from '../src/data'
import RowContainer from '../src/table/components/content/row-container'

import Dates from '../src/table/components/common/date'
import CardInfo from '../src/table/components/common/cardInfo'
import '../src/index.scss'
import Checkbox from '../src/table/components/common/checkbox'
// import Texts from '../src/table/components/common/text.1'
// console.log()
import Box from '../src/table/components/common/checkbox'
class App extends PureComponent {
  handleRowClick = () => {
  }
  handleRowMouseEnter = () => {

  }
  handleSelectAll = () => {

  }
  handleSelectSingle = () => {

  }

  render() {

    return (
      <div className="app-container">
        <div className="talent-header"></div>
        <div className="talent-tab"></div>
        <div className="talent-table-list">
          <Table
            /*
              1.数据源中有组件未传入 控制台会提示并且自动转换为Text组件
              2.增加type  源数据修改type 类型 组件需要传入对应名称组件类
              3.扩展组件可以拿到一切props传递进去的数据/方法
            */

            //  == 头部扩展组件 ==  (传入组件类,名称对应源数据type)
            // headerComponents= {{Text,Checkbox}} 

            // == 行扩展组件 == (传入组件类,名称对应源数据type)
            // rowComponents= {{Text,Checkbox}} 
            // rowComponents= {{Text}} 


            // == 列扩展组件 == (传入组件类,名称对应源数据type)
            // columnComponents= {{Text}} 

            // == 自定义事件 (自己定义自己组件内部接收))==
            // handleTextClick = {this.handleRowClick}


            // Todo
            // 表格总数
            total={table.tables.length}
            capacity={15}
            // defaultCurrent = {1}

            // viewport  true false 是否在可视区范围   长串  /  滚动条

            // column 是否支持排序
            // 增加 ref 回传  获取 index
            // 翻页
            // 300条



            // 搜索高亮 组价内部是否启用高亮

            // 内部排序方式 (index,condition)
            // 内部高亮函数 (keyword,color)

            // disableDefultRow = {true}
            // disableDefultColumn = {true}
            // react-deom renderComponent
            // 渲染回调
            {...table}
          >
          </Table>
        </div>
      </div>



    );
  }
}
export default App;
