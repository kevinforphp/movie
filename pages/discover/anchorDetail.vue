<template>
	<view>
		<view class="bg-img flex align-center" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg');height: 336upx">
		</view>
		<!-- 视频 动态 喜欢  头像 -->
		<view class="flex detail align-center">
			<view class="cu-avatar round margin-left" style="background-image: url(https://ossweb-img.qq.com/images/lol/web201310/skin/big21002.jpg);height: 150upx;width: 150upx;border: 2upx solid #fff;">
				<image class="vip" src="../../static/vip1.png" mode=""></image>
			</view>
			<view class="num-box" style="margin-left: 50upx;">
				<view class="text-center text-xl">
					50
				</view>
				<view class="text-center text-sm">
					动态
				</view>
			</view>
			<view class="num-box margin-left">
				<view class="text-center text-xl">
					88
				</view>
				<view class="text-center text-sm">
					视频
				</view>
			</view>
			<view class="num-box margin-left">
				<view class="text-center text-xl">
					500
				</view>
				<view class="text-center text-sm">
					喜欢
				</view>
			</view>
		</view>
		<!-- 关注 -->
		<view>
			<view class="handler-btn bg-yellow text-center">关注</view>
		</view>
		<!-- 姓名描述 -->
		<view class="padding-lr">
			<view>
				<text class="text-lg">@江晚吟</text> <view class="cu-tag radius bg-yellow sm margin-left-xs">LV36</view>
			</view>
			<view class="show-self margin-top-xs">
				填写个人资料，展示自己的个性<br>
			</view>
		</view>
		<!-- 视频板块 -->
		<scroll-view scroll-x class="nav solid-bottom margin-top-sm">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-yellow cur':''" v-for="(item,index) in Tabs" :key="index"
				 @tap="tabSelect" :data-id="index">
					{{item.label}}
				</view>
			</view>
		</scroll-view>
		<!-- 动态 -->
		<view v-if="TabCur === 0">
			<discoverBlock v-for="i in 10" class="margin-top-xs"></discoverBlock>
		</view>
		<!-- 作品 -->
		<view v-if="TabCur === 1" class="padding-lr-xs flex flex-wrap">
			<videoBlock class="margin-left-xs margin-top-xs" v-for="i in 10" :icon="[66,66]" :time="60000"></videoBlock>
		</view>
	</view>
</template>

<script>
	import discoverBlock from '@/components/home/discover-block'
	import videoBlock from "@/components/home/video-block"
	export default {
		components: {
			discoverBlock,
			videoBlock
		},
		data() {
			return {
				TabCur: 0,
				Tabs: [{
					label: '动态'
				}, {
					label: '作品'
				}]
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title:'@江晚吟'
			})
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id * 1;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.detail {
		margin-top: -20upx;

		.vip {
			width: 30upx;
			height: 30upx;
			position: absolute;
			bottom: 0;
			right: 0;
		}

		.num-box {
			line-height: 40upx;
			padding: 0 30upx;
			&.solid-right {
				&::after {
					border-color: rgba($color: #fff, $alpha: .1);
				}
			}
		}
	}
	.handler-btn{
		width:240upx;
		line-height: 60upx;
		margin-left: 260upx;
		border-radius: 6upx;
		&.disabled{
			background-color: #303849;
			color: #fff;
		}
	}
</style>
