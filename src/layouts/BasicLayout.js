import React from 'react';
// import classNames from 'classnames';
import DocumentTitle from 'react-document-title';
import { 
    Layout,
} from 'antd';

import RouteWithSubRoutes from "../routers/routewithsubroutes"

import HeaderView from '../components/Header/HeaderView';
import SiderMenu from '../components/SiderMenu/SiderMenu';

import styles from './BasicLayout.module.less';

const { Content, Footer } = Layout;

export default class BasicLayout extends React.Component {
    render() {
        const { routes } = this.props;
        
        const layout = (
            <Layout style={{ minHeight: '100vh' }}>
                <SiderMenu />
                <Layout>
                    <HeaderView>Header</HeaderView>
                    <Content className={styles.content}>
                        {routes.map((route, i) => (<RouteWithSubRoutes key={i} {...route} />))}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )

        return (
            <React.Fragment>
                <DocumentTitle title={"GAKI APP"}>
                    {layout}
                </DocumentTitle>
            </React.Fragment>
        )
    }
}