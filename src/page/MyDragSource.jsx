import React from 'react'
import { DragSource } from 'react-dnd';
const style = {
  width: 50,
  height: 50,
  border: '1px solid black'
}
const spec = {
  beginDrag(props, monitor) {
    return {
      name: props.name,
    }
  },
  endDrag(props,monitor){
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      window.alert(item.name);
    }
  }
}
function collect(connect, monitor) {
  return {
    isDragging: monitor.isDragging(),
    connectDragSource: connect.dragSource(),
  }
}
class MyDragSource extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {isDragging,connectDragSource}=this.props;
    return connectDragSource(
      <div style={style}>可拖动的</div>
    )
  }
}
export default DragSource('box', spec, collect)(MyDragSource)
