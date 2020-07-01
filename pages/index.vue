<template>
	<view>
		<!-- 轮播视频区 -->
		<view class="margin-top">
			<swiper class="card-swiper video-card" :circular="true" autoplay interval="5000" duration="500" @change="cardSwiper">
				<swiper-item v-for="(item,index) in swiperList" class="padding-0" :key="index" :class="cardCur==index?'cur':''">
					<view class="swiper-item">
						<view class="video-card flex flex-direction">
							<view class="video radius video-box">
								<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
								<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
								<view class="timer cu-tag radius">
									7:00
								</view>
							</view>
							<view class="video-detail bg-black">
								<view class="text-white  padding-lr-sm title text-lg">视频标题超出字数。。。</view>
								<view class="handler-btn flex justify-between align-center padding-lr">
									<view class="flex flex-direction text-gray align-center">
										<view class="text-xxl">
											<text class="cuIcon-unlock"></text>
										</view>
										<text>66</text>
									</view>
									<view class="btn bg-orange text-center text-white">立即解锁</view>
									<view class="flex flex-direction text-gray align-center">
										<view class="text-xxl">
											<text class="cuIcon-appreciate"></text>
										</view>
										<text>66</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 官方精选  版式一-->
		<view class="margin-top-sm">
			<view class="cu-bar bg-black">
				<view class="action">
					<text class="cuIcon-favorfill text-orange"></text>
					<text class="text-lg">官方精选专区</text>
				</view>
				<view class="action">
					<text>更多</text>
					<text class="cuIcon-right"></text>
				</view>
			</view>
			<view class="video-list bg-black padding-top-sm padding-bottom">
				<scroll-view scroll-x @scroll="scroll" style="height: 420upx" class="scroll-view-H">
					<view class="video-item margin-left-sm my-shaodw" v-for="i in 10">
						<video src="" muted :show-play-btn="false"
						 :controls="false" object-fit="fill"></video>
						<view class="detail flex padding-lr-sm align-center">
							<view class="cu-avatar lg round" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg');">
							</view>
							<view class="flex flex-direction content margin-left">
								<view class="title text-cut text-sm">
									[XWJ-0005]恣意玩弄！當超擬真性愛機器人長得像那個前女友，被分手的恨都一次狠狠發洩吧！
								</view>
								<view class="icons text-gray ">
									<text class="cuIcon-appreciate"></text>
									66
									<text class="cuIcon-unlock margin-left-sm"></text>
									66
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<!-- 大家都在看  版式二-->
		<view class="margin-top-sm">
			<view class="cu-bar bg-black">
				<view class="action">
					<text class="cuIcon-cardboardfill text-red"></text>
					<text class="text-lg">大家都在看</text>
				</view>
				<view class="action">
					<text>更多</text>
					<text class="cuIcon-right"></text>
				</view>
			</view>
			<view class="image-list bg-black padding-top-sm padding-bottom">
				<scroll-view scroll-x @scroll="scroll" style="height: 340upx" class="scroll-view-H" lazy-load>
					<view class="image-item margin-left-sm my-shaodw" v-for="i in 10">
						<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg" mode="aspectFill"></image>
						<view class="content">
							❤️學長說要結婚了❤️ 學長把我拍露臉抽插 明明跟學長說好不能拍露臉 好害羞☺️
						</view>
						<view class="cu-avatar round" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg');">
							<view class="cu-tag  bg-green badge"></view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<!-- 大家都在看  版式二-->
		<view class="margin-tb-sm">
			<view class="cu-bar bg-black">
				<view class="action">
					<text class="cuIcon-hotfill text-red"></text>
					<text class="text-lg">超级热门</text>
				</view>
				<view class="action">
					<text>更多</text>
					<text class="cuIcon-right"></text>
				</view>
			</view>
			<view class="image-list bg-black padding-top-sm padding-bottom">
				<scroll-view scroll-x @scroll="scroll" style="height: 340upx" class="scroll-view-H" lazy-load>
					<view class="image-item margin-left-sm my-shaodw" v-for="i in 10">
						<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg" mode="aspectFill"></image>
						<view class="content">
							❤️學長說要結婚了❤️ 學長把我拍露臉抽插 明明跟學長說好不能拍露臉 好害羞☺️
						</view>
						<view class="cu-avatar round" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg');">
							<view class="cu-tag  bg-green badge"></view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'video',
					url: 'https://us8.wl-cdn.com/hls/20200622/760dc6451d0be12b5b9bbc7c04be27d8/index.m3u8'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}, {
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}],
				dotStyle: false,
				towerStart: 0,
				direction: ''
			};
		},
		methods: {
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			scroll() {

			}
		}
	}
</script>

<style lang="scss" scoped>
	.video-card {
		height: 550upx !important;

		.video {
			height: 360upx;
			overflow: hidden;
			position: relative;

			.timer {
				position: absolute;
				background-color: rgba(25, 25, 25, 0.6);
				color: rgb(255, 255, 255);
				bottom: 24upx;
				right: 24upx;
			}
		}

		.video-detail {
			height: 190upx;
			border-radius: 0 0 24upx 24upx;

			.title {
				line-height: 60upx;
			}

			.handler-btn {
				height: 80upx;

				.btn {
					width: 320upx;
					line-height: 72upx;
					border-radius: 36upx;
					border: 1px solid #f37b1d;
				}
			}
		}
	}

	.scroll-view-H {
		white-space: nowrap;
		width: 100%;
	}

	.image-list {
		.image-item {
			width: 240upx;
			height: 340upx;
			border-radius: 12upx;
			overflow: hidden;
			display: inline-block;
			position: relative;

			.content {
				position: absolute;
				bottom: 0;
				width: 100%;
				line-height: 1.5;
				font-size: 12px;
				font-weight: 400;
				line-height: 1.5;
				display: -webkit-box;
				word-break: break-all;
				white-space: pre-line;
				text-overflow: ellipsis;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				pointer-events: none;
				margin: 0px 0px 4px;
				grid-column: 1 / auto;
				grid-row: 2 / auto;
				padding: 4px 4px 0px;
				overflow: hidden;
			}

			.cu-avatar {
				position: absolute;
				left: 10upx;
				top: 10upx;
				border: 1upx solid #fff;
				.cu-tag{
					top: 0;
					right: 0;
				}
			}
		}
	}

	.video-list {
		.video-item {
			width: 520upx;
			height: 420upx;
			border-radius: 12upx;
			overflow: hidden;
			display: inline-block;

			>video {
				width: 100%;
				height: 290upx;
			}
		}


		.detail {
			background-color: #252525;
			height: 130upx;

			.content {
				width: calc(100% - 40upx - 96upx);
				line-height: 1.6em;
			}
		}
	}
</style>
