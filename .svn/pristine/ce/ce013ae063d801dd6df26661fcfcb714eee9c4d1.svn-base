//答题记录
const Jilu = () => import(/* webpackChunkName: "setting" */ '@src/general/app/statistics/analysis/jilu.vue');

//答题统计
const Tongji = () => import(/* webpackChunkName: "setting" */ '@src/general/app/statistics/analysis/tongji.vue');
//查看统计详情
const TongjiInfo = () => import(/* webpackChunkName: "setting" */ '@src/general/app/statistics/analysis/TongjiInfo.vue');

//统计排行榜
const TongjiPhP = () => import(/* webpackChunkName: "setting" */ '@src/general/app/statistics/analysis/tongjiPhp.vue');
const ReadPhP = () => import(/* webpackChunkName: "setting" */ '@src/general/app/statistics/analysis/readPhp.vue');
export default [
    {
        path: 'jilu',
        component: Jilu,
        name:'jilu',
        meta:{name:'答题记录'},
    },
    {
        path: 'tongji',
        name:'tongji',
        component: Tongji,
        meta:{name:'答题统计'},
    },
    {
        path: 'tongji/see/:id',
        name:'tongjiInfo',
        component: TongjiInfo,
        meta:{name:'统计详情'},
    },
    {
        path: 'tongjiPhp',
        name:'tongjiPhp',
        component: TongjiPhP,
        meta:{name:'阅读统计排行'},
    },
    {
        path: 'readPhp',
        name:'readPhp',
        component: ReadPhP,
        meta:{name:'阅读数量排行'},
    },
    
]