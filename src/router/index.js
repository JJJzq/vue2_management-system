//该文件用于应用的路由器
import VueRouter from "vue-router";

import UserList from '../userManage/UserList'
import Quanx from '../pages/Quanx'
import Person from '../jianli/Person'
import Login from '../login/Login'
import Home from '../pages/Index'

const router = new VueRouter({
    routes: [
        {
            name: 'denglu',
            path: '/',
            component: Login,
            meta: {
                title: '登录页面'
            }
        },
        {
            name: 'Home',
            path: '/Home',
            component: Home,
            meta: {
                title: '首页'
            },
            children: [
                {
                    name: 'yonhuliebiao',
                    path: '/userList',
                    component: UserList,
                    meta: {
                        title: '用户列表'
                    }
                },
                {
                    name: 'quanxianguanli',
                    path: '/quanxian',
                    component: Quanx,
                    meta: {
                        title: '权限管理'
                    }
                },
                {
                    name: 'shouye',
                    path: '/home',
                    component: Person,
                    meta: {
                        title: '首页'
                    }
                }
            ]
        },

    ]
})




export default router