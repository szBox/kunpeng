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
    async table (params) {
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
//试卷 详情  
	async paper (id) {
        const res = await network.get({
            url: 'testPaper/get/'+id,
        });
        return res;
    },


//试卷管理    删除
    async Delete (id) {
        const res = await network.delete({
            url: 'testPaper/delete/'+id,
//          data: params
        });
        return res;
    },    
//试卷管理    删除  批量
//  async DeleteS (ids) {
//      const res = await network.delete({
//          url: 'testPaper/delete/'+ids,
////          data: params
//      });
//      return res;
//  },  
//试卷管理     编辑
    async Edit (params) {
        const res = await network.put({
            url: 'testPaper/edit',
            data: params
        });
        return res;
    },


//获取题目 信息
 	async getTitle (params) {
        const res = await network.get({
            url: 'questions/get/'+params,
        });
        return res;
    },
//题目 编辑
	async EditTitle (params) {
        const res = await network.put({
            url: 'questions/edit',
            data: params
        });
        return res;
    },
}




