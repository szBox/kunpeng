import network from '../../index';

export default {
//用户管理  老师信息管理
	async tableTeacher (params) {
        const res = await network.post({
            url: 'teacher/list/page',
            data: params
        });
        return res;
    },
//老师信息  详情
	async TeacherSee (id) {
        const res = await network.get({
            url: 'teacher/get/'+id,
        });
        return res;
    },
//老师信息  添加
	async TeacherAdd (params) {
        const res = await network.post({
            url: 'teacher/add',
            data: params
        });
        return res;
    },
//老师信息  更新
	async TeacherEdit (params) {
        const res = await network.put({
            url: 'teacher/edit',
            data: params
        });
        return res;
    },
//老师信息  删除
	async TeacherDelete (id) {
        const res = await network.delete({
            url: 'teacher/delete/'+id,
        });
        return res;
    },
//老师信息  删除  批量
	async TeacherDeleteS (params) {
        const res = await network.delete({
            url: 'teacher/delete/ids',
            data: params
        });
        return res;
    },
//用户管理  学生信息管理
	async tableStudent (params) {
        const res = await network.post({
            url: 'student/list/page',
            data: params
        });
        return res;
   },
//学生信息  详情
    async StudentSee (id) {
        const res = await network.get({
            url: 'student/get/'+id,
        });
        return res;
    },
//学生信息  添加
    async StudentAdd (params) {
        const res = await network.post({
            url: 'student/add',
             data: params
        });
        return res;
    },   
//学生信息  更新
    async StudentEdit (params) {
        const res = await network.put({
            url: 'student/edit',
            data: params
        });
        return res;
    },     
    
//学生信息    删除
    async StudentDelete (id) {
        const res = await network.delete({
            url: 'student/delete/'+id,
        });
        return res;
    },
//学生信息    删除   批量
    async StudentDeleteS (params) {
        const res = await network.delete({
            url: 'student/delete/ids',
            data: params
        });
        return res;
    },    
//班级   下拉列表
	async classSelect (params) {
        const res = await network.get({
            url: 'class/options',
            data: params
        });
        return res;
    },   
//部门   下拉列表
	async depSelect (params) {
        const res = await network.get({
            url: 'department/options',
            data: params
        });
        return res;
   },   
    
}


