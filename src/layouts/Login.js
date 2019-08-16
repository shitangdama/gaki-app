import React from 'react';
import style from './Login.module.less';
import { Card } from 'antd';
import LoginFrom from '../components/Login/Login'

export default class LoginPage extends React.Component {

    render() {
        return (
            <div className={style.container}>
                {/* <div className={style.content}>
                    <div className={style.main}> */}
                        <Card>
                            <LoginFrom />
                        </Card>
                    {/* </div>
                </div> */}
            </div>
        )
    }
}