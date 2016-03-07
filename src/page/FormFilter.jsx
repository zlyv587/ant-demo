import React from 'react';
import { Form, Input, Button, Checkbox,message} from 'antd';
const FormItem = Form.Item;
const FormCreate=Form.create;
class FormFilter extends React.Component{
  handleSubmit(e) {
    e.preventDefault();
     console.log('收到表单值：', this.props.form.getFieldsValue());
  };
  componentDidMount() {
    this.props.form.setFieldsValue({
      agreement: false
    });
  };
  render() {
    const { getFieldValue,getFieldProps} = this.props.form;
    return (
      <Form inline onSubmit={this.handleSubmit.bind(this)}>
        <FormItem
          label="账户：">
          <Input placeholder="请输入账户名"
            {...getFieldProps('userName')} />
        </FormItem>
        <FormItem
          label="密码：">
          <Input type="password" placeholder="请输入密码"
            {...getFieldProps('password')} />
        </FormItem>
        <FormItem>
          <label className="ant-checkbox-inline">
            <Checkbox
              {...getFieldProps('agreement')} />记住我
          </label>
        </FormItem>
        <Button type="primary" htmlType="submit">登录</Button>
      </Form>
    );
  }
}
FormFilter = FormCreate()(FormFilter);
export default FormFilter
