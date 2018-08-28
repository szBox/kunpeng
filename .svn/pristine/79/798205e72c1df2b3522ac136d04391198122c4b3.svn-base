import network from '../../index';
//阅读档案 列表
export default {
    async adminSList (params) {
        const res = await network.post({
            url: 'readArchives/list/page',
            data: params
        });
        return res;
    }
}
