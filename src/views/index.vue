<template>
  <div class="box" :style="{'height':(this.$store.state.windowHeight+15)+'px'}">
	<sacle-box>
		<div class="dataTop">
			<img  src="../assets/images/topImage.png"/>
			<div class="dateFlex">
				<div>{{ nowDate }}</div>
				<div>{{ nowWeek }}</div>
				<div>{{ nowTime }}</div>
			</div>
		</div>
		<div class="dataFlex">
			<div class="dataLift">
				<line-chart1></line-chart1>
				<bar-chart1></bar-chart1>
				<pie-chart1></pie-chart1>
			</div>
			<div class="dataCenter">
				<swiper-table :nowDate="nowDate" :nowTime="nowTime"></swiper-table>
				<price-index></price-index>
			</div>
			<div class="dataRight">
				<line-chart2></line-chart2>
				<bar-chart2></bar-chart2>
				<pie-chart2></pie-chart2>
			</div>
		</div>
	</sacle-box>
  </div>
</template>

<script>
import sacleBox from '../components/SacleBox.vue'
import lineChart1 from '../components/lineChart1.vue'
import barChart1 from '../components/barChart1.vue'
import pieChart1 from '../components/pieChart1.vue'
import lineChart2 from '../components/lineChart2.vue'
import barChart2 from '../components/barChart2.vue'
import pieChart2 from '../components/pieChart2.vue'
import swiperTable from '../components/swiperTable.vue'
import priceIndex from '../components/priceIndex.vue'
export default {
	components:{
		sacleBox,
		lineChart1,
		barChart1,
		pieChart1,
		lineChart2,
		barChart2,
		pieChart2,
		swiperTable,
		priceIndex
	},
  data(){
	  return{
			nowDate:'',//日期
			nowTime:'',//时间
			nowWeek:'',//星期
			timer:'',//计时器
	  }
  },
  created() {
  	this.$store.state.windowHeight = document.documentElement.clientHeight
		clearInterval(this.timer);
		this.timer = setInterval(() => {
			this.setNowTimes()
		}, 1000)
  },
	mounted() {
		window.addEventListener("keydown", this.KeyDown, true); 
	},
	destroyed() {
		clearInterval(this.timer);
	},
	methods:{
		KeyDown(event) {
			let that = this
			// console.log(event.code)
			if(event.code == 'F11'){
				location.reload()
			}
		 },
		setNowTimes() {
			let myDate = new Date()
			let wk = myDate.getDay()
			let yy = String(myDate.getFullYear())
			let mm = myDate.getMonth() + 1
			let dd = String(myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate())
			let hou = String(myDate.getHours() < 10 ? '0' + myDate.getHours() : myDate.getHours())
			let min = String(myDate.getMinutes() < 10 ? '0' + myDate.getMinutes() : myDate.getMinutes())
			let sec = String(myDate.getSeconds() < 10 ? '0' + myDate.getSeconds() : myDate.getSeconds())
			let weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
			let week = weeks[wk]
			this.nowDate = yy + '-' + mm + '-' + dd
			this.nowTime = hou + ':' + min + ':' + sec
			this.nowWeek = week
		}
	}
}
</script>
<style scoped lang="scss">
	.box{
		background-image: url(../assets/images/backgroundImage.png);
		background-size: 100%;
		padding: 0;
		margin: 0;
	}
	.dataTop{
		margin-bottom: 14px;
		width: 1920px;
		position: relative;
		img{
			width: 1444px;
			height: 95px;
			margin: auto;
			display: block;
		}
		.dateFlex{
			width: 262px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 18px;
			color: #2AA7D3;
			position: absolute;
			top: 27px;
			right: 27px;
		}
	}
	.dataFlex{
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		padding: 0 31px 30px 32px;
		box-sizing: border-box;
		.dataLift{
			width: 487px;
		}
		.dataRight{
			width: 487px;
		}
		.dataCenter{
			width: 816px;
		}
	}
</style>
