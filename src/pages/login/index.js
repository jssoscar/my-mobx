/*
 * @Author			jishengsheng
 * @Date			2017-12-23 23:08:12 
 * @Version			1.0 
 * @Description	
 */

import React, {Component} from 'react'
import {Form, Input, Checkbox, Button} from 'antd'
import {observer} from 'mobx-react'
import logo from '../../img/logo.svg';

const FormItem = Form.Item;

@observer
class Login extends Component{

    submit = () => {
        this.props.form.validateFields((err, values) => {
            if(err){
                return;
            }

            const { push } = this.props.history;
            push('/index');
        });
    }

    render() {
        const {props} = this,
            {getFieldDecorator} = props.form;

        return <div className="login-container">
            <header className="login-header">
                <img src={logo} className="login-logo" alt="logo" />
            </header>
            <div className="login-title">欢迎使用react-mobx</div>
            <Form className="login-form">
                <FormItem>
                    {
                        getFieldDecorator('username', {
                            rules : [
                                {
                                    required : true,
                                    message : '请输入用户名'
                                }
                            ]
                        })(<Input placeholder="用户名" />)
                    }
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('password', {
                            rules : [
                                {
                                    required : true,
                                    message : '请输入密码'
                                }
                            ]
                        })(<Input placeholder="密码" type="password" />)
                    }
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                        })(<Checkbox>自动登录</Checkbox>)
                    }
                    <a href="" style={{float: 'right'}}>忘记密码</a>
                </FormItem>
                <Button style={{
                    width: '100%', 
                    marginBottom: 30
                }} size="large" type="primary" onClick={this.submit}>登录</Button>
            </Form>
        </div>;
    }
}

export default Form.create()(Login);