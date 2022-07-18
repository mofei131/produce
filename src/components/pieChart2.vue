<template>
	<div class="sonBox">
		<!-- <div class="chartkm">单位(公斤)</div> -->
		<div id="pie_chart2" style="width: 420px;height: 180px;"></div>
		<div class="zbFont">占比分析</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		mounted() {
			this.drawChart()
		},
		methods:{
			drawChart(){
				let Chart = this.$echarts.init(document.getElementById('pie_chart2'))
				let option = {
					tooltip: {
						trigger: 'item'
					},
					legend: {
						orient: 'vertical',
						align:'left',
						top: '20%',
						left: 'right',
						itemHeight:10,
						itemWidth:10,
						textStyle:{
									fontSize: 14,
									color: '#ffffff'
						 },
						icon: "circle",
					},
					series: [
						{
							type: 'pie',
							radius: ['50%', '80%'],
							right:'30%',
							avoidLabelOverlap: false,
							itemStyle: {
								borderRadius: 2,
								borderColor: '#0E368E',
								borderWidth: 1
							},
							label: {
								normal: {
										show: true,             // 是否显示标签[ default: false ]
										position: 'outside',    // 标签的位置。'outside'饼图扇区外侧，通过视觉引导线连到相应的扇区。'inside','inner' 同 'inside',饼图扇区内部。'center'在饼图中心位置。
										formatter: '{d}%',  // 标签内容
										textStyle: {
											 color: '#ffffff',	// 提示文字颜色
											 fontSize: 14		// 提示文字大小
										 }
								}
							},
							emphasis: {
								label: {
									show: true,
									fontSize: '10',
									fontWeight: 'bold'
								}
							},
							labelLine: {                 // 标签的视觉引导线样式,在 label 位置 设置为'outside'的时候会显示视觉引导线。
								normal: {
									show: true,             // 是否显示视觉引导线。
									length: 15,             // 在 label 位置 设置为'outside'的时候会显示视觉引导线。
									length2: 10,            // 视觉引导项第二段的长度。
								}
							},
							data: [
								{ 
									value: 1048,
									name: '蔬菜类 88万公斤',
									itemStyle : {
										 normal : {  
											 color:'#F8B62D',  
											 lineStyle:{  
													 color:'#F8B62D'  
											 }  
										 }  
									 }, 
								},
								{ 
									value: 735,
									name: '水果类 70万公斤',
									itemStyle : {
										 normal : {  
											 color:'#F53F8C',  
											 lineStyle:{  
													 color:'#F53F8C'  
											 }  
										 }  
									 }, 
								},
								{ 
									value: 580,
									name: '粮油类 20万公斤',
									itemStyle : {
										 normal : {  
											 color:'#52FFFF',  
											 lineStyle:{  
													 color:'#52FFFF'  
											 }  
										 }  
									 },
								},
								{ 
									value: 484,
									name: '肉类 40万公斤',
									itemStyle : {
										 normal : {  
											 color:'#28B1FF',  
											 lineStyle:{  
													 color:'#28B1FF'  
											 }  
										 }  
									 },
								},
								{ 
									value: 300,
									name: '蛋类 10万公斤',
									itemStyle : {
										 normal : {  
											 color:'#3BEF13',  
											 lineStyle:{  
													 color:'#3BEF13'  
											 }  
										 }  
									 },
								}
							]
						}
					]
				};
				Chart.setOption(option)
			}
		}
	}
</script>

<style scoped lang="scss">
	.sonBox{
		width: 487px;
		height: 288px;
		background-image: url(../assets/images/pieChartImage2.png);
		background-size: 100%;
		background-repeat: no-repeat;
		padding: 62px 35px 34px 23px;
		box-sizing: border-box;
		position: relative;
	}
	.chartkm{
		font-size: 12px;
		color: #FFFFFF;
		position: absolute;
		top: 10%;
		right: 13%;
	}
	.zbFont{
		position: absolute;
		width: 36px;
		height: 40px;
		font-size: 18px;
		color: #FFFFFF;
		top: 44%;
		left: 31%;
	}
</style>