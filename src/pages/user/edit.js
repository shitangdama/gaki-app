import React from 'react'
import classNames from 'classnames'

import {
    PageHeader,
    Card
} from 'antd'

import UserEditForm from '../../components/EditForm/UpdateUser'

export default class UserEdit extends React.Component {

    render() {
        return (
            <div className={classNames("small-content")}>
                <PageHeader
                    title="修改用户"
                    subTitle="管理员修改用户"
                />
                <div className={classNames("content-info", "small-list")}>
                    <Card bordered={false}>
                        <UserEditForm userId={this.props.match.params.id}/>
                    </Card>
                </div>
            </div>
        )
    }
}