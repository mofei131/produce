<template>
	<div class="sonBox">
		<div class="chartkm">单位(公斤)</div>
		<div id="bar_chart1" style="width: 420px;height: 250px;"></div>
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
				let Chart = this.$echarts.init(document.getElementById('bar_chart1'))
				let option = {
					grid: {
						left: '15%',
						top:'10%',
						height:'200px'
					},
					xAxis: {
						type: 'value',
						boundaryGap: true,
						axisLabel: {
							textStyle:{
								fontSize: 12,
								color: '#ffffff'
							 }
							},
						splitLine :{ //网格线
							lineStyle:{
								width:0.5,
							type:'dashed' //设置网格线类型 dotted：虚线 solid:实线
							},
						},
						axisLine: {
							show: true, // 是否显示坐标轴轴线
							lineStyle: {
							type: 'solid', // 坐标轴线线的类型（'solid'，实线类型；'dashed'，虚线类型；'dotted',点状类型）
							},
						},
					},
					yAxis: {
						 type: 'category',
						 axisLabel: {
						 	textStyle:{
						 		fontSize: 12,
						 		color: '#ffffff'
						 	 }
						 	},
							boundaryGap: true,
						 data: ['土豆','哈密瓜','花菜','白萝卜','韭菜','白菜']
					},
					tooltip: {
						trigger: 'axis'
					},
					series: [
						{
							data:[1600,300,400,900,1200,3400],
							type: 'bar',
							barWidth : 18,
							// label:{
							// 	show: true,
							// },
							itemStyle:{
								normal:{
									// barBorderRadius:[0, 10, 10, 0],
										//柱体的颜色
										//右，下，左，上（1，0，0，0）表示从正右开始向左渐变
										color: new this.$echarts.graphic.LinearGradient(1,0,0,0,[
												{
														offset:0,
														color:"#01E9BD"
												},
												{
														offset:1,
														color:"#007CDE"
												}
												],false)
										}
								},
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
		height: 308px;
		background-image: url(../assets/images/barChartImage1.png);
		background-size: 100%;
		background-repeat: no-repeat;
		padding: 32px 35px 34px 23px;
		box-sizing: border-box;
		position: relative;
		margin-bottom: 18px;
	}
	.chartkm{
		font-size: 12px;
		color: #FFFFFF;
		position: absolute;
		top: 10%;
		right: 13%;
	}
</style>