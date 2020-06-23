<template>
	<view>
		<swiper class="card-swiper video-card" :circular="true" interval="5000"  duration="500" @change="cardSwiper"
		 indicator-color="#8799a3" indicator-active-color="#0081ff">
			<swiper-item v-for="(item,index) in swiperList" class="padding-0" :key="index" :class="cardCur==index?'cur':''">
				<view class="swiper-item">
					<view class="video-card flex flex-direction">
						<view class="video radius">
							<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
							<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
						</view>
						<view class="video-detail bg-black">
							<view class="text-white  padding-lr-sm title">视频标题超出字数。。。</view>
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
</template>

<script>
	export default {
		data() {
			return {
				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'video',
					url: 'https://asia.messages.swag.live/5eda576523cc2facaba201b6/trailer.mp4'
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
				console.log(e)
				this.cardCur = e.detail.current
			},
		}
	}
</script>

<style lang="scss" scoped>
	.video-card {
		height: 550upx !important;

		.video {
			height: 360upx;
			overflow: hidden;
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
</style>
