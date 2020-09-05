<template>
	<view>
		<view>
			<video-item v-for="i in 10"></video-item>
		</view>
	</view>
</template>

<script>
	import videoItem from "@/components/about/video-item"
	export default {
		components:{
			videoItem
		},
		data() {
			return {

			};
		},
		onLoad(options) {
			switch (options.type * 1) {
				default: //我的解锁
					uni.setNavigationBarTitle({
						title: '我的解锁'
					});
					break;
				case 1: //我的收藏
					uni.setNavigationBarTitle({
						title: '我的收藏'
					});
					break;
				case 2: //我的点赞
					uni.setNavigationBarTitle({
						title: '我的点赞'
					});
					break;
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
