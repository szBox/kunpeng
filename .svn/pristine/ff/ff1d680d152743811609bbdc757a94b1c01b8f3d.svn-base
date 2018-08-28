//年级管理
const GradeAdmin = () => import(/* webpackChunkName: "setting" */ '@src/general/app/setting/school/grade/gradeAdmin.vue');
const GradeAdminAdd= () => import(/* webpackChunkName: "setting" */ '@src/general/app/setting/school/grade/Add.vue');
const GradeAdminEdit = () => import(/* webpackChunkName: "setting" */ '@src/general/app/setting/school/grade/Edit.vue');

//班级管理
const ClassAdmin = () => import(/* webpackChunkName: "setting" */ '@src/general/app/setting/school/class/classAdmin.vue');
const ClassAdminSee = () => import(/* webpackChunkName: "setting" */ '@src/general/app/setting/school/class/See.vue');
const ClassAdminAdd = () => import(/* webpackChunkName: "setting" */ '@src/general/app/setting/school/class/Add.vue');
const ClassAdminEdit = () => import(/* webpackChunkName: "setting" */ '@src/general/app/setting/school/class/Edit.vue');

//部门管理
const DepAdmin = () => import(/* webpackChunkName: "setting" */ '@src/general/app/setting/school/dep/depAdmin.vue');
const DepAdminAdd = () => import(/* webpackChunkName: "setting" */ '@src/general/app/setting/school/dep/Add.vue');
const DepAdminEdit = () => import(/* webpackChunkName: "setting" */ '@src/general/app/setting/school/dep/Edit.vue');

export default [
    {
        path: 'gradeAdmin',
        name: 'gradeAdmin',
        meta: {name: '年级管理'},
        component: GradeAdmin,
    },
    {
        path: 'classAdmin',
        name: 'classAdmin',
        meta: {name: '班级管理'},
        component: ClassAdmin,
    },
     {
        path: 'depAdmin',
        name: 'depAdmin',
        meta: {name: '部门管理'},
        component: DepAdmin,
    },
    
//  年级模块
//	添加
	{
        path: 'gradeAdmin/add',
        name: 'gradeAdminAdd',
        meta: {name: '年级新增'},
        component: GradeAdminAdd,
    },
// 更新
	{
        path: 'gradeAdmin/edit/:id',
        name: 'gradeAdminEdit',
        meta: {name: '年级编辑'},
        component: GradeAdminEdit,
    },
    
//  班级模块
//	查看
	{
        path: 'classAdmin/see/:id',
        name: 'classAdminSee',
        meta: {name: '班级详情'},
        component: ClassAdminSee,
    },
//	添加
	{
        path: 'classAdmin/add',
        name: 'classAdminAdd',
        meta: {name: '班级新增'},
        component: ClassAdminAdd,
    },
//	更新
	{
        path: 'classAdmin/edit/:id',
        name: 'classAdminEdit',
        meta: {name: '班级编辑'},
        component: ClassAdminEdit,
    },  
    
    
//  部门模块
//	添加
	{
        path: 'depAdmin/add',
        name: 'depAdminAdd',
        meta: {name: '部门新增'},
        component: DepAdminAdd,
    },
//	更新
	{
        path: 'depAdmin/edit/:id',
        name: 'depAdminEdit',
        meta: {name: '部门编辑'},
        component: DepAdminEdit,
    },
]
