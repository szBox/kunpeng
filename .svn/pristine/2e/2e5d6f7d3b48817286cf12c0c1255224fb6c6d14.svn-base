import network from '../index';
//排行榜  列表
export default {
    async PhpList (params) {
        const res = await network.post({
            url: 'ranking/list/page',
            data: params
        });
        return res;
    }
}
