import React, { PureComponent } from 'react';
import RowContainerList from '../components/content/row-container-list'
import Footer from './footer'

// Table 组件 Content层
class Content extends PureComponent {

  constructor(props) {
    super(props)
    const { current = 1, capacity = 15, totalCurrent = 0 } = this.props;
    this.state = {
      current,
      capacity,
      totalCurrent
    }
  }

  componentDidMount() {
    // console.log('%c    Table Did Mount    ','background:#e74c3c;color:#fff');
  }
  // 分页数据
  get reallListData() {
    const {tables} =this.props;
    const {current, capacity } = this.state
    const  reallList = [...tables]
    const start = ( current-1 ) * capacity
    const end = start + capacity
    return  reallList.slice(start, end)
  }
  // 容量
  handleCapacityChange = (current, capacity) => {
    this.setState({
      current,
      capacity
    })
  }
  // 切页面
  handlePagingChange = (current, capacity) => {
    this.setState({
      current,
      capacity
    })
  }
  render() {
    const { total, totalCurrent } = this.props;
    const { capacity } = this.state;
    return (
      <div className="react-flex-table">
        <RowContainerList list={this.reallListData} {...this.props} />
        <Footer
          handlePagingChange={this.handlePagingChange}
          handleCapacityChange={this.handleCapacityChange}
          {...{ total, capacity, totalCurrent }}
        />
      </div>
    );
  }
}

export { Content };
export default Content;













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