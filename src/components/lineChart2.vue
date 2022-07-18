<template>
	<div class="sonBox">
		<div class="chartkm">单位(公斤)</div>
		<div id="line_chart2" style="width: 420px;height: 250px;"></div>
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
				let Chart = this.$echarts.init(document.getElementById('line_chart2'))
				let option = {
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						type:'plain',
						right:'20%',
						itemHeight:9,
						itemWidth:9,
						textStyle:{
									fontSize: 10,
									color: '#2AAEF2'
						 },
						icon: 'rect',
						data: ['土豆', '白菜', '菠菜']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						height:'85%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: true,
						axisLabel: {
							textStyle:{
								fontSize: 12,
								color: '#ffffff'
							 }
							},
						data: ['1日', '5日', '10日', '15日', '20日', '25日', '30日']
					},
					yAxis: {
						type: 'value',
						axisLabel: {
							textStyle:{
								fontSize: 12,
								color: '#ffffff'
							 }
						},
						splitLine: {
							show: true,
							lineStyle:{
									type:'dashed'
							}
						}
					},
					series: [
						{
							name: '土豆',
							type: 'line',
							stack: 'Total',
							smooth:true,
							itemStyle : {  
								 normal : {  
									 color:'#84EB28',  
									 lineStyle:{  
											 color:'#84EB28'  
									 }  
								 }  
							 },  
							data: [120, 132, 101, 134, 90, 230, 210]
						},
						{
							name: '白菜',
							type: 'line',
							stack: 'Total',
							smooth:true,
							itemStyle : {
								 normal : {  
									 color:'#EA5514',  
									 lineStyle:{  
											 color:'#EA5514'  
									 }  
								 }  
							 },  
							data: [220, 182, 191, 234, 290, 330, 310]
						},
						{
							name: '菠菜',
							type: 'line',
							stack: 'Total',
							smooth:true,
							itemStyle : {
								 normal : {  
									 color:'#00B6CE',  
									 lineStyle:{  
											 color:'#00B6CE'  
									 }  
								 }  
							 },  
							data: [150, 232, 201, 154, 190, 330, 410]
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
		background-image: url(../assets/images/lineChartImage2.png);
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