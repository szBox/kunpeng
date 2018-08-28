import network from '../index';
//图书 设置    阅读类型 sel
export default {
	async readSel (params) {
        const res = await network.post({
            url: 'readType/list/page',
            data: params
        });
        return res;
    },
//图书 设置    阅读类型  table   
    async table (params) {
        const res = await network.post({
            url: 'readType/list/page',
            data: params
        });
        return res;
    },
//阅读类型    详情
    async See2 (id) {
        const res = await network.get({
            url: 'readType/get/'+id,
        });
        return res;
    },
//阅读类型    添加
    async Add (params) {
        const res = await network.post({
            url: 'readType/add',
            data: params
        });
        return res;
    },

//阅读类型     删除
    async Delete (params) {
        const res = await network.delete({
            url: 'readType/delete/'+params,
//          data: params
        });
        return res;
    },    
//阅读类型     删除  批量
    async DeleteS (params) {
        const res = await network.delete({
            url: 'readType/delete/ids',
            data: params
        });
        return res;
    },      
//阅读类型     编辑
    async Edit (params) {
        const res = await network.put({
            url: 'readType/edit',
            data: params
        });
        return res;
    },

/***************list2***************/


//阅读书籍  表格
	async table2 (params) {
        const res = await network.post({
            url: 'readBook/list/page',
            data: params
        });
        return res;
	},
//书籍 下拉列表
    async bookSel (params) {
        const res = await network.post({
            url: 'readBook/option',
            data: params
        });
        return res;
    },
//阅读书籍  详情
	async See (id) {
        const res = await network.get({
            url: 'readBook/get/'+id,
        });
        return res;
	},
//阅读书籍    添加
    async Add2 (params) {
        const res = await network.post({
            url: 'readBook/add',
            data: params
        });
        return res;
    },

//阅读书籍     删除
    async Delete2 (params) {
        const res = await network.delete({
            url: 'readBook/delete/'+params,
//          data: params
        });
        return res;
    },    
//阅读书籍     删除   批量
    async Delete2S (params) {
        const res = await network.delete({
            url: 'readBook/delete/ids',
            data: params
        });
        return res;
    },    
//阅读书籍     编辑
    async Edit2 (params) {
        const res = await network.put({
            url: 'readBook/edit',
            data: params
        });
        return res;
    },
}

