import React from 'react'
import classNames from 'classnames'

import {
    PageHeader,
    Card
} from 'antd'

import UserNewForm from '../../components/EditForm/CreateUser'

export default class UserEdit extends React.Component {

    render() {
        return (
            <div className={classNames("small-content")}>
                <PageHeader
                    title="创建新用户"
                    subTitle="管理员创建用户"
                />
                <div className={classNames("content-info", "small-list")}>
                    <Card bordered={false}>
                        <UserNewForm />
                    </Card>
                </div>
            </div>
        )
    }
}