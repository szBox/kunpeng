
import network from '@src/network/index';
const preUrlPath = '/right';

export default {
    async list () {
        const res = await network.get({
            url: `${preUrlPath}/list`
        });
        return res;
    },
    async getMenus () {
        const res = await network.get({
            url: `${preUrlPath}/tree`
        });
        return res;
    },
    
    async add (params) {
        const res = await network.post({
            url: `${preUrlPath}/add`,
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
}
