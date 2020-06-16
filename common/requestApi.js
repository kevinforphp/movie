import request from './request.js'
import api_list from './Api_list.js'

// 用户余额
function USER_GETALISMONEY(params = {}) {
	return request(api_list.USER_GETALISMONEY, params, 'GET').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data.money
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}
// 用户信息
function USER_GETUSERINFO(params = {}) {
	return request(api_list.USER_GETUSERINFO, params, 'POST').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}
// 用户登录
function AUTO_LOGIN(params = {}) {
	return request(api_list.LOGIN, params, 'POST').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}
// 用户登出
function LOGOUT(params = {}) {
	return request(api_list.LOGOUT, params, 'POST').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}
// 首页推荐比赛
function MATCHGAMETOP(params = {}) {
	return request(api_list.GAME_MATCHGAMETOP, params, 'GET').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}
// 首页滚动公告
function GETNEWSNOTICE(params = {}) {
	return request(api_list.NOTICES_GETNEWSNOTICE, params, 'GET').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}
// 比赛详情
function POINTSLIST(params = {}) {
	return request(api_list.GAME_POINTSLIST, params, 'POST').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}

// 市场列表
function GAME_MATCHLIST(params = {}) {
	return request(api_list.GAME_MATCHLIST, params, 'POST').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}
// 市场列表
function GAME_GETTENANCYCONFIG(params = {}) {
	return request(api_list.GAME_GETTENANCYCONFIG, params, 'POST').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}
// 对战记录
function GAME_FIGHTRECORD(params = {}) {
	return request(api_list.GAME_FIGHTRECORD, params, 'POST').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}
// 近期战绩
function GAME_RECENTRECORD(params = {}) {
	return request(api_list.GAME_RECENTRECORD, params, 'POST').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}
// 市场比赛数量
function GAME_GETGAMETOPNUM(params = {}) {
	return request(api_list.GAME_GETGAMETOPNUM, params, 'GET').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}

// 联盟筛选列表
function GAME_STATISTICALLEAGUE(params = {}) {
	return request(api_list.GAME_STATISTICALLEAGUE, params, 'POST').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}
// 投注
function USER_PLAYMORE(params = {}) {
	return request(api_list.USER_PLAYMORE, params, 'POST').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}
// 账号列表
function USER_REGISTERUSERNAME(params = {}) {
	return request(api_list.USER_REGISTERUSERNAME, params, 'POST').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}
// 账号注册
function USER_USERREGISTER(params = {}) {
	return request(api_list.USER_USERREGISTER, params, 'POST').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}
// 发送短信 
function SENDMESSAGE(params = {}) {
	return request(api_list.SENDMESSAGE, params, 'GET').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}
// 忘记密码 
function USER_FORGETPASSWORD(params = {}) {
	return request(api_list.USER_FORGETPASSWORD, params, 'POST').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}
// 用户的银行卡 
function USER_USERBANKCARDINFO(params = {}) {
	return request(api_list.USER_USERBANKCARDINFO, params, 'GET').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}
// 添加银行卡 
function USER_BANK_SAVE(params = {}) {
	return request(api_list.USER_BANK_SAVE, params, 'POST').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}
// 支持的银行列表 
function USER_BANK_LIST(params = {}) {
	return request(api_list.USER_BANK_LIST, params, 'GET').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}
// 支持的银行列表 
function USER_HISTORYBILL(params = {}) {
	return request(api_list.USER_HISTORYBILL, params, 'POST').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}

// 支付方式
function DEPOSIT_GETCHANNEL(params = {}) {
	return request(api_list.DEPOSIT_GETCHANNEL, params, "POST").then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
			data.data.forEach(key => {
				if (key.value != "9999") {
					key.detail = key.detail.map(item => {
						let arr = item.depositConfig.split(','),
							max = arr.pop(),
							min = arr.shift()
						return {
							payType: item.payType,
							depositType: item.depositType,
							config_id: item.config_id,
							name: item.name,
							quikMoney: arr,
							max: max,
							min: min,
							isSelcted: false
						}
					})
				}
			})
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}

