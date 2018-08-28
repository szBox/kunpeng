import network from '../../index';
//推荐管理  列表
export default {
    async booksAdmin (params) {
        const res = await network.post({
            url: 'recommendBook/list/page',
            data: params
        });
        return res;
    }
}
