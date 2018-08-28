const Right = () => import(/* webpackChunkName: "setting" */ '@src/general/app/setting/right');
const Account = () => import(/* webpackChunkName: "setting" */ '@src/general/app/setting/account');
const School = () => import(/* webpackChunkName: "setting" */ '@src/general/app/setting/school');

import right from './right';
import account from './account';
import school from './school';
export default [
    {
        path: 'right',
        name: 'right',
        meta: {name: '权限管理'},
        component: Right,
        children: right
    },
    {
        path: 'account',
        name: 'account',
        meta: {name: '用户管理'},
        component: Account,
        children: account
    },
    {
        path: 'school',
        name: 'school',
        meta: {name: '学校基本设置'},
        component: School,
        children: school
    },
]