<template>
	<view class="page">
		<!-- 轮播图 -->
		<banner></banner>
		<!-- 导航图标 -->
		<nav-icon></nav-icon>
		<!-- 成功案例 -->
		<case-exhibit></case-exhibit>
		<!-- 新闻中心 -->
		<news-centre></news-centre>
		<!-- 视频展示 -->
		<video-exhibit></video-exhibit>
		<!-- 相册展示 -->
		<photo-exhibit></photo-exhibit>
		<!-- 防止tabBar挡住页面内容 -->
		<view class="h5-tabbar-bottom"></view>
	</view>
</template>

<script>
	import Request from '@/common/js/request.js'
	export default {
		data() {
			return {

			}
		},
		onLoad() {
			
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.page {
		background-color: $ulan-bg-color-white-smoke;
		color: $ulan-text-color-deep-grey;
		font-size: $ulan-font-size-base;
	}
</style>
