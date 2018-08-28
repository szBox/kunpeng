import network from '../../index';

export default {
//年级管理
	async tableGrade (params) {
        const res = await network.post({
            url: 'grade/list/page',
            data: params
        });
        return res;
    },
//年级管理   查看
	async GradeSee (id) {
        const res = await network.get({
            url: 'grade/get/'+id,
        });
        return res;
    },
//年级管理   添加
	async GradeAdd (params) {
        const res = await network.post({
            url: 'grade/add',
            data: params
        });
        return res;
    },
//年级管理  更新
	async GradeEdit (params) {
        const res = await network.put({
            url: 'grade/edit',
            data: params
        });
        return res;
    },
//年级管理  删除
	async GradeDelete (id) {
        const res = await network.delete({
            url: 'grade/delete/'+id,
        });
        return res;
    },
//年级管理  删除  批量
	async GradeDeleteS (params) {
        const res = await network.delete({
            url: 'grade/delete/ids',
            data: params
        });
        return res;
    },
    
  /*****************班级*******************/  
//班级管理
	async tableClass (params) {
        const res = await network.post({
            url: 'class/list/page',
            data: params
        });
        return res;
   },
//班级管理   查看
	async ClassSee (id) {
        const res = await network.get({
            url: 'class/get/'+id,
        });
        return res;
    },
//班级管理  详情
    async ClassSee (id) {
        const res = await network.get({
            url: 'class/get/'+id,
        });
        return res;
    },
//班级管理  添加
    async ClassAdd (params) {
        const res = await network.post({
            url: 'class/add',
             data: params
        });
        return res;
    },   
//班级管理  更新
    async ClassEdit (params) {
        const res = await network.put({
            url: 'class/edit',
            data: params
        });
        return res;
    },     
    
//班级管理    删除
    async ClassDelete (id) {
        const res = await network.delete({
            url: 'class/delete/'+id,
        });
        return res;
    },
//班级管理    删除   批量
    async ClassDeleteS (params) {
        const res = await network.delete({
            url: 'class/delete/ids',
            data: params
        });
        return res;
    }, 
/********************部门*******************/    
//部门管理
	async tableDep (params) {
        const res = await network.post({
            url: 'department/list/page',
            data: params
        });
        return res;
    },
//部门管理   查看
	async DepSee (id) {
        const res = await network.get({
            url: 'department/get/'+id,
        });
        return res;
    },
//部门管理   添加
	async DepAdd (params) {
        const res = await network.post({
            url: 'department/add',
            data: params
        });
        return res;
    },
//部门管理  更新
	async DepEdit (params) {
        const res = await network.put({
            url: 'department/edit',
            data: params
        });
        return res;
    },
//部门管理  删除
	async DepDelete (id) {
        const res = await network.delete({
            url: 'department/delete/'+id,
        });
        return res;
    },
//部门管理  删除  批量
	async DepDeleteS (params) {
        const res = await network.delete({
            url: 'department/delete/ids',
            data: params
        });
        return res;
    }, 

 
////班级   下拉列表
//	async classSelect (params) {
//      const res = await network.get({
//          url: 'class/options',
//          data: params
//      });
//      return res;
//  },   
////部门   下拉列表
//	async depSelect (params) {
//      const res = await network.get({
//          url: 'department/options',
//          data: params
//      });
//      return res;
// },   
//  老师    下拉列表    
	async TeacherSelect (params) {
        const res = await network.get({
            url: 'teacher/options',
            data: params
        });
        return res;
   },
}


