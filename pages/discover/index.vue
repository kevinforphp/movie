<template>
	<view>
		<!-- 发现 -->
		<view style="height: 44px;" >
			<scroll-view scroll-x class="nav solid-bottom fixed header" :style="style">
				<view class="flex text-center">
					<view class="cu-item flex-sub" :class="index==TabCur?'text-yellow cur':''" v-for="(item,index) in Tabs" :key="index"
					 @tap="tabSelect" :data-id="index">
						{{item.label}}
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 推荐 -->
		<view v-if="TabCur === 0">
			<discoverBlock v-for="i in 10" class="margin-top-xs" btnText="关注"></discoverBlock>
		</view>
		<!-- 已关注 -->
		<view v-else="TabCur === 1">
			<discoverBlock v-for="i in 10" class="margin-top-xs"></discoverBlock>
		</view>
	</view>
</template>

<script>
	import discoverBlock from '@/components/home/discover-block'
	export default {
		components:{
			discoverBlock
		},
		data() {
			return {
				TabCur: 0,
				Tabs: [{
					label: '推荐'
				}, {
					label: '关注'
				}]
			};
		},
		onLoad() {
			uni.getSystemInfo({
				success: function(e) {
					console.log(e)
				}
			})
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id * 1;
			}
		},
		computed: {
			style() {
				//#ifdef APP-PLUS
				return `height:${45}px;top:0`;
				// #endif
				//#ifdef H5
				return `height:${45}px;top:${this.CustomBar}px`;
				// #endif
			}
		}
	}
</script>

<style lang="scss" scoped>
.header{
		background-color: #242A37
	}
</style>
