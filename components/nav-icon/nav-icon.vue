<template>
	<view class="nav-wrap">
		<view class="nav-item">
			<image class="nav-icon" src="@/static/images/index/about.png"></image>
			<text>公司简介</text>
		</view>
		<view class="nav-item">
			<image class="nav-icon nav-case-size" src="@/static/images/index/case.png"></image>
			<text>公司案例</text>
		</view>
		<view class="nav-item">
			<image class="nav-icon" src="@/static/images/index/news.png"></image>
			<text>新闻中心</text>
		</view>
		<view class="nav-item">
			<image class="nav-icon" src="@/static/images/index/service.png"></image>
			<text>服务范围</text>
		</view>
		<view class="nav-item">
			<image class="nav-icon" src="@/static/images/index/photo.png"></image>
			<text>相册展示</text>
		</view>
		<view class="nav-item">
			<image class="nav-icon nav-video-size" src="@/static/images/index/video.png"></image>
			<text>视频展示</text>
		</view>
		<view class="nav-item">
			<image class="nav-icon" src="@/static/images/index/message.png"></image>
			<text>在线留言</text>
		</view>
		<view class="nav-item">
			<image class="nav-icon nav-phone-size" src="@/static/images/index/telphone.png"></image>
			<text>电话咨询</text>
		</view>
	</view>
</template>

<script>
	import Request from '@/common/js/request.js'
	export default {
		name: "nav-icon",
		data() {
			return {
				navs: [],
			}
		},
		onLoad() {
			Request.requestAll("/program_column/getNav/").then(res=>{
				this.navs = res.data.data;
			}).catch(err=>{
				console.log("err:::", err);
			})
		}
	}
</script>

<style lang="scss" scoped>
	.nav-wrap {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 0 20rpx;
		background-color: $ulan-bg-color-white;
	}

	.nav-item {
		display: flex;
		flex-direction: column;
		justify-items: center;
		align-items: center;
		width: 160rpx;
		margin: 20rpx 0;
	}

	.nav-icon {
		width: 100rpx;
		height: 100rpx;
		margin-bottom: 10rpx;
	}

	// 修改部分图标太大问题
	.nav-case-size {
		box-sizing: border-box;
		padding: 2rpx 2rpx;
	}

	// 修改部分图标太大问题
	.nav-video-size,
	.nav-phone-size {
		box-sizing: border-box;
		padding: 3rpx 3rpx;
	}
</style>
