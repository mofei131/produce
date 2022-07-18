<template>
	<div class="swiperBox">
		<div class="swiperTop">
			<div>品名</div>
			<div>交易量</div>
			<div>单价(元/公斤)</div>
			<div>交易时间</div>
		</div>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,index) in dataList" :key="index">
					<div class="slideChide">{{item.name}}</div>
					<div class="slideChide">{{item.weight}}公斤</div>
					<div class="slideChide">¥{{item.price}}</div>
					<div class="slideBlock">
						<div>{{nowDate}}</div>
						<!-- <div>{{nowTime}}</div> -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	export default{
		props:['nowDate','nowTime'],
		data(){
			return{
				dataList:[
					{name:'菜花',weight:'140',price:'6.61'},
					{name:'辣椒',weight:'124',price:'7.61'},
					{name:'韭菜',weight:'100',price:'5.37'},
					{name:'芹菜',weight:'135',price:'4.61'},
					{name:'西芹',weight:'160',price:'5.61'},
					{name:'菠菜',weight:'139',price:'3.24'},
					{name:'大白菜',weight:'163',price:'3.61'},
					{name:'娃娃菜',weight:'131',price:'8.61'},
					{name:'小白菜',weight:'125',price:'7.37'},
					{name:'圆白菜',weight:'143',price:'4.61'},
					{name:'长茄子',weight:'123',price:'5.87'},
					{name:'毛豆',weight:'112',price:'7.37'},
					{name:'西瓜',weight:'132',price:'3.61'},
					{name:'苹果',weight:'103',price:'8.61'},
					{name:'西葫芦',weight:'116',price:'4.37'},
				],
			}
		},

		mounted() {
				let swiper = new Swiper('.swiper-container', {
					direction: 'vertical',
					loop: true,
					slidesPerView:8,
					speed:1000,
					autoplay: {
						delay: 3000,
						disableOnInteraction: false, 
					},
					observer:true,
					observeParents:true,
					onSlideChangeEnd: function(swiper){
					//更新Swiper，这个方法包含了updateContainerSize，updateSlidesSize，updateProgress，updatePagination，updateClasses方法。也就是数据改变是重新初始化一次swiper；
					  swiper.update();
					//重新对需要循环的slide个数进行计算，当你改变了slidesPerView参数时需要用到，需要自动轮播的时候必须要加上；
					  swiper.reLoop();
					//重新开始自动切换；
					  swiper.startAutoplay();
					},
				});
		},
	}
</script>

<style scoped lang="scss">
	@import url("../../node_modules/swiper/dist/css/swiper.min.css");
	.swiperBox{
		width: 816px;
		height: 634px;
		background-image: url(../assets/images/swiperImage.png);
		background-size: 100%;
		background-repeat: no-repeat;
		padding: 53px 33px 41px 33px;
		box-sizing: border-box;
		margin-bottom: 15px;
		.swiperTop{
			width: 750px;
			height: 60px;
			background-color: rgba(241,241,241,0.3);
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 20px;
			color: #34DCFC;
			div{
				width: 187px;
				height: 60px;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
		.swiper-container{
			height: 480px;
			overflow: hidden;
			.swiper-wrapper{
				height: 480px;
			}
			.swiper-slide{
				width: 750px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.slideChide{
					width: 187px;
					height: 60px;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 20px;
					color: #34DCFC;
				}
				.slideBlock{
					width: 187px;
					height: 60px;
					display: flex;
					font-size: 20px;
					color: #34DCFC;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				}
			}
			.swiper-slide:nth-child(2n){
				background-color: rgba(255,255,255,0.15);
			}
		}		
	}
</style>