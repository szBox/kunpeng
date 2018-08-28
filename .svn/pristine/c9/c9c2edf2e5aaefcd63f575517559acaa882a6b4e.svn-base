import network from '../../index';
//答题统计  列表
export default {
    async answerList (params) {
        const res = await network.post({
            url: 'answer/getAnswerCount',
            data: params
        });
        return res;
    }
}
