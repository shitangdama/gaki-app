import React from 'react';
import { inject, observer } from 'mobx-react'

import { 
    Layout,
    Avatar,
    Menu,
    Dropdown
} from 'antd';
import styles from './HeaderView.module.less'
import history from '../../routers/history'

const { Header } = Layout;

@inject('admin')
@observer
export default class HeaderView extends React.Component {

    logout = () => {
        this.props.admin.logout()
    }

    onMenuClick = (e) => {
        switch(e.key) {
            case "logout":
                this.props.admin.logout()
                break
            case "setting":
                history.push('/dashboard/users/setting')
                break
        }
    }

    render() {
        const menu = (
            <Menu
                onClick={this.onMenuClick}
            >
                <Menu.Item key="setting">
                    个人设置
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="logout">
                    登出
                </Menu.Item>
            </Menu>
        );

        return (
            <Header className={styles.fixedHeader}>
                <div className={styles.right}>
                    <Dropdown overlay={menu}>
                        <span className={`${styles.action} ${styles.account}`}>
                            <Avatar 
                                className={styles.avatar}
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" 
                            />
                            <span className={styles.name}>{"ceshi"}</span>
                        </span>
                    </Dropdown>
                </div>
            </Header>
        )
    }
}