import _ from 'lodash'
import React from 'react';
import { inject, observer } from 'mobx-react'

import { 
    Form, 
    Input, 
    Button, 
    Switch,
} from 'antd';

import history from '../../routers/history'

const FormItem = Form.Item;

@inject('user')
@observer
class UserEditForm extends React.Component {

    state = {
        confirmDirty: false,
        user: {},
    }

    componentDidMount() {
        this.init()
    }

    init = async () => {
        const userId = this.props.userId
        if(!_.isUndefined(userId)) {
            const data = await this.props.user.getUser(userId)
            this.setState({
                user: data,
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll(async (err, values) => {
            if (!err) {
                const userId = this.props.userId
                if(!_.isUndefined(userId)) {
                    await this.props.user.updateUser(userId, values)
                } else {
                    await this.props.user.createUser(values)
                }
                history.push("/dashboard/users")
            }
        })
    }

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };


    handleBack = (e) => {
        e.preventDefault();
        history.push("/dashboard/users")
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { user } = this.state

        return (
            <Form onSubmit={this.handleSubmit} 
                style={{ marginTop: 8 }}
                autoComplete="off"
            >
                <FormItem
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 10 }}
                    label="状态"
                >
                    {getFieldDecorator('is_active', {
                        initialValue: user.is_active || false,
                        valuePropName: 'checked' 
                    })(
                        <Switch checkedChildren="active" unCheckedChildren="frozen" />
                    )}
                </FormItem>
                <FormItem 
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 10 }}
                    label="昵称"
                >
                    {getFieldDecorator('nickname', {
                        rules: [
                            {
                                required: true,
                                message: '请输入昵称',
                            },
                        ],
                        initialValue: user.nickname
                    })(<Input placeholder="请输入昵称" />)}
                </FormItem>

                <FormItem
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 10 }}
                    label="用户名"
                >
                    {getFieldDecorator('username', {
                        rules: [{
                            required: true, message: 'Please input username',
                        }],
                        initialValue: user.username
                    })(
                        <Input placeholder="请输入用户名"/>
                    )}
                </FormItem>
                <FormItem
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 10 }}
                    label="邮箱"
                >
                    {getFieldDecorator('email', {
                        initialValue: user.email
                    })(
                        <Input placeholder="请输入邮箱"/>
                    )}
                </FormItem>
                <FormItem
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                    label="Password"
                >
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                validator: this.validateToNextPassword,
                            }
                        ],
                    })(
                        <Input type="password" placeholder="请输入密码" autoComplete="off"/>
                    )}
                </FormItem>
                <FormItem
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                    label="Confirm Password"
                >
                    {getFieldDecorator('password_confirmation', {
                        rules: [{
                            validator: this.compareToFirstPassword,
                        }],
                    })(
                        <Input type="password" onBlur={this.handleConfirmBlur} placeholder="请再次输入密码" autoComplete="off"/>
                    )}
                </FormItem>
                <FormItem
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 10 }}
                    label="管理员"
                >
                    {getFieldDecorator('is_superuser', {
                        initialValue: user.is_superuser || false,
                        valuePropName: 'checked' 
                    })(
                        <Switch checkedChildren="master" unCheckedChildren="normal" />
                    )}
                </FormItem>
                <FormItem
                    wrapperCol={{ span: 8, offset: 5 }}
                >
                    <Button onClick={this.handleBack}>返回上一级</Button>
                    <Button type="primary" style={{marginLeft:'10px'}} htmlType="submit">提交</Button>
                </FormItem>
            </Form>
        )
    }
}

export default  Form.create()(UserEditForm);