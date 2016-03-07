import React from 'react';
import ReactDOM from 'react-dom';
import Simditor from 'simditor';
import '../../node_modules/simditor/styles/simditor.css';
import { DatePicker,Table,Icon,Button,message} from 'antd';
import RadioButton from "../page/RadioButton.jsx"
import UploadImg from "../page/UploadImg.jsx"

var $ = require('jquery');
class App extends React.Component {
  constructor(props) {
    super(props);
    const _this = this;
    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render(text) {
        return <a href="#">{text}</a>;
      }
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: '操作',
      key: 'operation',
      render(text, record) {
        return (
          <span>
        <a href="#" onClick={_this.handleClick.bind(_this,record.name)}>操作一{record.name}</a>
        <span className="ant-divider"></span>
        <a href="#">操作二</a>
        <span className="ant-divider"></span>
        <a href="#" className="ant-dropdown-link">
          更多 <Icon type="down"/>
        </a>
      </span>
        );
      }
    }];
    const data = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }, {
      key: '3',
      name: '李大嘴',
      age: 32,
      address: '西湖区湖底公园1号'
    }];
    const rowSelection = {
      onSelect: function (record, selected, selectedRows) {
        console.log(1);
        console.log(record, selected, selectedRows);
        _this.setState({
          selectedRows: selectedRows,
        })
      },
      onSelectAll: function (selected, selectedRows) {
        console.log(2);
        console.log(selected, selectedRows);
        _this.setState({
          selectedRows: selectedRows
        })
      }
    };
    this.state = {
      name: "",
      selectedRows:[],
      props:{
      dataSource: data,
      columns: columns,
      rowSelection: rowSelection,
      editor:true
    }
    }
  }

  handleClick(text) {
    this.setState({
      name: text
    })
  }

  controlClick() {
    console.log(this.refs.textarea.getDOMNode().value)
    if (this.state.selectedRows.length > 1) {
      return message.error("只能操作一个");
    }
    else if (this.state.selectedRows.length < 1) {
      return message.error("请选择一个操作对象");
    }
    else {
      return message.success("操作的是：" + this.state.selectedRows.length + "个");
    }
  }
  componentDidMount(){

        var textbox = this.refs.textarea.getDOMNode();

        var editor = new Simditor({
            textarea: $(textbox)
        });

    }
  render() {
    return (
      <div>
        <div>{this.state.name}</div>
        <RadioButton defaultValue="01"/>
        <UploadImg/>
        <Button type="primary" onClick={this.controlClick.bind(this)}>操作</Button>
        <Table {...this.state.props}/>
        <textarea ref='textarea' />
      </div>
    );
  }
}

export default App;
