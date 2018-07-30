import React, { PureComponent } from 'react';
import {  Table, RowWraper,Column, Row } from './table'
import TableContainer from './table/container'
import {table} from './data'
import RowContainer from './table/components/content/row-container'

import Dates from './table/components/common/date'
import CardInfo from './table/components/common/cardInfo'
import Text from './table/components/common/text'
import './index.scss'
import Checkbox from './table/components/common/checkbox'
// console.log()
class App extends PureComponent {
  handleRowClick= ()=>{
    
  }
  handleRowMouseEnter= ()=>{
    
  }  
  handleSelectAll= ()=>{
    
  }
  handleSelectSingle = ()=>{

  }
  render() {

    return (
      <Table
        //  头部扩展组件
        headerComponents= {[<Checkbox key = 'data' />]} 
        // 行扩展组件
        // rowComponents= {[<CardInfo/>]} 
        // 列扩展组件
        columnComponents= {[<Checkbox  key = 'data'/>]} 
        // Todo
        // column 是否支持排序
        // 支持相应 type 的字段 否则默认走text 
        // handleSelectAll
        // handleChecked
        // 翻页
        // 300条
        // 长串  /  滚动条
        // 可排序
        // 搜索高亮 组价内部是否启用高亮
        // disableDefultRow = {true}
        // disableDefultColumn = {true}
         {...table}
        >
      </Table>
    );
  }
}
export default App;


