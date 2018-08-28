//柱状图
 export default{
 	zhu (dataArr1,dataArr2) {
 		return{
				color: ['#F87D51', '#2C8CF0'],
				title: {
					text: '完成率',
					padding: [10, 20],
					textStyle: {
						//文字颜色
						color: '#318EEF',
						//字体风格,'normal','italic','oblique'
						fontStyle: 'normal',
						//字体系列
						fontFamily: 'sans-serif',
						//字体大小
						fontSize: 14,
					}
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow'
					},
					//					formatter: function(value){
					//						var res='';
					//		               console.log(value)
					//		                for(var i=0; i<value.length; i++){
					//		                	res+=value[i].seriesName+'：'+value[i].data+'%</br>'
					//		                }
					//            			return '完成率'+'<br>'+ res
					//         			}

				},
				legend: {
					data: ['必读书籍完成率', '选读书籍完成率'],
					right: 0,
					orient: 'vertical',

				},
				calculable: true,
				xAxis: [{
					offset: 15,
					type: 'category',
					splitLine: {
						show: false, //去掉横线

					},
					axisTick: {
						show: false
					},
					axisLine: {
						lineStyle: {
							//去掉X线条
							color: '#555',
							width: 0, //这里是为了突出显示加上的
						}
					},
					data: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级']
				}],
				yAxis: [{
					type: 'value',
					splitLine: {
						show: true, //去掉横线
					},
					axisLabel: {
						formatter: '{value} %'
					},
					max: 100,
					splitNumber: 5,
					axisTick: {
						show: false //去掉坐标刻度
					},
					axisLine: {
						lineStyle: {
							//去掉Y线条
							color: '#555',
							width: 0, //这里是为了突出显示加上的
						}
					},

				}],
				series: [
					{
						name: '必读书籍完成率',
						type: 'bar',
						barGap: 0,
						barWidth: 20, //柱图宽度
//						data: [50, 70, 90, 40, 85, 95],
						data:dataArr1,
						itemStyle: {
							normal: {
								barBorderRadius: [10, 10, 0, 0],
								label: {
									show: true,
									position: 'top',
									textStyle: {
										color: '#667280',
										fontSize: '10'
									},
									formatter: function(value) {
										return value.data + '%'
									}

								}

							}
						},

					},
					{
						name: '选读书籍完成率',
						type: 'bar',
						barWidth: 20, //柱图宽度
//						data: [30, 50, 50, 60, 70, 80],
						data:dataArr2,
						itemStyle: {
							normal: {
								barBorderRadius: [10, 10, 0, 0],
								label: {
									show: true,
									position: 'top',
									textStyle: {
										color: '#667280',
										fontSize: '10'
									},
									formatter: function(value) {
										return value.data + '%'
									}

								}

							}

						},

					},
				],

			
 		}

 	},
 	
 	zhexian (dataArr1,dataArr2){
 		return {
 			title: {
					text: '答题次数统计'
				},

				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'line',
						label: {
							backgroundColor: 'red'
						}
					}
				},
				legend: {
					data: ['必读答题次数', '选读答题次数'],
					right: 0,
					orient: 'vertical',
				},
				toolbox: {
					feature: {
						saveAsImage: {}
					},
					show: false
				},
				
				xAxis: [{
					offset: 15,
					type: 'category',
					boundaryGap: false,
					data: ['', '一年级', '二年级', '三年级', '四年级', '五年级', '六年级'],
					axisLine: {
						lineStyle: {
							//去掉X线条
							color: '#555',
							width: 0, //这里是为了突出显示加上的
						}
					},
				}],
				yAxis: [{
						splitNumber: 5,
						type: 'value',
						axisLine: {
							lineStyle: {
								//去掉Y线条
								color: '#555',
								width: 0, //这里是为了突出显示加上的
							}
						},
					},

				],
				series: [{

						name: '必读答题次数',
						type: 'line',
						stack: '总量',
						areaStyle: {
							normal: {}
						},
						//  color:['#CED0DD'],//对应上面data的背景色
//						data: [0, 120, 132, 101, 134, 90, 230, 210],
						data: dataArr1,
						itemStyle: {

							normal: {
								//color: 'red',
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: '#bac9f2'
								}, {
									offset: 1,
									color: '#bac9f2'
								}]),
								label: {
									show: true,
									position: 'top',
									textStyle: {
										color: '#667280',
										fontSize: '10'
									},
									formatter: function(value) {
										return value.data
									}

								}

							}

						},
					},
					{
						name: '选读答题次数',
						type: 'line',
						stack: '总量',
						areaStyle: {
							normal: {}
						},
						color: ['#F9CBBC'], //对应上面data的背景色
//						data: [0, 220, 182, 191, 234, 290, 330, 310],
						data:dataArr2,
						itemStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: '#f5b29c'
								}, {
									offset: 1,
									color: '#f5b29c'
								}]),

								label: {
									show: true,
									position: 'top',
									textStyle: {
										color: '#667280',
										fontSize: '10'
									},
									formatter: function(value) {
										return value.data
									}

								}

							}

						},
					},

				]

			
 		}
 	}
 }	
