<template>
	<view class="index-block">
		<view class="index-block-title">
			<view class="index-title-left">相册展示</view>
			<view class="index-title-right">
				<text></text>
			</view>
		</view>
		<scroll-view scroll-x>
			<view class="photo-wrap">
				<view class="photo-item">
					<image class="photo-size" src="@/static/images/index/photo-demo.jpg"></image>
					<text class="photo-title">相册展示</text>
				</view>
				<view class="photo-item">
					<image class="photo-size" src="@/static/images/index/photo-demo.jpg"></image>
					<text class="photo-title">相册展示</text>
				</view>
				<view class="photo-item">
					<image class="photo-size" src="@/static/images/index/photo-demo.jpg"></image>
					<text class="photo-title">相册展示</text>
				</view>
				<view class="photo-item">
					<image class="photo-size" src="@/static/images/index/photo-demo.jpg"></image>
					<text class="photo-title">相册展示</text>
				</view>
			</view>
		</scroll-view>
	</view>

</template>

<script>
	export default {
		name: "photo-exhibit",
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss" scoped>
	.photo-wrap {
		display: inline-flex;
		padding: 0 20rpx 20rpx 20rpx;

	}

	.photo-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 340rpx;
		margin: 0 10rpx;
	}

	.photo-size {
		width: 340rpx;
		height: 270rpx;
	}

	.photo-title {
		line-height: 60rpx;
	}
</style>
