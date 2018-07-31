import React, { PureComponent } from 'react';
import RowContainer from './row-container'


// Table 组件 Content层
class RowContainerList extends PureComponent {

  componentDidMount(){
    // console.log('%c    RowContainerList Did Mount    ','background:#f39c12;color:#fff');
  }
  render() {
    const { list,tableHeader,headerComponents=[],columnComponents=[],rowComponents=[]} = this.props;
    return (
        <div className="row-container-list">
          { this.props.children }
            <RowContainer  {...this.props} 
              components = {headerComponents}
              prefix = 'table-header' 
              key={`table-header`}  
              row = {this.props.tableHeader} 
              key={`row-header`}/>
            {/* 少一点魔法 包一层 div 兼容 React 15版本 */}
            { list.map(( row, index ) => <RowContainer 
              {...this.props} 
              row={row} 
              components = {columnComponents}
              key={`row-${index}`}/>)}
        </div>
       
    );
  }
}

export  { RowContainerList };
export default RowContainerList;













// {/* <div className='tips'>
// <div className="tips-content">发消息</div>
// <div className="tips-arrow"></div>
// </div> */}


  // getDefaultChildren(props, fullProps) {
  //   return [
  //     <Video
  //       ref={(c) => {
  //         this.video = c;
  //         this.manager.video = this.video;
  //       }}
  //       key="video"
  //       order={0.0}
  //       {...fullProps}
  //     />,
  //   ];
  // }

  // getChildren(props) {
  //   const propsWithoutChildren = {
  //     ...props,
  //     children: null,
  //   };
  //   const children = React.Children.toArray(this.props.children)
  //     .filter(e => (!isVideoChild(e)));
  //   const defaultChildren = this.getDefaultChildren(propsWithoutChildren, props);
  //   return mergeAndSortChildren(defaultChildren, children, propsWithoutChildren);
  // }

