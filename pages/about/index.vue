<template>
	<view>
		<view :style="`height:${StatusBar}`"></view>
		<!-- 头像区 -->
		<view class="flex padding-top">
			<view class="cu-avatar round xl margin-left-sm" style="background-image: url(https://ossweb-img.qq.com/images/lol/web201310/skin/big21002.jpg);">
				<image class="vip" src="../../static/vip1.png" mode=""></image>
			</view>
			<view class="detail margin-left-sm">
				<view>
					<text class="text-lg">江晚吟</text>
				</view>
				<view>
					ID:123456789
				</view>
				<view>
					<view class="cu-tag radius bg-yellow sm">LV36</view>
				</view>
			</view>
			<view class="edit margin-right-sm">
				<view class="cu-tag line-yellow radius">
					编辑
				</view>
			</view>
		</view>
		<view class="show-self margin-top-sm padding-lr">
			填写个人资料，展示自己的个性<br>
		</view>
		<!-- 个人咨询区 -->
		<view class="flex margin-top">
			<view class="num-box">
				<view class="text-center text-xl">
					78
				</view>
				<view class="text-center text-sm">
					关注
				</view>
			</view>
			<view class="num-box solid-right">
				<view class="text-center text-xl">
					88
				</view>
				<view class="text-center text-sm">
					粉丝
				</view>
			</view>
			<view class="num-box margin-left">
				<view class="text-center text-xl">
					88888
				</view>
				<view class="text-center text-sm">
					余额
				</view>
			</view>
			<view class="btns margin-right flex align-end margin-bottom-xs">
				<button class="cu-btn bg-yellow sm">充值</button>
				<button class="cu-btn line-gray margin-left-sm sm">提现</button>
			</view>
		</view>
		<!-- 链接 -->
		<view class="margin-lr-sm cu-list grid col-4 no-border radius margin-top">
			<view class="cu-item">
				<view>
					<view class="cu-avatar radius" style="background-image: url(../../static/jryy.png);">
					</view>
				</view>
				<text>佳人有约</text>
			</view>
			<view class="cu-item">
				<view>
					<view class="cu-avatar radius" style="background-image: url(../../static/tjyl.png);">
					</view>
				</view>
				<text>推荐有礼</text>
			</view>
			<view class="cu-item">
				<view>
					<view class="cu-avatar radius" style="background-image: url(../../static/xfjl.png);">
					</view>
				</view>
				<text>消费记录</text>
			</view>
			<view class="cu-item">
				<view>
					<view class="cu-avatar radius" style="background-image: url(../../static/czzx.png);">
					</view>
				</view>
				<text>创作中心</text>
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
			<discoverBlock></discoverBlock>
		</view>
		<!-- 作品 -->
		<view v-if="TabCur === 1" class="padding-lr-xs flex flex-wrap">
			<videoBlock class="margin-left-xs margin-top-xs" v-for="i in 10" :icon="[66,66]" :time="60000"></videoBlock>
		</view>
		<!-- 最爱 -->
		<view v-show="TabCur===2" class="swiper-item video padding-lr-sm">
			<view class="my-concerned margin-top-xs">
				<!-- 关注的列表 -->
				<view class="cu-list menu-avatar">
					
					<view class="cu-item">
						<view class="cu-avatar  lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
						<view class="content">
							<view></view>
							<view class="text-gray text-sm flex text-overflow">
								自己解锁的动态，超出两行的文字，省略号显示，占位符占位符占位符占位符占位符占位符占位符占位符
							</view>
						</view>
						<!-- 动态类型 视频或者图文 -->
						<view class="action">
							<view class="text-xl">
								<text class="text-white cuIcon-camerafill"></text>
							</view>
						</view>
					</view>
					<view class="cu-item">
						<view class="cu-avatar  lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
						<view class="content">
							<view></view>
							<view class="text-gray text-sm flex text-overflow">
								自己解锁的动态，超出两行的文字，省略号显示，占位符占位符占位符占位符占位符占位符占位符占位符
							</view>
						</view>
						<!-- 动态类型 视频或者图文 -->
						<view class="action">
							<view class="text-xl">
								<text class="text-white cuIcon-videofill"></text>
							</view>
						</view>
					</view>

				</view>
			</view>
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
					label: '解锁动态'
				}, {
					label: '解锁视频'
				}, {
					label: '最爱'
				}]
			}
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id * 1;
			}
		}
	}
</script>

<style scoped lang="scss">
	.my-concerned {
		.cu-list.menu-avatar>.cu-item {
			background-color:transparent;

			&::after {
				border-color: #555;
			}
		}
		.text-overflow {
			line-height: 18px;
			opacity: 1;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			grid-area: captionText / captionText / captionText / captionText;
			overflow: hidden;
		}
	}

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

	.cu-list {
		&.grid {
			background-color: #303849;

			&.no-border {
				padding: 10upx;

				>.cu-item {
					padding: 20upx 0 10upx 0;
				}
			}

			.cu-item {
				.cu-avatar {
					height: 82upx;
					width: 82upx;
				}

				uni-text {
					color: #fff;
					font-size: 24upx;
				}
			}
		}
	}

	.detail {
		line-height: 1.6em;
	}

	.show-self {
		line-height: 40upx;
	}

	.btns {
		margin-left: auto;

		.box {
			margin-top: auto;
		}
	}

	.edit {
		margin-left: auto;
		margin-top: auto;
		margin-bottom: auto;
	}
</style>
