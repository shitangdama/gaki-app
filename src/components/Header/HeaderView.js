import React from 'react';
// import GlobalHeader from '../components/GlobalHeader';

import { Layout, message } from 'antd';
import styles from './HeaderView.module.less'

const { Header } = Layout;

export default class HeaderView extends React.Component {
    render() {
        return (
            <Header className={styles.fixedHeader}>
                
            </Header>
        )
    }
}