import network from '@src/network/index';
const preUrlPath = '/readVerify';   // 接口所在模块

export default {
    async list (params) {
        const res = await network.post({
            url: `${preUrlPath}/list/page`,   // 接口地址
            data: params
        });
        return res;
    },
    async edit (params) {
        const res = await network.put({
            url: `${preUrlPath}/edit`,
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
    async dels (ids) {
        const res = await network.delete({
            url: `${preUrlPath}/deleteByIds`,
            data: ids
        });
        return res;
    },
    async get (id) {
        const res = await network.get({
            url: `${preUrlPath}/get/${id}`
        });
        return res;
    },
}
