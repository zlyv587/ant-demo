import React from 'react'
import { DropTarget } from 'react-dnd';
const style={
  width:200,
  height:200,
  border:'1px solid black'
}
const spec={
  drop(props, monitor, component) {
        // 获取正在拖放的数据
        const item = monitor.getItem();
        // 更新组件状态
        component.setState({
            text:item.name
        })

    }
}
function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget()
    }
}

class MyDropTarget extends React.Component{
    constructor(props){
     super(props);
      this.state={
        text:''
      }
   }
  render(){
    const {connectDropTarget}=this.props;
    return connectDropTarget(
      <div style={style}>拖动的是：{this.state.text}</div>
    )
  }
}
export default DropTarget('box', spec, collect)(MyDropTarget)
