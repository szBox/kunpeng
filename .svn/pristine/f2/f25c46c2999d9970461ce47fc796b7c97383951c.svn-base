import network from '../../index';
//试卷管理  阅读类型 sel
export default {
	async readSel (params) {
        const res = await network.post({
            url: 'readType/list/page',
            data: params
        });
        return res;
    },
//试卷管理    table
    async paper (params) {
        const res = await network.post({
            url: 'testPaper/list/page',
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
    
//试卷管理   添加
    async Add (params) {
        const res = await network.post({
            url: 'readType/add',
            data: params
        });
        return res;
    },

//试卷管理    删除
    async Delete (params) {
        const res = await network.delete({
            url: 'readType/delete/'+params,
//          data: params
        });
        return res;
    },    
//试卷管理     编辑
    async Edit (params) {
        const res = await network.put({
            url: 'testPaper/edit',
            data: params
        });
        return res;
    },

}

