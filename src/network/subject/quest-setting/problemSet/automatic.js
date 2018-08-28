
import network from '@src/network/index';
const preUrlPath = '/testPaper';   // 接口所在模块

export default {
    async add (params) {
        const res = await network.post({
            url: `${preUrlPath}/add`,
            data: params
        });
        return res;
    },
    async readValue (params) {
        const res = await network.post({
            url: 'readValue/option',
            data: params
        });
        return res;
    }
}

