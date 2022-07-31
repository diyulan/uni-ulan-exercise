<template>
	<view class="banner">
		<swiper class="swiper" circular :indicator-dots="indicatorDots" :indicator-color="'#FFFFFF'"
			:indicator-active-color="'#3fc1c9'" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item>
				<view class="swiper-item uni-bg-red">
					<image src="@/static/images/index/banner.jpg" class="banner-item" mode="widthFix">
					</image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-green">
					<image src="@/static/images/index/banner.jpg" class="banner-item" mode="widthFix">
					</image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-blue">
					<image src="@/static/images/index/banner.jpg" class="banner-item" mode="widthFix">
					</image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import Request from '@/common/js/request.js'
	export default {
		name: "banner",
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 400,
				banner: []
			}
		},
		onLoad(){
			this.getBanner();
		},
		methods: {
			getBanner(){
				Request.requestAll("/program_slide/getList/", {sign:"index_banner", limit:10}).then(res=>{
					this.banner = res.data.data;
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.swiper {
		height: 320rpx;
	}

	.banner-item {
		width: 100%;
	}
</style>
