<script>
	import Vue from 'vue'
	export default {
		globalData: {
			NavFlag: false, //跳转标记
		},
		onLaunch: function() {

		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		}
	};
</script>

<style>
	/*每个页面公共css */
	@import "colorui/main.css";
	@import "colorui/icon.css";

	/* 解决头条小程序组件内引入字体不生效的问题 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		src: url('/static/uni.ttf');
	}

	/* #endif */
	page {
		background-color: #242A37;
		color: #fff;
	}
</style>
