import React from 'react'
import classNames from 'classnames'

import {
    PageHeader,
    Card,
    Tabs
} from 'antd'

const { TabPane } = Tabs;

export default class UserSetting extends React.Component {

    render() {
        return (
            <div className={classNames("small-content")}>
                <PageHeader
                    title="个人设置"
                    subTitle="自己设置"
                />
                <div className={classNames("content-info", "small-list")}>
                    <Card bordered={false}>
                        <Tabs defaultActiveKey="1" tabPosition={"left"}>
                            <TabPane tab="个人设置" key="setting">
                                个人设置
                            </TabPane>
                            <TabPane tab="密码设置" key="password">
                                密码设置
                            </TabPane>
                        </Tabs>
                    </Card>
                </div>
            </div>
        )
    }
}