import React from 'react';

import { 
    Layout,
    Avatar
} from 'antd';
import styles from './HeaderView.module.less'

const { Header } = Layout;

export default class HeaderView extends React.Component {
    render() {
        return (
            <Header className={styles.fixedHeader}>
                <div className={styles.right}>
                    <span className={`${styles.action} ${styles.account}`}>
                        <Avatar 
                            className={styles.avatar}
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" 
                        />
                        <span className={styles.name}>{"ceshi"}</span>
                    </span>
                </div>
            </Header>
        )
    }
}