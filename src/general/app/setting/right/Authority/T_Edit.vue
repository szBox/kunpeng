<template>
	<div class="add-edit-form-box">
		<el-form ref="form" label-width="100px">
			<el-form-item label="老师名称：">
				<span>{{ teacher.name }}</span>
			</el-form-item>
		</el-form>
		<div class="shuttle">
			<div class="clearfix">
				<div class="shuttle-box">
					<div class="head">
						<a href="javascript:;" @click="s_r_ALL_tree2(1)" style="margin-right:10px;">全选</a>
						<a href="javascript:;" @click="s_r_ALL_tree2(0)">取消</a>
						<a href="javascript:;" @click="dialogFormVisible = true" style="float: right">权限模板</a>
					</div>
					<el-tree :data="allMenus" show-checkbox node-key="id" ref="tree2" default-expand-all :default-checked-keys="teacherRights" :props="defaultProps" @check-change="getTreeTwoNodes">
					</el-tree>
				</div>
				<div class="right-arrow">
					<i class="el-icon-d-arrow-right" style="font-size:36px;"></i>
				</div>
				<div class="shuttle-box" style="padding: 20px;text-align: center">
					<el-checkbox-group v-model="identitySet" size="small">
						<div v-for="i in identityList" style="margin-bottom: 10px;">
							<el-checkbox :label="i.id" :key="i.id" border>{{i.name}}</el-checkbox>
						</div>
					</el-checkbox-group>
				</div>
			</div>
		</div>
		<el-row style="margin-top:20px;">
			<el-col :span="24">
				<el-button v-has="10010102" type="primary" @click="getAdd">提交</el-button>
				<el-button type="danger" @click="goBack">返回</el-button>
			</el-col>
		</el-row>

		<el-dialog title="选择权限模板" :visible.sync="dialogFormVisible">
			<el-form>
				<el-checkbox-group v-model="roleCheck" size="small">
					<el-checkbox v-for="i in roleTempList" :key="i.id" :label="i.id" border>{{i.name}}</el-checkbox>
				</el-checkbox-group>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="checkRightCodes()">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>
<script>
	import authority from '@src/network/setting/right/authority.js';
	export default {
		data() {
			return {
				teacher: {},
				identityList: [],
				allMenus: [],
				treeTwoSelectList: [],
				teacherRights: [],
				identitySet: [],
				defaultProps: {
					children: 'trees',
					label: 'name'
				},
				dialogFormVisible: false,
				roleTempList: [],
				roleCheck: []
			}
		},
		created() {
			this.initTeacher();
			this.IdentitySel();
			this.initRoleTemp();
		},
		methods: {
			/*权限模板   确定*/
			checkRightCodes() {
				let vm = this;
				if(vm.roleCheck.length === 0) {
					vm.$message.error('请至少选择一项');

					return;
				} else {
					authority.templateSure(vm.roleCheck).then(function(res) {
						if(res.data.code==0) {
							vm.teacherRights = !!res.data.data ? res.data.data : [];
							vm.$refs.tree2.setCheckedKeys(vm.teacherRights, false);
						}
					});

					vm.dialogFormVisible = false;
				}

			},
			/*权限模板 */
			initRoleTemp() {
				let vm = this;
				let params = {
					type: 1
				};
				authority.templateMenu(params).then(function(res) {
					console.log('模板', res)
					if(res.data.code == 0) {
						vm.roleTempList = res.data.data;
					}
				})
			},
			initTeacher() {
				let vm = this,
					teacherId = this.$route.params.id;
				authority.teacherSee(teacherId).then(function(res) {
					if(res.data.code == 0) {
						vm.teacher = res.data.data;
						vm.identitySet = vm.teacher.identityIds;
						vm.teacherRights = vm.teacher.rightIds;
						vm.initAllMenus();
					}
				})
			},
			/*身份列表*/
			IdentitySel() {
				let params = {
					type: 1,
				};
				authority.IdentitySelect(params).then(res => {
					console.log('身份下拉', res) //接受到的参数
					if(res.data.code === 0) {
						this.identityList = res.data.data;

					}
				})
			},
			/*所有的菜单*/
			initAllMenus() {
				let vm = this;
				authority.allMenu().then(function(res) {
					console.log('所有菜单', res)
					if(res.data.code == 0) {
						vm.allMenus = res.data.data;
					}
				})
			},
			getTreeTwoNodes() {
				let arr, vm = this,
					halfC
				halfC = this.$refs.tree2.getHalfCheckedNodes()
				arr = this.$refs.tree2.getCheckedNodes()
				if(halfC.length) {
					this.treeTwoSelectList = (halfC.concat(arr))
				} else {
					this.treeTwoSelectList = arr
				}
			},
			s_r_ALL_tree2(bl) {
				if(bl) {
					this.$refs.tree2.setCheckedNodes(this.allMenus)
				} else {
					this.$refs.tree2.setCheckedNodes([])
				}
			},
			getAdd() {
				let vm = this;
				this.getTreeTwoNodes();
				let param = {
					ids: [],
					rightIds: [],
					identityIds: vm.identitySet
				};
				param.ids.push(this.$route.params.id);
				this.treeTwoSelectList.forEach(function(i) {
					param.rightIds.push(i.id)
				});
				console.log('全部:', JSON.stringify(param));
				authority.teacherAdd(param).then(function(res) {
					if(res.data.code == 0) {
						vm.$message.success('更新成功');
						vm.$router.go(-1);
					}
				})
			},
			goBack() {
				this.$router.go(-1);
			}
		}
	}
</script>
<style lang="less" scoped>
	@color_1: #2f363f;
	@color_2: #d2d2d2;
	@background_color_1: #ebf5ff;
	.shuttle {
		display: flex;
		width: 100%;
	}
	
	.shuttle-box {
		float: left;
		font-size: 14px;
		width: 218px;
		border: solid 1px #d1d7e0;
		border-radius: 10px;
		background: #fff;
		height: 400px;
		overflow: auto;
		position: relative;
		.head {
			padding: 0 20px;
			color: @color_1;
			font-size: 14px;
			height: 40px;
			line-height: 40px;
			background-color: @background_color_1;
			border-radius: 4px 4px 0px 0px;
			border-bottom: solid 1px #d1d7e0;
			a {
				color: @color_1;
				text-decoration: none;
				&:last-child {
					margin: 0 !important;
				}
			}
		}
		p {
			margin-bottom: 5px;
			color: @color_1;
			span {
				float: right;
				color: @color_2;
			}
		}
		&:first-child {
			margin-left: 0;
		}
		li {
			line-height: 20px;
			div {
				input {
					margin-right: 5px;
				}
			}
		}
	}
	
	.shuttle-remove {
		cursor: pointer;
	}
	
	.right-arrow {
		position: relative;
		float: left;
		margin: 0 10px;
		margin-top: 200px;
		top: -18px;
		width: 90px;
		text-align: center;
	}
</style>