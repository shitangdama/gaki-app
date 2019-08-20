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
class UserPassword extends React.Component {

    state = {
        confirmDirty: false,
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll(async (err, values) => {
            if (!err) {
                await this.props.user.updateUser(userId, values)
                history.push("/dashboard/users")
            }
        })
    }

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
                    wrapperCol={{ span: 12 }}
                    label="Password"
                >
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
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
                        rules: [
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            {
                            validator: this.compareToFirstPassword,
                        }],
                    })(
                        <Input type="password" onBlur={this.handleConfirmBlur} placeholder="请再次输入密码" autoComplete="off"/>
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