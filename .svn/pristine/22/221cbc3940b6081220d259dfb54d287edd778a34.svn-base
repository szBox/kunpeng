import network from '@src/network/index';
const preUrlPath = '/answerType';   // 接口所在模块

export default {
    async list (params) {
        const res = await network.post({
            url: `${preUrlPath}/list/page`,   // 接口地址
            data: params
        });
        return res;
    },
    async add (params) {
        const res = await network.post({
            url: `${preUrlPath}/add`,   // 接口地址
            data: params
        });
        return res;
    },
    async del (id) {
        const res = await network.delete({
            url: `${preUrlPath}/delete/${id}`
        });
        return res;
    },
}
