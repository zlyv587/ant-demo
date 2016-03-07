import React from 'react';
import { Upload, message, Button, Icon } from 'antd';
class UploadImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'http://www.baidu.com/xxx.png'
      }]
    }
  }

  render() {

    const props = {
      action: '/upload.do',
      listType: 'picture',
      showUploadLIst: false,
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(JSON.stringify(info.file));
          console.log(JSON.stringify(info.fileList));
        }
      },
      defaultFileList: [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'http://www.baidu.com/xxx.png'
      }, {
        uid: -2,
        name: 'yyy.png',
        status: 'done',
        url: 'http://www.baidu.com/yyy.png'
      }]
    };
    return (
      <Upload {...props}>
        <Button type="ghost">
          <Icon type="upload"/> 点击上传
        </Button>
      </Upload>
    )
  }
}
export default UploadImg
