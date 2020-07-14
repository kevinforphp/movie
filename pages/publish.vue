<template>
	<view>
		<!-- !!!!! placeholder 在ios表现有偏移 建议使用 第一种样式 -->
		<view class="cu-form-group solid-top">
			<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaAInput" placeholder="多行文本输入框"></textarea>
		</view>
		<!-- 设置类型 -->
		<view class="cu-form-group solid-top">
			<view class="title text-grey">发布类型</view>
			<picker @change="PickerChange" :value="index" :range="picker">
				<view class="picker">
					{{picker[index]}}
				</view>
			</picker>
		</view>
		<!-- 设置权限 -->
		<view class="cu-form-group solid-top">
			<view class="title text-grey">查看权限</view>
			<picker @change="pickerPower" :value="powerIndex" :range="powerPicker">
				<view class="picker">
					{{powerPicker[powerIndex]}}
				</view>
			</picker>
		</view>
		<!-- 售价 -->
		<view v-if="powerIndex" class="cu-form-group solid-top">
			<view class="title text-grey">查看售价</view>
			<input placeholder="输入售价" type="number" name="input"></input>
			<view>
				<img src="../static/diamond.svg" alt="" style="width: 28upx;height: 28upx;vertical-align: middle;">
			</view>
		</view>
		<!-- 上传图片 -->
		<view class="cu-bar bg-black solid-top ">
			<view class="action text-grey">
				{{index?'视频上传':'图片上传'}}
			</view>
			<view class="action text-grey">
				{{imgList.length}}/9
			</view>
		</view>
		<view class="cu-form-group">
			<view class="grid col-3 grid-square flex-sub">
				<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
					<image :src="imgList[index]" mode="aspectFill"></image>
					<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
						<text class='cuIcon-close'></text>
					</view>
				</view>
				<view class="dashed" @tap="ChooseImage" v-if="imgList.length<9">
					<text class='cuIcon-add'></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList: [],
				picker: ['动态', '视频'],
				powerPicker: ['公开', '非公开'],
				index: 0,//发布类型 默认0动态 1是视频
				powerIndex:0,//0公开 1非公开
				textareaAInput:'',
				modalName: null,
			};
		},
		methods: {
			pickerPower(e){
				this.powerIndex = e.detail.value
			},
			PickerChange(e) {
				this.index = e.detail.value
			},
			ChooseImage() {
				uni.chooseImage({
					count: 4, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths)
						} else {
							this.imgList = res.tempFilePaths
						}
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				uni.showModal({
					title: '召唤师',
					content: '确定要删除这段回忆吗？',
					cancelText: '再看看',
					confirmText: '再见',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.cu-form-group {
		background-color: #191919;
		border: 0;
	}
	.solids::after{
		border-color:#8799a3 ;
	}
</style>
