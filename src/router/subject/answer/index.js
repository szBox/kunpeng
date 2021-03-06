/**
 * Created by Administrator on 2018/7/4.
 */
// 答题设置
const AnswerSet = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/answer/answerSet/answerSet.vue');
const AnswerView = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/answer/answerSet/view.vue');
const AnswerEdit = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/answer/answerSet/edit.vue')

// 答题方式
const AnswerWay = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/answer/answerWay/answerway.vue');
const WayAdd = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/answer/answerWay/add.vue');
const WayView = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/answer/answerWay/view.vue');
const WayEdit = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/answer/answerWay/edit.vue')

// 阅读挑战
const Reading = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/answer/reading/reading');
const ReadEdit = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/answer/reading/edit');

//  答题次数
const AnswerQust = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/answer/answerQust/answerQust.vue');
const AnswerQustEdit = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/answer/answerQust/edit.vue');

export default [
    {
        name: 'answerSet',
        meta: {name: '答题设置'},
        path: 'answerSet',
        component: AnswerSet
    },
    {
        name: 'answerView',
        meta: {name: '查看答题设置'},
        path: 'answerSet/view/:id',
        component: AnswerView
    },
    {
        name: 'answerEdit',
        meta: {name: '更新答题设置'},
        path: 'answerSet/edit/:id',
        component: AnswerEdit
    },
    {
        name: 'answerWay',
        meta: {name: '答题方式设置'},
        path: 'answerWay',
        component: AnswerWay
    },
    {
        name: 'wayAdd',
        meta: {name: '添加答题方式'},
        path: 'answerWay/add',
        component: WayAdd
    },
    {
        name: 'wayView',
        meta: {name: '查看答题方式'},
        path: 'answerWay/view',
        component: WayView
    },
    {
        name: 'wayEdit',
        meta: {name: '更新答题方式'},
        path: 'answerWay/edit/:id',
        component: WayEdit
    },
    {
        name: 'reading',
        meta: {name: '阅读挑战管理'},
        path: 'reading',
        component: Reading
    },
    {
        name: 'readEdit',
        meta: {name: '更新阅读挑战'},
        path: 'reading/edit/:id',
        component: ReadEdit
    },
    {
        name: 'answerQust',
        meta: {name: '答题次数管理'},
        path: 'time',
        component: AnswerQust
    },
    {
        name: 'answerQustEdit',
        meta: {name: '更新答题次数'},
        path: 'time/edit/:id',
        component: AnswerQustEdit
    }

]


