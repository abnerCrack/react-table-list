// const withMouse = (Component) => {
//     return class extends React.Component {
//       render() {
//         return <Mouse render={mouse => (
//           <Component {...this.props} mouse={mouse}/>
//         )}/>
//       }
//     }
//   }


//   <Mouse render={({ x, y }) => (
//     // The render prop gives us the state we need
//     // to render whatever we want here.
//     <h1>The mouse position is ({x}, {y})</h1>
//   )}/>
//   <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
//     {this.props.render(this.state)}
//   </div>
"use strict";