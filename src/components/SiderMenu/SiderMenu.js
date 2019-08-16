import React from 'react';
import classNames from 'classnames';
import { 
    Menu, 
    Icon,
    Layout
} from 'antd';

import history from '../../routers/history'

const { Sider } = Layout;
import styles from './SiderMenu.module.less';

export default class SiderMenu extends React.Component {

    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }

    onMenuClick = (e) => {
        console.log(e)
        history.push("/dashboard" + e.key)

    }

    render() {
        return (
            <Sider 
                collapsible
                width={200}
                theme={"light"}
                className={classNames(styles.sider)}
                collapsed={this.state.collapsed} 
                onCollapse={this.onCollapse}
            >
                <div className={styles.logo} />
                <Menu 
                    theme="light" 
                    mode="inline"
                    defaultSelectedKeys={['1']} 
                    onClick={this.onMenuClick}
                >
                    <Menu.Item key="/">
                        <Icon type="pie-chart" />
                        <span>统计</span>
                    </Menu.Item>
                    <Menu.Item key="/deployments">
                        <Icon type="appstore" />
                        <span>设置</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}