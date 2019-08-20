import Init from '../layouts/Init'

import BasicLayout from '../layouts/BasicLayout'

import Login from '../layouts/Login'

import IndexLayout from '../layouts/IndexLayout'

import UserList from '../pages/user/list'
import UserEdit from '../pages/user/edit'
import UserNew from '../pages/user/new'
import UserSetting from '../pages/user/setting'

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
            {
                path: "/dashboard/users",
                component: IndexLayout,
                routes: [
                    {
                        path: "/dashboard/users",
                        exact: true,
                        component: UserList,
                    },
                    {
                        path: "/dashboard/users/:id/edit",
                        exact: true,
                        component: UserEdit,
                    },
                    {
                        path: "/dashboard/users/new",
                        exact: true,
                        component: UserNew,
                    },
                    {
                        path: "/dashboard/users/setting",
                        exact: true,
                        component: UserSetting,
                    },
                ]
            }
        ]
    },
    // {
    //     path: '*',
    //     component: NotFound
    // }
];

export default routes;