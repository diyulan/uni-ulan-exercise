<template>
	<view class="page">
		<view class="header">
			<view class="header-img">
				<image class="header-img-size" src="@/static/images/me/header.jpg" mode=""></image>
			</view>
			<text class="nickname">幽蓝</text>
		</view>

		<view class="cells">
			<navigator url="/pages/web/web?url=https://diyulan.me" class="cell">
				<uni-icons class="header-icon" type="info" size="30" color="#5E6D82"></uni-icons>
				<text class="title">关于我们</text>
			</navigator>
			<view class="cell">
				<uni-icons class="header-icon" type="person-filled" size="30" color="#5E6D82"></uni-icons>
				<text class="title">客服帮助</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.page {
		color: $ulan-text-color-deep-grey;
		font-size: $ulan-font-size-lg;
	}

	.header {
		@include ulan-flex(column);
		background-color: #3fc1c9;
		@include ulan-padding(50rpx, 0, 80rpx, 0);
	}

	.header-img {
		width: 120rpx;
		height: 120rpx;
		border-radius: 50px;
	}

	.header-img-size {
		@include ulan-container-size(120rpx, 120rpx);
		border-radius: 50px;
		/* #ifdef MP-ALIPAY */
		background-size: cover;
		/* #endif */
	}

	.nickname {
		color: #FFF;
		font-size: $ulan-font-size-base*1.2;
		margin-top: 20rpx;
	}

	.cells {}

	.cell {
		@include ulan-flex(row, center, flex-start);
		height: 90rpx;
		padding-left: 30rpx;
		border-bottom: 2rpx $ulan-border-color-white-smoke solid;
	}

	.header-icon {
		margin-right: 20rpx;
		font-size: 46rpx;
	}
</style>
