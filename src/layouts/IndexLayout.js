import React from 'react';

import RouteWithSubRoutes from "../routers/routewithsubroutes"

export default class IndexLayout extends React.Component {

    render() {
        const { routes } = this.props;
        return (
            <div>
                {routes.map((route, i) => (<RouteWithSubRoutes key={i} {...route} />))}
            </div>
        )
    }
}