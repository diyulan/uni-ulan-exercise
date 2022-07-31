<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	.index-block {
		display: flex;
		flex-direction: column;
		background-color: $ulan-bg-color-white;
		margin-top: 20rpx;
	}

	.index-block-title {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 100rpx;
		padding: 0rpx 30rpx;
	}

	.index-title-left {
		border-left-color: $ulan-border-color-theme;
		border-left-width: 6rpx;
		border-left-style: solid;
		padding-left: 10rpx;
		color: $ulan-text-color-deep-grey;
		font-size: $ulan-font-size-lg;
	}

	.index-title-right {
		border-top: 2rpx $ulan-border-color-shallow-grey solid;
		border-right: 2rpx $ulan-border-color-shallow-grey solid;
		width: 16rpx;
		height: 16rpx;
		transform: rotate(45deg);
	}

	.index-content {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0rpx 30rpx;
	}

	// 防止tabBar挡住页面内容
	.h5-tabbar-bottom {
		padding-bottom: calc(var(--window-bottom) - 120rpx);
	}
</style>
