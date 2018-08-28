import network from '../../index';

export default {
//1级菜单 
	async allMenu () {
        const res = await network.get({
            url: 'right/tree/simple',
        });
        return res;
    },
//选择模板管理 
	async templateMenu (type) {
        const res = await network.get({
            url: 'role/list/option',
            data:type
        });
        return res;
    },
//选择模板管理   选择--确定
	async templateSure (ids) {
        const res = await network.get({
            url: `role/right/by/rids?rids=${ids}`,
        });
        return res;
    },
/*****************权限管理*******************/  
//老师权限管理 type:1,  学生权限管理 type:2
	async tableAuthorityT (params) {
        const res = await network.post({
            url: 'teacher/list/page',
            data: params
        });
        return res;
    },
// 树 树 树    老师
    async listTreeT (params) {
        const res = await network.post({
            url: 'teacher/list/tree',
            data: params
        });
        return res;
    },

//查看  老师权限
	async teacherSee (id) {
        const res = await network.get({
            url: 'teacher/detail/'+id,
        });
        return res;
    },
//添加  老师权限
	async teacherAdd (params) {
        const res = await network.post({
            url: 'teacher/right/add',
            data: params
        });
        return res;
    },
//更新
	async AuthorityEdit (params) {
        const res = await network.put({
            url: 'identity/edit',
            data: params
        });
        return res;
    },
//取消 老师权限
	async AuthorityDeleteT (ids) {
        const res = await network.delete({
            url: 'teacher/right/cancel/ids',
            data:ids
        });
        return res;
    },





//部门   老师  下拉列表
	async depSelect (params) {
        const res = await network.get({
            url: 'department/options',
            data: params
        });
        return res;
   	}, 
   
//身份 下拉列表    老师1  学生2
	async IdentitySelect (type) {
        const res = await network.get({
            url: 'identity/list/all',
            data: type
        });
        return res;
   }, 
   
   
   /***************学生权限******************/
  	async tableAuthorityS (params) {
        const res = await network.post({
            url: 'student/list/page',
            data: params
        });
        return res;
    },
}


