import network from '../../index';
//推荐书籍   添加
export default {
    async booksAdd (params) {
        const res = await network.post({
            url: 'recommendBook/add',
            data: params
        });
        return res;
    }
}
