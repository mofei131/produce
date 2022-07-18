<template>
	<div class="priceBox">
		<div class="priceFlex">
			<div class="changeBox" v-for="(item,index) in changeList" :key="index">
				<div class="left">
					<div class="name">{{item.name}}</div>
					<div class="price">¥{{item.price}}(元/公斤)</div>
				</div>
				<div class="right">
					<img :src="item.status == '1'?require('../assets/images/topIcon.png'):require('../assets/images/downIcon.png')" alt="">
					<div :class="item.status == '1'?'status':'status2'">{{item.index}}%</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				changeList:[
					{name:'大白菜',price:'3.61',index:'10.61',status:'1'},
					{name:'娃娃菜',price:'8.61',index:'5.28',status:'2'},
					{name:'小白菜',price:'7.37',index:'5.23',status:'1'},
					{name:'园白菜',price:'4.61',index:'10.67',status:'2'},
					{name:'菠菜',price:'3.24',index:'7.92',status:'2'},
					{name:'韭菜',price:'5.37',index:'2.36',status:'1'}
				]
			}
		}
	}
</script>

<style scoped lang="scss">
	.priceBox{
		width: 815px;
		height: 293px;
		background-image: url(../assets/images/priceImage.png);
		background-repeat: no-repeat;
		background-size: 100%;
		padding: 47px 50px 24px 47px;
		box-sizing: border-box;
		.priceFlex{
			display: flex;
			align-items: center;
			justify-content: space-between;
			flex-wrap: wrap;
			.changeBox{
				display: flex;
				align-items: center;
				justify-content: space-around;
				width: 226px;
				height: 100px;
				margin-bottom: 20px;
				background-color: #0E368E;
				.name{
					font-size: 18px;
					color: #D4EAF6;
					margin-bottom: 10px;
				}
				.price{
					font-size: 16px;
					color: #F8B62D;
				}
				img{
					width: 37px;
					height: 25px;
					margin-bottom: 10px;
				}
				.status{
					font-size: 16px;
					color: #FF0000;
				}
				.status2{
					font-size: 16px;
					color: #2DF858;
				}
			}
		}
	}
</style>