<template>
	<view class="index-block">
		<view class="index-block-title">
			<text class="index-title-left">新闻中心</text>
			<view class="index-title-right"></view>
		</view>
		<view class="index-content">
			<view class="news-item">
				<view class="news-thumb">
					<image class="news-img" src="@/static/images/index/news-demo.jpg"></image>
				</view>
				<view class="news-info">
					<text class="news-title">测试新闻测试新闻测试新</text>
					<view class="news-more">
						<text class="news-datetime">2021-2-1 10:25</text>
						<text class="news-view">30</text>
					</view>
				</view>
			</view>
		</view>
		<view class="index-content">
			<view class="news-item">
				<view class="news-thumb">
					<image class="news-img" src="@/static/images/index/news-demo.jpg"></image>
				</view>
				<view class="news-info">
					<text class="news-title">测试新闻测试新闻测试新闻测试新闻测试新闻测试新闻测试新闻测试新闻测试新闻测试新闻测试新闻</text>
					<view class="news-more">
						<text class="news-datetime">2021-2-1 10:25</text>
						<text class="news-view">30</text>
					</view>
				</view>
			</view>
		</view>
		<view class="index-content">
			<view class="news-item">
				<view class="news-thumb">
					<image class="news-img" src="@/static/images/index/news-demo.jpg"></image>
				</view>
				<view class="news-info">
					<text class="news-title">测试新闻测试新闻测试新闻测试新闻测试新闻测试新闻测试新闻测试新闻测试新闻测试新闻测试新闻</text>
					<view class="news-more">
						<text class="news-datetime">2021-2-1 10:25</text>
						<text class="news-view">30</text>
					</view>
				</view>
			</view>
		</view>
		<view class="index-content">
			<view class="news-item">
				<view class="news-thumb">
					<image class="news-img" src="@/static/images/index/news-demo.jpg"></image>
				</view>
				<view class="news-info">
					<text class="news-title">测试新闻测试新闻测试新闻测试新闻测试新闻测试新闻测试新闻测试新闻测试新闻测试新闻测试新闻</text>
					<view class="news-more">
						<text class="news-datetime">2021-2-1 10:25</text>
						<text class="news-view">30</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "news-centre",
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss" scoped>
	.news-item {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.news-thumb {
		width: 200rpx;
	}

	.news-img {
		width: 200rpx;
		height: 160rpx;
	}

	.news-info {
		padding-left: 15rpx;
	}

	.news-title {
		font-size: $ulan-font-size-base * 1.1;
		color: $ulan-text-color-grey;
		overflow: hidden;
		text-overflow: ellipsis;
		// 下面3个必须写，可以实现2行文字
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.news-more {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		color: $ulan-text-color-shallow-grey;
		width: 480rpx;
		margin-top: 10rpx;
	}

	.news-view {
		padding-right: 10rpx;
	}
</style>
