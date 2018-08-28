const readBook = () => import(/* webpackChunkName: "setting" */ '@src/general/app/books/bookSet/list1/readBook.vue');
const readType = () => import(/* webpackChunkName: "setting" */ '@src/general/app/books/bookSet/list2/readType.vue');

const readTypeAdd = () => import(/* webpackChunkName: "setting" */ '@src/general/app/books/bookSet/list2/Add.vue');
const readTypeSee = () => import(/* webpackChunkName: "setting" */ '@src/general/app/books/bookSet/list2/See.vue');
const readTypeEdit = () => import(/* webpackChunkName: "setting" */ '@src/general/app/books/bookSet/list2/Edit.vue');

const readBookAdd = () => import(/* webpackChunkName: "setting" */ '@src/general/app/books/bookSet/list1/Add.vue');
const readBookSee = () => import(/* webpackChunkName: "setting" */ '@src/general/app/books/bookSet/list1/See.vue');
const readBookEdit = () => import(/* webpackChunkName: "setting" */ '@src/general/app/books/bookSet/list1/Edit.vue');
export default [
     {
        name: 'readType',
        meta: {name: '阅读类型管理'},
        path: 'readType',
        component: readType
    },
    
    {
        name: 'readTypeAdd',
        meta: {name: '添加阅读类型'},
        path: 'readType/add',
        component: readTypeAdd
    },
    {
        name: 'readTypeSee',
        meta: {name: '查看阅读类型'},
        path: 'readType/see/:id',
        component: readTypeSee
    },
    {
        name: 'readTypeEdit',
        meta: {name: '更新阅读类型'},
        path: 'readType/edit/:id',
        component: readTypeEdit
    },
    
    /***********list2****************/
   
   
    {
        name: 'readBook',
        meta: {name: '阅读书籍管理'},
        path: 'readBook',
        component: readBook
    },
    {
        name: 'readBookAdd',
        meta: {name: '添加阅读书籍'},
        path: 'readBook/add',
        component: readBookAdd
    },
    {
        name: 'readBookSee',
        meta: {name: '查看阅读书籍'},
        path: 'readBook/see/:id',
        component: readBookSee
    },
    {
        name: 'readBookEdit',
        meta: {name: '更新阅读书籍'},
        path: 'readBook/edit/:id',
        component: readBookEdit
    },
    
]
