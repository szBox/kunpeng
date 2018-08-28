
import network from '../index';
// 年级列表
export default {
    async gradeList (params) {
        const res = await network.get({
            url: 'grade/options',
            data: params
        });
        return res;
    },
//班级 列表
	async classList (params) {
        const res = await network.get({
            url: 'class/options',
            data: params
        });
        return res;
    },
//图表 数据
	async echartData (params) {
        const res = await network.post({
            url: 'homePage/getBookCompletionRate',
            data: params
        });
        return res;
  },
//head  阅读次数
	async num (params) {
        const res = await network.get({
            url: 'readVerify/getReadVerifyTypeCount',
            data: params
        });
        return res;
    }
	
}
