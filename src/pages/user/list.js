import React from 'react'
import moment from 'moment'
import classNames from 'classnames'
import { inject, observer } from 'mobx-react'

import {
    Card,
    Button,
    PageHeader,
    Table,
    Tag,
    Divider,
    Popconfirm
} from 'antd'

import history from '../../routers/history'

const { Column } = Table;

@inject('user')
@observer
export default class Users extends React.Component {

    componentDidMount() {
        this.props.user.getUsers()
    }

    handleNewUser = (e) => {
        e.preventDefault()
        history.push("/dashboard/users/new")
    }

    handleEditClick = (e,key) => {
        e.preventDefault()
        history.push("/dashboard/users/"+key+"/edit")
    }

    handleDeleteClick = (e,key) => {
        e.preventDefault()
        this.props.user.destroyUser(key)
    }

    render() {
        const { users } = this.props.user

        return (
            <div className={classNames("big-content")}>
                <PageHeader
                    title="用户管理"
                    subTitle="管理员权限"
                />
                <div className={classNames("content-info", "big-list")}>
                    <Button icon="plus" type="primary" onClick={this.handleNewUser}>
                        新建
                    </Button>
                    <Card bordered={false} style={{marginTop:"10px"}} >

                        <Table 
                            dataSource={users.slice()}
                            rowKey={record=>record.id}
                            pagination={{ pageSize: 600 }}
                        >
                            <Column
                                title="昵称"
                                key="nickname"
                                dataIndex="nickname"
                            />
                            <Column
                                title="用户名"
                                key="username"
                                dataIndex="username"
                            />
                            <Column
                                title="邮箱"
                                key="email"
                                dataIndex="email"
                            />
                            <Column
                                title="状态"
                                key="active"
                                render={(data, record) => (
                                    record.is_active ? <Tag color="#2db7f5">可用</Tag> : <Tag color="#f50">注销</Tag>
                                )}
                            />
                            <Column
                                title="管理员"
                                key="superuser"
                                render={(data, record) => (
                                    record.is_superuser ? <Tag color="#2db7f5">管理员</Tag> : <Tag color="#87d068">用户</Tag>
                                )}
                            />
                            <Column
                                title="Action"
                                key="action"
                                render={(data) => (
                                    <span>
                                        <a href='javascript:;' onClick={(e)=>this.handleEditClick(e, data.id)}>编辑</a>
                                        <Divider type="vertical" />
                                        <Popconfirm title="是否删除该用户" okText="Yes" cancelText="No" onConfirm={(e)=>this.handleDeleteClick(e, data.id)}>
                                            <a href='javascript:;' >删除</a>
                                        </Popconfirm>
                                    </span>
                                )}
                            />
                        </Table>
                    </Card>
                </div>
            </div>
        )
    }
}