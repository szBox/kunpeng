import network from '../index';
//统计分析 -记录    表格
export default {
    async table (params) {
        const res = await network.post({
            url: 'challenge/getChallengeRightRecord',
            data: params
        });
        return res;
    },

//统计分析-答题统计  表格
    async table2 (params) {
        const res = await network.post({
            url: 'answer/getAnswerCount',
            data: params
        });
        return res;
    },
//		答题统计  -- 个人详情
    async table2Info (params) {
        const res = await network.post({
            url: 'readArchives/list/personReadPage',
            data: params
        });
        return res;
    },


    
//阅读统计 排行榜-- 表格
    async PhpTable (params) {
        const res = await network.post({
            url: 'ranking/getReadingStatistics',
            data: params
        });
        return res;
    },
    
    
 
 /************list2*************/
    
//统计分析 -阅读档案  表格
    async table3 (params) {
        const res = await network.post({
            url: 'readArchives/list/page',
            data: params
        });
        return res;
    },
//统计分析 -阅读档案  个人详情
    async table3Info (params) {
        const res = await network.post({
            url: 'readArchives/list/personReadPage',
            data: params
        });
        return res;
    },
    //阅读评价    添加 
    async speakAdd (params) {
        const res = await network.post({
            url: 'readEvaluate/add',
            data: params
        });
        return res;
    },
	//阅读评价    编辑 
    async speakEdit (params) {
        const res = await network.put({
            url: 'readEvaluate/edit',
            data: params
        });
        return res;
    },
    
    
    
    
    
    
    
    
    //试卷管理    list
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
            url: 'recommendBook/list/page',
            data: params
        });
        return res;
    },
    
    
}

