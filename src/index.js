import React, { Component } from 'react';
import {  Table, RowWraper,Column, Row } from './table'
import TableContainer from './table/container'
import { tables } from './data'
import Dates from './table/components/common/date'
import CardInfo from './table/components/common/cardInfo'
import Text from './table/components/common/text'
import './index.scss'
// console.log()
class App extends Component {
  handleRowClick= ()=>{
    
  }
  handleRowMouseEnter= ()=>{
    
  }  
  handleSelectAll= ()=>{
    
  }
  render() {

    return (
      <Table
        // column 是否支持排序
        // 支持相应 type 的字段 否则默认走text 
        components = {[]} 
        // handleSelectAll
        // handleChecked
        // 翻页
        // 300条
        // 长串  /  滚动条
        // 可排序
        // 搜索高亮 组价内部是否启用高亮
        // disableDefultRow = {true}
        // disableDefultColumn = {true}
        tables = {tables}
        >
        {/* <CardInfo/> */}
        {/* <Row> */}
          {/* <Column> */}
            {/* <Dates/> */}
            {/* <Name/> */}
          {/* </Column> */}
        
        {/* </Row> */}


      </Table>
    );
  }
}
export default App;


