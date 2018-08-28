const Admin = () => import(/* webpackChunkName: "setting" */ '@src/general/app/setting/account/admin/admin.vue');
const AccountStudent = () => import(/* webpackChunkName: "setting" */ '@src/general/app/setting/account/student/student.vue');
const AccountTeacher = () => import(/* webpackChunkName: "setting" */ '@src/general/app/setting/account/teacher/teacher.vue');
//老师 信息
const AccountTeacherSee = () => import(/* webpackChunkName: "setting" */ '@src/general/app/setting/account/teacher/See.vue');
const AccountTeacherAdd = () => import(/* webpackChunkName: "setting" */ '@src/general/app/setting/account/teacher/Add.vue');
const AccountTeacherEdit = () => import(/* webpackChunkName: "setting" */ '@src/general/app/setting/account/teacher/Edit.vue');

//学生 信息
const AccountStudentSee = () => import(/* webpackChunkName: "setting" */ '@src/general/app/setting/account/student/See.vue');
const AccountStudentAdd = () => import(/* webpackChunkName: "setting" */ '@src/general/app/setting/account/student/Add.vue');
const AccountStudentEdit = () => import(/* webpackChunkName: "setting" */ '@src/general/app/setting/account/student/Edit.vue');
export default [
    {
        path: 'accountAdmin',
        name: 'accountAdmin',
        meta: {name: '账号管理'},
        component: Admin,
    },
    {
        path: 'accountStudent',
        name: 'accountStudent',
        meta: {name: '学生信息管理'},
        component: AccountStudent,
    },
     {
        path: 'accountTeacher',
        name: 'accountTeacher',
        meta: {name: '老师信息管理'},
        component: AccountTeacher,
    },
    
//  老师信息模块
//	查看
	{
        path: 'accountTeacher/see/:id',
        name: 'accountTeacherSee',
        meta: {name: '老师信息详情'},
        component: AccountTeacherSee,
    },
//	添加
	{
        path: 'accountTeacher/add',
        name: 'accountTeacherAdd',
        meta: {name: '添加老师'},
        component: AccountTeacherAdd,
    },
// 更新
	{
        path: 'accountTeacher/edit/:id',
        name: 'accountTeacherEdit',
        meta: {name: '更新老师信息'},
        component: AccountTeacherEdit,
    },
    
//  学生信息模块
//	查看
	{
        path: 'accountStudent/see/:id',
        name: 'accountStudentSee',
        meta: {name: '学生信息详情'},
        component: AccountStudentSee,
    },
//	添加
	{
        path: 'accountStudent/add',
        name: 'accountStudentAdd',
        meta: {name: '添加学生'},
        component: AccountStudentAdd,
    },
//	更新
	{
        path: 'accountStudent/edit/:id',
        name: 'accountStudentEdit',
        meta: {name: '更新学生信息'},
        component: AccountStudentEdit,
    },    
]
