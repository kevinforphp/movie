<template>
	<view>
		<view class="bg-img flex align-center" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg');height: 414upx;">
			<view class="padding-xl text-white">
				<view class="padding-xs text-xxl text-bold">
					钢铁之翼
				</view>
				<view class="padding-xs text-lg">
					Only the guilty need fear me.
				</view>
			</view>
		</view>
		<view class="user-info bg-black padding-tb-sm padding-lr solid-bottom-xl">
			<view class="flex align-start">
				<view class="cu-avatar xl round" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg');"></view>
				<view class="margin-left">
					<view class="flex">
						<view>
							<view class="text-center">10</view>
							<view class="text-center">粉丝数</view>
						</view>
						<view class="margin-left">
							<view class="text-center">10</view>
							<view class="text-center">关注数</view>
						</view>
					</view>
					<view class="margin-top-xs text-xl text-orange" style="line-height: 40upx;">
						<img src="../static/diamond.svg" alt="" style="width: 28upx;height: 28upx;vertical-align: middle;">
						<text>10,000,000,000,000</text>
					</view>
				</view>
				<view class="btn">
					<button class="cu-btn line-white"><text class="cuIcon-edit margin-right-xs"></text>编辑</button>
				</view>
			</view>
			<view class="text-xl text-bold margin-top-sm">
				@kevin
			</view>
		</view>
		<!-- 导航 粘性 -->
		<view class="fixed" v-if="isShowSticky" :style="`top:${navTopS}px;`">
			<scroll-view scroll-x class="bg-black nav">
				<view class="flex text-center">
					<view class="cu-item flex-sub" :class="0==TabCur?'text-orange cur':''" @tap="tabSelect" :data-id="0">
						动态
					</view>
					<view class="cu-item flex-sub" :class="1==TabCur?'text-orange cur':''" @tap="tabSelect" :data-id="1">
						视频
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 导航正常 -->
		<view id="nav-bar">
			<scroll-view scroll-x class="bg-black nav">
				<view class="flex text-center">
					<view class="cu-item flex-sub" :class="0==TabCur?'text-orange cur':''" @tap="tabSelect" :data-id="0">
						动态
					</view>
					<view class="cu-item flex-sub" :class="1==TabCur?'text-orange cur':''" @tap="tabSelect" :data-id="1">
						视频
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 动态 -->
		<view v-show="TabCur===0" class="swiper-item dynamic">
			<view class="my-concerned margin-top-xs">
				<!-- 关注的列表 -->
				<view class="cu-list menu-avatar">
					<view class="cu-item" v-for="i in 20">
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
				</view>
			</view>
		</view>
		<!-- 视频 -->
		<view v-show="TabCur===1" class="swiper-item video padding-lr-sm">
			<view class="margin-top-sm video-item radius bg-black flex flex-direction" v-for="i in 10">
				<view class="top" style="flex: 1;">
					<video src="https://bd.hls.huya.com/src/1539218884-1539218884-6610894768165617664-3078561224-10057-A-0-1-imgplus_2000.m3u8?wsSecret=87359efe0d2db12980827ea0d363597e&wsTime=5f080851&u=0&seqid=15942755375895270&ctype=tars_mobile&fs=bgct&sphdcdn=al_7-tx_3-js_3-ws_7-bd_2-hw_2&sphdDC=huya&sphd=264_*&exsphd=264_2000,&t=103"></video>
				</view>
				<view class="bottom padding-lr-sm">
					<view class="title text-cut">
						站位符站位符站位符站位符站位符站位符站位符站位符站位符站位符站位符站位符站位符站位符站位符站位符站位符站位符站位符站位符
					</view>
					<view>
						<text class="cuIcon-unlock"></text>1.2k
						<text class="cuIcon-appreciatefill margin-left"></text>98%
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				TabCur: 0,
				navTopS: null,
				navTop: null,
				isShowSticky: false
			};
		},
		onLoad() {
			this.$nextTick(()=>{
				this.setNavTop()
			})
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id * 1;
			},
			ontabchange() {

			},
			// 设置nav到顶部的距离 (滚动条为0, 菜单顶部的数据加载完毕获取到的navTop数值是最精确的)
			setNavTop() {
				uni.getSystemInfo({
					success: (res) => {
						let view = uni.createSelectorQuery().select('#nav-bar');
						view.boundingClientRect(data => {
							console.log(res, data)
							//#ifdef H5
							this.navTopS = 44 //H5上悬浮距离多加一个头部
							//#endif
							//#ifdef APP-PLUS
							this.navTopS = 0 //app上为正常距离
							//#endif
							this.navTop = data.top
						}).exec();
					}
				})
			},
		},
		onPageScroll(e) { //
		console.log(e.scrollTop)
			if (e.scrollTop >= this.navTop) {
				this.isShowSticky = true // 显示悬浮菜单
			} else {
				this.isShowSticky = false // 隐藏悬浮菜单
			}
		},
	}
</script>

<style lang="scss" scoped>
	.user-info {
		margin-top: -50upx;
		border-radius: 30upx 30upx 0 0;

		.btn {
			margin-left: auto;
		}
	}

	.my-concerned {
		.cu-list.menu-avatar>.cu-item {
			background-color: #000;

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
	.video{
		.video-item{
			height: 520upx;
			overflow: hidden;
			.bottom{
				>view{
					line-height: 64upx;
				}
			}
		}
	}

	.fixed {
		position: fixed;
		width: 100%;
		z-index: 1;
	}
</style>
