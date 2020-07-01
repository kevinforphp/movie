<template>
	<view >
		<view class="grid col-3 padding-lr-sm margin-top-sm">
			<view class="flex flex-direction align-center" @tap="navTo('/pages/messages/chat')" v-for="i in 100">
				<view class="cu-avatar round xxxl" style="background-image: url(https://api.swag.live/users/5c7b62ed1817b7bd43cca413/avatar.128x128.jpg);">
				</view>
				<view style="line-height: 40upx; width: 100%;" class="text-center">
					@sexyarran
					<text class="cuIcon-title text-green  margin-right-xs"></text>
				</view>
			</view>
		</view>
		<mpvue-picker class="my-picker" :themeColor="themeColor" ref="mpvuePicker" :mode="mode" :deepLength="deepLength"
		 :pickerValueDefault="pickerValueDefault" @onConfirm="onConfirm" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>
	</view>
</template>

<script>
	import mpvuePicker from '@/components/mpvue-picker/mpvuePicker.vue';
	export default {
		components: {
			mpvuePicker
		},
		data() {
			return {
				pickerValueArray: [{
						label: '全部',
						value: 0
					},
					{
						label: '最近在线',
						value: 1
					},
					{
						label: '最新加入',
						value: 2
					}
				],
				themeColor: '#f37b1d',
				mode: '',
				deepLength: 1,
				pickerValueDefault: [0]
			};
		},
		methods: {
			onCancel(e) {
				console.log(e);
			},
			// 单列
			showSinglePicker() {
				this.mode = 'selector';
				this.deepLength = 1;
				this.pickerValueDefault = [0];
				this.$refs.mpvuePicker.show();
			},
			onConfirm(e) {
				console.log(e.label);
				this.setStyle(0, e.label);
			},
			/**
			 * 修改导航栏buttons
			 * index[number] 修改的buttons 下标索引，最右边索引为0
			 * text[string] 需要修改的text 内容
			 */
			setStyle(index, text) {
				let pages = getCurrentPages();
				let page = pages[pages.length - 1];
				if (text.length > 3) {
					text = text.substr(0, 3) + '...';
				}
				// #ifdef APP-PLUS
				let currentWebview = page.$getAppWebview();
				let titleNView = currentWebview.getStyle().titleNView;
				// 添加文字过长截取为3个字符，请根据自己业务需求更改
				titleNView.buttons[0].text = text;
				currentWebview.setStyle({
					titleNView: titleNView
				});
				// #endif
				// #ifdef H5
				// h5 临时方案
				document.getElementsByClassName('uni-btn-icon')[1].innerText = text;
				// #endif
			}
		},
		onBackPress() {
			if (this.$refs.mpvuePicker.showPicker) {
				this.$refs.mpvuePicker.pickerCancel();
				return true;
			}
		},
		onUnload() {
			if (this.$refs.mpvuePicker.showPicker) {
				this.$refs.mpvuePicker.pickerCancel();
			}
		},
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				this.showSinglePicker();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.my-picker {
		color: #000;
	}
</style>
