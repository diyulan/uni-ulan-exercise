<template>
	<view class="page">
		<view class="banner">
			<image class="banner-size" src="@/static/images/message/banner.jpg" mode="widthFix"></image>
		</view>
		<view class="form-container">
			<form @submit="formSubmit">
				<!-- 姓名输入框 -->
				<view class="form-item">
					<text class="form-left">姓名</text>
					<view class="form-right">
						<input class="uni-input" name="name" placeholder="请输入姓名">
					</view>
				</view>
				<!-- 电话输入框 -->
				<view class="form-item">
					<text class="form-left">电话</text>
					<view class="form-right">
						<input class="uni-input" name="phone" placeholder="请输入电话">
					</view>
				</view>
				<!-- 行业下拉选项 -->
				<view class="form-item">
					<text class="form-left">行业</text>
					<view class="form-right">
						<picker @change="bindPickerChange" :value="index" :range="array">
							<view class="uni-input">{{array[index]}}</view>
						</picker>
					</view>
				</view>
				<!-- 性别单选 -->
				<view class="form-item form-item-radio">
					<text class="form-left">性别</text>
					<view class="form-right">
						<radio-group class="radio-container" @change="changeSex">
							<label class="uni-list-cell uni-list-cell-pd radio-list" v-for="(item, index) in sex"
								:key="item.value">
								<view>
									<radio :value="item.value" :checked="index === current" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
				</view>
				<!-- 平台多选 -->
				<view class="form-item form-item-radio">
					<text class="form-left">平台</text>
					<view class="form-right">
						<checkbox-group class="radio-container" @change="checkboxChange">
							<label class="uni-list-cell uni-list-cell-pd radio-list" v-for="(item, index) in platform"
								:key="item.value">
								<view>
									<checkbox :value="item.value" :checked="item.checked" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</checkbox-group>
					</view>
				</view>
				<!-- 留言 -->
				<view class="form-item form-item-radio">
					<text class="form-left">留言</text>
					<view class="form-right">
						<textarea name="" id="textarea" class="textarea" rows="10" placeholder="给我留言..."></textarea>
					</view>
				</view>
				<!-- 提交 -->
				<button form-type="submit" type="primary">提交留言</button>
				<!-- 防止tabBar挡住页面内容 -->
				<view class="h5-tabbar-bottom"></view>
			</form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				array: ['金融', '计算机', '医疗', '个体经营', '政府部门', '其他'],
				index: 0,
				current: 0,
				sex: [{
					value: 'man',
					name: '男',
					checked: true
				}, {
					value: 'woman',
					name: '女'
				}],
				platform: [{
					value: 'H5',
					name: 'H5',
					checked: true
				}, {
					value: 'MiniProgram',
					name: '小程序'
				}, {
					value: 'APP',
					name: 'APP'
				}]
			};
		},
		methods: {
			formSubmit() {},
			bindPickerChange(e) {
				this.index = e.detail.value;
			},
			changeSex() {},
			checkboxChange() {}
		}
	}
</script>

<style lang="scss">
	.page {
		color: $ulan-text-color-deep-grey;
		font-size: $ulan-font-size-lg;
	}

	.banner {
		width: 750rpx;
	}

	.banner-size {
		width: 750rpx;
	}

	.form-item {
		@include ulan-flex;
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		border-bottom: 1rpx solid $ulan-border-color-white-smoke;
	}

	.form-item-radio {
		align-items: flex-start;
	}

	.form-left {
		width: 150rpx;
		text-align: right;
		margin-right: 30rpx;
	}

	.form-right {
		flex: 1;
	}

	.radio-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.radio-list {
		display: flex;
		flex-direction: row;
		margin-right: 20rpx;
		margin-bottom: 20rpx;
	}

	.textarea {
		width: 470rpx;
		height: 200rpx;
		border: 4rpx solid $ulan-border-color-white-smoke;
	}
</style>
