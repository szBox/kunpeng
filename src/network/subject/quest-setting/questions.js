import network from '@src/network/index';
const preUrlPath = '/questions';   // 接口所在模块

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
    async see (id) {
        const res = await network.get({
            url: `${preUrlPath}/get/${id}`,   // 接口地址
        });
        return res;
    },
    async edit (params) {
        const res = await network.put({
            url: `${preUrlPath}/edit`,   // 接口地址
            data:params
        });
        return res;
    },
    async del (id) {
        const res = await network.delete({
            url: `${preUrlPath}/delete/${id}`
        });
        return res;
    },
    async dels (ids) {
        const res = await network.delete({
            url: `${preUrlPath}/delete/ids`,
            data: ids
        });
        return res;
    },
}
