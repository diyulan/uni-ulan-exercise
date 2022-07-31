<template>
	<view class="page">
		<view class="banner">
			<image class="banner-size" src="../../static/images/connect/banner.jpg" mode="widthFix"></image>
		</view>
		<view class="connect-wrap">
			<!-- 电话 -->
			<view class="connect-item">
				<view class="connect-left">
					<uni-icons class="connect-icon" type="phone-filled" size="24" color="#5E6D82"></uni-icons>
					<text>12345678910</text>
				</view>
				<text class="connect-right-color" @tap="callPhone">拨打电话</text>
			</view>
			<!-- qq -->
			<view class="connect-item">
				<view class="connect-left">
					<uni-icons class="connect-icon" type="qq" size="24" color="#5E6D82"></uni-icons>
					<text>123456</text>
				</view>
			</view>
			<!-- 邮箱 -->
			<view class="connect-item">
				<view class="connect-left">
					<uni-icons class="connect-icon" type="email-filled" size="24" color="#5E6D82"></uni-icons>
					<text>123456@qq.com</text>
				</view>
			</view>
			<!-- 位置 -->
			<view class="connect-item">
				<view class="connect-left">
					<uni-icons class="connect-icon" type="location-filled" size="24" color="#5E6D82"></uni-icons>
					<text>广东深圳</text>
				</view>
				<text>地图</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			// 点击拨打电话
			callPhone() {
				uni.makePhoneCall({
					phoneNumber: "12345678910"
				})
			}
		}
	}
</script>

<style lang="scss">
	.page {
		background-color: $ulan-bg-color-white-smoke;
		color: $ulan-text-color-deep-grey;
		font-size: $ulan-font-size-lg;
		height: 100vh;
	}

	.banner {
		width: 750rpx;
	}

	.banner-size {
		width: 750rpx;
	}

	.connect-wrap {
		padding: 20rpx;
	}

	.connect-item {
		@include ulan-flex;
		height: 120rpx;
		margin-bottom: 20rpx;
		padding: 30rpx 30rpx;
		background-color: $ulan-text-color-white;
	}

	.connect-left {
		@include ulan-flex;
		// margin-left: 30rpx;
	}

	.connect-icon {
		margin-right: 20rpx;
	}

	.connect-right-color {
		// margin-right: 30rpx;
		color: #3490de;
	}
</style>