// 入款
function DEPOSIT_PAYALL(params = {}) {
	return request(api_list.DEPOSIT_PAYALL, params, 'POST').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}
// 获取银行卡列表
function DEPOSIT_GETONLINEBANKING(params = {}) {
	return request(api_list.DEPOSIT_GETONLINEBANKING, params, 'POST').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}
// 网银入款
function DEPOSIT_ONLINEPAY(params = {}) {
	return request(api_list.DEPOSIT_ONLINEPAY, params, 'POST').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}

// 交易记录
function USER_GETINOUTCASHRECORDS(params = {}) {
	return request(api_list.USER_GETINOUTCASHRECORDS, params, 'POST').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}
// 投注记录
function USER_BETRECORD(params = {}) {
	return request(api_list.USER_BETRECORD, params, 'POST').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}

// 出款
function USER_WITHDRAW(params = {}) {
	return request(api_list.USER_WITHDRAW, params, 'POST').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}
// 修改手机号码
function USER_UPIPHONEUNMBER(params = {}) {
	return request(api_list.USER_UPIPHONEUNMBER, params, 'POST').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}
// 撤销注单
function USER_BETCANCELLATIONS(params = {}) {
	return request(api_list.USER_BETCANCELLATIONS, params, 'POST').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}

// 安全中心发送验证码
function UPPWDSENDMESSAGE(params = {}) {
	return request(api_list.UPPWDSENDMESSAGE, params, 'GET').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}

// 修改手机号码
function USER_UPPASSWORD(params = {}) {
	return request(api_list.USER_UPPASSWORD, params, 'POST').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}
// 修改资金密码
function USER_RESETSECURITYPASSWORD(params = {}) {
	return request(api_list.USER_RESETSECURITYPASSWORD, params, 'POST').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}
// 上级协助
function USER_AGENTHELP(params = {}) {
	return request(api_list.USER_AGENTHELP, params, 'POST').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}
// 消息中心
function USER_MESSAGENOTIFY(params = {}) {
	return request(api_list.USER_MESSAGENOTIFY, params, 'POST').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}
// 消息中心
function USER_MESSAGEADISPOSE(params = {}) {
	return request(api_list.USER_MESSAGEADISPOSE, params, 'POST').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}
// 活动中心
function NOTICES_GETPICTUREBYTYPE(params = {}) {
	return request(api_list.NOTICES_GETPICTUREBYTYPE, params, 'GET').then(res => {
		var data = {}
		if (res.status === 200) {
			data.status = 1
			data.data = res.data
		} else {
			data.status = 0
			data.msg = res.message
		}
		return data
	})
}


export {
	AUTO_LOGIN,
	LOGOUT,
	USER_GETALISMONEY,
	USER_GETUSERINFO,
	MATCHGAMETOP,
	GETNEWSNOTICE,
	POINTSLIST,
	GAME_MATCHLIST,
	GAME_GETGAMETOPNUM,
	GAME_STATISTICALLEAGUE,
	USER_PLAYMORE,
	DEPOSIT_GETCHANNEL,
	DEPOSIT_PAYALL,
	DEPOSIT_GETONLINEBANKING,
	DEPOSIT_ONLINEPAY,
	USER_REGISTERUSERNAME,
	USER_USERREGISTER,
	SENDMESSAGE,
	USER_FORGETPASSWORD,
	USER_USERBANKCARDINFO,
	USER_BANK_SAVE,
	USER_BANK_LIST,
	USER_HISTORYBILL,
	USER_GETINOUTCASHRECORDS,
	USER_BETRECORD,
	USER_BETCANCELLATIONS,
	GAME_RECENTRECORD,
	GAME_FIGHTRECORD,
	USER_WITHDRAW,
	USER_UPIPHONEUNMBER,
	UPPWDSENDMESSAGE,
	USER_UPPASSWORD,
	USER_RESETSECURITYPASSWORD,
	USER_AGENTHELP,
	USER_MESSAGENOTIFY,
	USER_MESSAGEADISPOSE,
	NOTICES_GETPICTUREBYTYPE,
	GAME_GETTENANCYCONFIG
}
