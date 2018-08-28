/**
 * Created by Administrator on 2018/7/4.
 */
// 题目类型
const QuestType = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/quest-setting/questType/questType.vue');
const QuestAdd = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/quest-setting/questType/add.vue');
const QuestEdit = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/quest-setting/questType/edit.vue');
const QuestView = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/quest-setting/questType/view.vue');
// 题型分类
const QuestClassify = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/quest-setting/questClassily/questClassily.vue');
const ClassilyAdd = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/quest-setting/questClassily/add.vue');
const ClassilyEdit = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/quest-setting/questClassily/edit.vue');
// 星级管理、
const QuestStar = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/quest-setting/questStar/questStar.vue');
const StarEdit = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/quest-setting/questStar/edit.vue');
const StarAdd = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/quest-setting/questStar/add.vue');

// 题目管理
const Question = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/quest-setting/question/question.vue');
const QuestionAdd = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/quest-setting/question/add.vue');
const QuestionView = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/quest-setting/question/view.vue');
const QuestionEdit = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/quest-setting/question/edit.vue');

// 分值管理
const Score = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/quest-setting/score/score.vue');
const ScoreEdit = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/quest-setting/score/edit.vue');
const ScoreAdd = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/quest-setting/score/add.vue');
export default [
    {
        name: 'questType',
        meta: {name: '题目类型管理'},
        path: 'QuestType',
        component: QuestType
    },
    {   name: 'questAdd',
        meta: {name: '添加题目类型'},
        path: 'QuestType/add',
        component: QuestAdd
    },
    {   name: 'questView',
        meta: {name: '查看题目类型'},
        path: 'QuestType/view',
        component: QuestView
    },
    {   name: 'quset-edit',
        meta: {name: '题库设定'},
        path: 'QuestType/edit/:id',
        component: QuestEdit
    },
    {
        name: 'questClassify',
        meta: {name: '题库分类管理'},
        path: 'questClassily',
        component: QuestClassify
    },
    {
        name: 'classilyAdd',
        meta: {name: '添加题目分类'},
        path: 'questClassily/add',
        component: ClassilyAdd
    },
    {
        name: 'classilyEdit',
        meta: {name: '更新题目分类'},
        path: 'questClassily/edit/:id',
        component: ClassilyEdit
    },
    {
        name: 'questStar',
        meta: {name: '题目星级管理'},
        path: 'questStar',
        component: QuestStar
    },
    {
        name: 'starEdit',
        meta: {name: '更新星级管理'},
        path: 'questStar/edit/:id',
        component: StarEdit
    },
    {
        name: 'starAdd',
        meta: {name: '添加星级'},
        path: 'questStar/add',
        component: StarAdd
    },
    {
        name: 'question',
        meta: {name: '题目管理'},
        path: 'question',
        component: Question
    },
    {
        name: 'questionAdd',
        meta: {name: '添加题目管理'},
        path: 'question/add',
        component: QuestionAdd
    },
     {
        name: 'questionview',
        meta: {name: '查看题目详情'},
        path: 'question/view/:id',
        component: QuestionView
    },
    {
        name: 'questionEdit',
        meta: {name: '编辑题目'},
        path: 'question/edit/:id',
        component: QuestionEdit
    },
    
    {
        name: 'score',
        meta: {name: '分值管理'},
        path: 'score',
        component: Score
    },
    {
        name: 'scoreEdit',
        meta: {name: '更新分值管理'},
        path: 'score/edit/:id',
        component: ScoreEdit
    },
    {
        name: 'scoreAdd',
        meta: {name: '添加分值管理'},
        path: 'score/add',
        component: ScoreAdd
    }

]