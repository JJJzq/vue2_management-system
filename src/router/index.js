//该文件用于应用的路由器
import VueRouter from "vue-router";

import UserList from '../userManage/UserList'
import Quanx from '../pages/Quanx'
import Person from '../jianli/Person'
import Login from '../login/Login'
import Home from '../pages/Index'
import Register from '../login/Register'

const router = new VueRouter({
    mode: 'history',
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
            name: 'zhuce',
            path: '/register',
            component: Register,
            meta: {
                title: '注册页面'
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


// 路由守卫
router.beforeEach((to, from, next) => {
    let flag = sessionStorage.getItem('flag')
    if (to.path === '/home' || to.path === '/Home' || to.path === '/userList' || to.path === '/quanxian') {        //如果想要跳转home或者algsmanager页面必须判断有没有sessionStorage
        if (flag) {              //如果有sessionStorage
            next();				//跳转
        } else {
            alert('您还没有登录，请先登录账户');   //没有就先登录
            next('/')							//还在登录页
        }
    }
    else {
        next();
    }
    if (to.path === '/') {				//如果跳转到了登录页面必须清空sessionStorage，否则在地址栏输入路径还是会跳转
        sessionStorage.clear();				//清空sessionStorage
    }
})




export default router