import React from 'react';
import { inject, observer } from 'mobx-react'
import history from '../routers/history'

class Init extends React.Component {

    componentDidMount() {
        // if(this.props.admin.getStatus()) {
            // history.push('/dashboard/')
        // }else{
            history.push('/login')
        // }
    }

    render() {   
        return (
            <div />
        )
    }
}

export default Init;