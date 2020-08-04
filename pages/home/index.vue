<template>
	<view class="tabs">
		<view  :style="[{height:CustomBar + 'px'}]">
			<scroll-view scroll-x class="nav solid-bottom fixed header" :style="style">
				<view class="flex text-center">
					<view class="cu-item flex-sub" :class="index==TabCur?'text-yellow cur':''" v-for="(item,index) in Tabs" :key="index"
					 @tap="tabSelect" :data-id="index">
						{{item.label}}
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="content padding-bottom-sm">
			<Vip v-if="TabCur === 0"></Vip>
			<Recommend v-if="TabCur === 1"></Recommend>
			<Free v-if="TabCur === 2"></Free>
			<Vicinity v-if="TabCur === 3"></Vicinity>
		</view>
	</view>
</template>

<script>
	import Recommend from "@/components/home/recommend"
	import Vip from "@/components/home/vip"
	import Vicinity from "@/components/home/vicinity"
	import Free from "@/components/home/free"
	export default {
		components:{
			Recommend,
			Vip,
			Vicinity,
			Free
		},
		data() {
			return {
				TabCur: 1,
				Tabs: [{
					label: 'VIP精选'
				}, {
					label: '推荐'
				}, {
					label: '限时免费'
				}, {
					label: '附近'
				}],
			}
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id * 1;
			},
			loadMore() {

			}
		},
		computed:{
			style() {
				return `height:${this.CustomBar}px;padding-top:${this.StatusBar}px;`;
			}
		}
	}
</script>

<style scoped lang="scss">
	.header{
		background-color: #242A37
	}
</style>
