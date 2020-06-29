<template>
	<view class="my-concerned">
		<!-- 关注的列表 -->
		<view class="cu-list menu-avatar">
			<view class="cu-item solid-top">
				<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
				<view class="content">
					<view class="">热门主播姓名 <view class="cu-tag sm radius bg-orange">超级明星</view></view>
					<view class="text-gray text-sm flex">
						<view class="text-cut">
							<text class="cuIcon-title text-red  margin-right-xs"></text>
							主播最新动态，超出长度的部分省略号显示，字符占位字符占位字符占位字符占位字符占位字符占位字符占位字符占位
						</view>
					</view>
				</view>
				<view class="action">
					<view class="text-red text-xs">新动态</view>
					<view class="text-grey text-xs">1分钟前</view>
				</view>
			</view>
			<view class="cu-item solid-top">
				<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
				<view class="content">
					<view class="text-grey">主播姓名</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut">
							<!-- <text class="cuIcon-infofill text-red  margin-right-xs"></text> -->
							主播没有最近不显示红标动态，超出长度的部分省略号显示，字符占位字符占位字符占位字符占位字符占位字符占位字符占位字符占位
						</view>
					</view>
				</view><!-- 
				<view class="action">
					<view class="text-grey text-xs">2020/6/24</view>
					<view class="cu-tag round bg-grey sm">5</view>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {

		},
		computed: {

		}
	}
</script>

<style lang="scss" scoped>
	.my-concerned {
		.cu-list.menu-avatar>.cu-item {
			background-color: #191919;

			&::after {
				border-color: #000;
			}
		}
	}
</style>
