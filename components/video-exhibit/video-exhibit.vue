<template>
	<view class="index-block">
		<view class="index-block-title">
			<view class="index-title-left">视频展示</view>
			<view class="index-title-right">
				<text></text>
			</view>
		</view>
		<view class="index-content">
			<view class="video-item">
				<video id="myVideo" class="video-size"
					src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4"
					enable-danmu danmu-btn controls></video>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "video-exhibit",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.video-size {
		width: 690rpx;
	}
</style>
