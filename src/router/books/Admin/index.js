
const booksAdmin = () => import(/* webpackChunkName: "setting" */ '@src/general/app/books/Admin/list1/booksAdmin.vue');
const booksType = () => import(/* webpackChunkName: "setting" */ '@src/general/app/books/Admin/list2/booksType.vue');
//添加阅读书籍
const booksAdd = () => import(/* webpackChunkName: "setting" */ '@src/general/app/books/Admin/list1/Add.vue');
//阅读书籍 详情
const booksSee = () => import(/* webpackChunkName: "setting" */ '@src/general/app/books/Admin/list1/See.vue');
//阅读书籍 更新
const booksEdit = () => import(/* webpackChunkName: "setting" */ '@src/general/app/books/Admin/list1/Edit.vue');

//推荐类别 查看
const booksTypeSee = () => import(/* webpackChunkName: "setting" */ '@src/general/app/books/Admin/list2/See.vue');

//推荐类别 编辑
const booksTypeEdit = () => import(/* webpackChunkName: "setting" */ '@src/general/app/books/Admin/list2/Edit.vue');

//推荐类别  添加
const booksTypeAdd = () => import(/* webpackChunkName: "setting" */ '@src/general/app/books/Admin/list2/Add.vue');
export default [
    {
        path: 'booksAdmin',
        component: booksAdmin,
        name:'tuijianAdmin',
        meta:{name:'推荐管理'},
    },
    {
        path: 'booksAdmin/add',
        component: booksAdd,
        name:'booksAdd',
        meta:{name:'添加阅读书籍'},
    },
    {
        path: 'booksAdmin/edit/:id',
        component: booksEdit,
        name:'booksEdit',
        meta:{name:'阅读书籍编辑'},
    },
    {
    	path: 'booksAdmin/see/:id',
        component: booksSee,
        name:'booksSee',
        meta:{name:'推荐书籍详情'},
    },
    /**************list2*******************/
    {
        path: 'booksType',
        component: booksType,
        name:'tuijianType',
        meta:{name:'推荐类别'},
    },
    {
        path: 'booksType/see/:id',
        component: booksTypeSee,
        name:'booksTypeSee',
        meta:{name:'查看推荐类别'},
    },
    {
        path: 'booksType/add',
        component: booksTypeAdd,
        name:'booksTypeAdd',
        meta:{name:'添加推荐类别'},
    },
    {
        path: 'booksType/edit/:id',
        component: booksTypeEdit,
        name:'booksTypeEdit',
        meta:{name:'编辑推荐类别'},
    },
]