<template>
	<view class="index-block">
		<view class="index-block-title">
			<view class="index-title-left">成功案例</view>
			<view class="index-title-right">
				<text></text>
			</view>
		</view>
		<view class="index-content">
			<view class="case-item">
				<image class="case-thumb" src="@/static/images/index/case-demo.jpg"></image>
				<text class="case-title">案例展示一</text>
			</view>
			<view class="case-item">
				<image class="case-thumb" src="@/static/images/index/case-demo.jpg"></image>
				<text class="case-title">案例展示二</text>
			</view>
			<view class="case-item">
				<image class="case-thumb" src="@/static/images/index/case-demo.jpg"></image>
				<text class="case-title">案例展示三</text>
			</view>
			<view class="case-item">
				<image class="case-thumb" src="@/static/images/index/case-demo.jpg"></image>
				<text class="case-title">案例展示四</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "case-exhibit",
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss" scoped>
	.case-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 330rpx;
	}

	.case-thumb {
		width: 330rpx;
		height: 250rpx;
	}

	.case-title {
		padding: 20rpx 0;
	}
</style>
