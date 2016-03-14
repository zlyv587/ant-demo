import React from 'react'
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import MyDragSource from '../page/MyDragSource.jsx'
import MyDropTarget from '../page/MyDropTarget.jsx'
class App extends React.Component{
   constructor(props){
     super(props);
   }
  render(){
    return (
      <div>
        <MyDropTarget/>
        <MyDragSource name="小肥羊"/>
      </div>
    )
  }
}
export default DragDropContext(HTML5Backend)(App);
