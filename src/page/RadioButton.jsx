import React from 'react';
import { Form, Input, Button, Checkbox,message} from 'antd';
class RadioButton extends React.Component{
  constructor(props){
    super(props);
    this.state={
      selectButton:this.props.defaultValue
    }
  }
  handleClick(ID){
    this.setState({
      selectButton:ID
    })
  }
  render(){
    const storeList=[
      {
        name:'按钮1',
        id:'01'
      },
      {
        name:'按钮2',
        id:'02'
      },
      {
        name:'按钮3',
        id:'03'
      },
      {
        name:'按钮4',
        id:'04'
      }
    ];
    const items=storeList.map((dataItem)=>{//选项
            return (
                <Button key={dataItem.id} type={this.state.selectButton === dataItem.id ? 'primary' : 'ghost'} style={{marginRight: 5, marginBottom: 5}} onClick={this.handleClick.bind(this, dataItem.id)}>{dataItem.name}</Button>
            )
        }
    );

      return (
        <div>
          {items}
        </div>
      )
  }
};
export default RadioButton
