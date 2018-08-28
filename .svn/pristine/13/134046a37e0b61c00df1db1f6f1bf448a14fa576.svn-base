import network from '../../index';

export default {
/*****************角色模板*******************/  
	async tableRoles (params) {
        const res = await network.post({
            url: 'role/list',
            data: params
        });
        return res;
    },
//查看
	async roleSee (id) {
        const res = await network.get({
            url: 'role/detail/'+id,
        });
        return res;
    },
//添加
	async roleAdd (params) {
        const res = await network.post({
            url: 'role/add',
            data: params
        });
        return res;
    },
//更新
	async roleEdit (params) {
        const res = await network.put({
            url: 'role/edit',
            data: params
        });
        return res;
    },
//删除
	async roleDelete (ids) {
        const res = await network.delete({
            url: 'role/delete/'+ids,
        });
        return res;
    },

//buxiaode 
	async detailRight (id) {
        const res = await network.get({
            url: 'role/right/detail/'+id,
        });
        return res;
    },
//设置    
	async roleSet (id,params) {
        const res = await network.post({
            url:'role/right/set/'+id,
            data:params
        });
        return res;
   },
}


