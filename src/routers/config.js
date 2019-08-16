import Init from '../layouts/Init'

import BasicLayout from '../layouts/BasicLayout'

import Login from '../layouts/Login'

// import IndexLayout from '../layouts/IndexLayout'


const routes = [
    {
        path: "/",
        exact: true,
        component: Init,
    },
    {
        path: "/login",
        exact: true,
        component: Login,
    },
    {
        path: "/dashboard",
        component: BasicLayout,
        routes: [
            // {
            //     path: "/dashboard",
            //     exact: true,
            //     component: IndexLayout,
            // }
        ]
    },
    // {
    //     path: '*',
    //     component: NotFound
    // }
];

export default routes;