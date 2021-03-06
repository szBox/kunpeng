// 自动组题
const Automatic = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/problemSet/automatic.vue');

// 动态组题
const Dynamic  = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/problemSet/dynamic/dynamic.vue');
const DynamicEdit  = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/problemSet/dynamic/edit.vue');
const DynamicAdd  = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/problemSet/dynamic/add.vue');
const DynamicView  = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/problemSet/dynamic/view.vue');

// 试卷管理
const Paper = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/problemSet/paper/paper.vue');
const PaperSee = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/problemSet/paper/See.vue');
const PaperAdd = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/problemSet/paper/Add.vue');
const PaperEdit = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/problemSet/paper/Edit.vue');
// 手动组题
const Manual = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/problemSet/manual.vue');
export default [
    {
        name: 'automatic',
        meta: {name: '自动组题'},
        path: 'automatic',
        component: Automatic
    },

    
    {
        name: 'paper',
        meta: {name: '试卷管理'},
        path: 'paper',
        component: Paper
    },
    {
        name: 'paperSee',
        meta: {name: '查看试卷'},
        path: 'paper/see/:id',
        component: PaperSee
    },
    {
        name: 'paperAdd',
        meta: {name: '添加试卷'},
        path: 'paper/add',
        component: PaperAdd
    },
    {
        name: 'paperEdit',
        meta: {name: '更新试卷'},
        path: 'paper/edit/:id',
        component: PaperEdit
    },

    {
        name: 'dynamic',
        meta: {name: '动态组题'},
        path: 'dynamic',
        component: Dynamic
    },
    {
        name: 'dynamicAdd',
        meta: {name: '添加动态组题'},
        path: 'dynamic/add',
        component: DynamicAdd
    },
    {
        name: 'dynamicEdit',
        meta: {name: '更新动态组题'},
        path: 'dynamic/edit/:id',
        component: DynamicEdit
    },
    
    {
        name: 'manual',
        meta: {name: '手动组题'},
        path: 'manual',
        component: Manual
    },
    {
        name: 'dynamicView',
        meta: {name: '查看动态组题'},
        path: 'dynamic/view/:id',
        component: DynamicView
    },
    {
        name: 'dynamicView',
        meta: {name: '查看动态组题'},
        path: 'dynamic/view/:id',
        component: DynamicView
    }

]
