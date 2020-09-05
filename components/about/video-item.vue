<template>
	<view>
		<view class="video-item flex padding-sm solid-top">
			<view class="img radius">
				<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" mode=""></image>
			</view>
			<view class="margin-left-sm detail">
				<view class="title">
					June Liu 刘玥 & 印度大奶妹Latika Double blowjob cum in mouth双女口交口爆
				</view>
				<view class="anchor margin-top-sm">
					<view class="cu-avatar round sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg); border:1upx solid #fff;"></view>
					<text class="text-gray margin-left-sm">一个小萌新</text>
				</view>
				<view class="icons margin-top-sm text-gray">
					<text class="cuIcon-unlock"></text>
					<text>144</text>
					<text class="cuIcon-likefill margin-left-sm"></text>
					<text>144</text>
					<text class="cuIcon-appreciatefill margin-left-sm"></text>
					<text>144</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'video-item'
	}
</script>

<style scoped lang="scss">
	.video-item {
		&.solid-top{
			&::after{
				border-color: rgba($color: #fff, $alpha: .1);
			}
		}
		.img {
			width: 350upx;
			height: 200upx;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.detail{
			flex: 1;
			.title {
				font-weight: 400;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				line-height: 40upx;
				height: 80upx;
				overflow-y: hidden;
				word-break: break-all;
			}
		}
	
	}
</style>
