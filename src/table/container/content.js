import React, { PureComponent } from 'react';
import RowContainerList from '../components/content/row-container-list'
import Footer from './footer'
// Table 组件 Content层
class Content extends PureComponent {

  componentDidMount(){
    // console.log('%c    Table Did Mount    ','background:#e74c3c;color:#fff');
  }
  render() {
    return (
      <div className="react-flex-table">
        <RowContainerList {...this.props}/>
        <Footer {...this.props}/>
      </div>
    );
  }
}

export  { Content };
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