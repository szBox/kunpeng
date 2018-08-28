import network from '../../index';

export default {
/*****************身份管理*******************/  
//老师管理 type:1,  学生管理 type:2
	async tableIdentity (params) {
        const res = await network.post({
            url: 'identity/list',
            data: params
        });
        return res;
    },
//查看
	async IdentitySee (id) {
        const res = await network.get({
            url: 'identity/detail/'+id,
        });
        return res;
    },
//添加
	async IdentityAdd (params) {
        const res = await network.post({
            url: 'identity/add',
            data: params
        });
        return res;
    },
//更新
	async IdentityEdit (params) {
        const res = await network.put({
            url: 'identity/edit',
            data: params
        });
        return res;
    },
//删除
	async IdentityDelete (id) {
        const res = await network.delete({
            url: 'identity/delete/'+id,
        });
        return res;
    },
//删除  批量
	async IdentityDeleteS (params) {
        const res = await network.delete({
            url: 'identity/delete/ids',
            data: params
        });
        return res;
   },

}


