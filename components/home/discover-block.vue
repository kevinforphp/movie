<template>
	<view>
		<!-- 动态模块 -->
		<view class="cu-card dynamic">
			<view class="cu-item shadow">
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" :style="`background-image:url(${avatar});`"></view>
						<view class="content flex-sub">
							<view>{{name}}</view>
							<view class="text-gray text-sm flex justify-between">
								{{date}}
							</view>
						</view>
						<view>
							<button v-if="btnText" class="bg-yellow cu-btn sm margin-right" @tap="$emit('handlerTap')">{{btnText}}</button>
						</view>
					</view>
				</view>
				<view class="text-content">
					折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！
				</view>
				<view :class="['grid padding-lr col-3',{'grid-square':list.length>1}] ">
					<view v-for="(item,key) in list" :key="key" :class="['bg-img',{'only-img':list.length === 1}]" :style="`background-image:url('${item.url}');`"></view>
				</view>
				<view class="text-gray flex justify-around">
					<view class="handler-btn text-center">
						<text class="cuIcon-appreciatefill margin-right-xs"></text>
						{{icons[0]}}
					</view>
					<view class="handler-btn text-center">
						<text class="cuIcon-videofill margin-right-xs"></text>
						{{icons[1]}}
					</view>
					<view class="handler-btn text-center">
						<text class="cuIcon-unlock margin-right-xs"></text>
						{{icons[2]}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	/*
		动态模块
	*/ 
	export default {
		props:{
			avatar:{
				type:String,
				default:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg'
			},
			name:{
				type:String,
				default:'江晚吟'
			},
			date:{
				type:[Number,String],
				default:'2019年12月3日'
			},
			text:{
				type:String,
				default:'动态默认站位符动态默认站位符动态默认站位符动态默认站位符动态默认站位符动态默认站位符'
			},
			icons:{
				type:Array,
				default:()=>[666,666,666]//依次是点赞数，播放数，解锁数
			},
			list:{
				type:Array,
				default:()=>[]//媒体数组
			},
			btnText:{
				type:String,
				default:''
			},
			handlerTap:{
				type:Function
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.menu-avatar {
		.cu-item {
			background-color: #303849;
	
			&::after {
				border: 0;
			}
	
			.content.flex-sub {
				width: calc(100% - 96upx - 180upx - 20upx);
			}
		}
	}
	.handler-btn {
		width: calc(100% / 3);
		line-height: 60upx;

		[class*="cuIcon-"] {
			font-size: 32upx;
		}
	}
	.cu-card {
		&.dynamic {
			>.cu-item {
				background-color: #303849;
			}
		}
	}
</style>
