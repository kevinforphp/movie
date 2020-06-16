export default {
	// 用户登录
	LOGIN: "/login", //登录
	LOGOUT:'/logout', //登出
	USER_GETUSERINFO:"/user/getUserInfo",//用户详情
	USER_GETALISMONEY:"/user/getAlisMoney",//用户余额
	// 比赛信息
	GAME_MATCHGAMETOP: "/game/matchGameTop", //首页推荐比赛
	GAME_GETTENANCYCONFIG: "/game/getTenancyConfig", //租户配置
	NOTICES_GETNEWSNOTICE: "/notices/getNewsNotice", // 首页滚动公告
	GAME_POINTSLIST: '/game/pointsList', //比赛详情
	GAME_MATCHLIST: '/game/matchList', //市场列表
	GAME_GETGAMETOPNUM: "/game/getGameTopNum", //市场比赛数量
	GAME_STATISTICALLEAGUE: "/game/statisticalLeague", //联盟筛选列表
	GAME_FIGHTRECORD: "/game/fightRecord", //对战记录
	GAME_RECENTRECORD: "/game/recentRecord", // 近期战绩
	USER_PLAYMORE: "/user/playMore", //投注
	DEPOSIT_GETCHANNEL: "/deposit/getChannel", //存款方式
	DEPOSIT_PAYALL: "/deposit/payAll", //入款接口
	DEPOSIT_GETONLINEBANKING: "/deposit/getOnlineBanking", //获取银行卡列表
	DEPOSIT_ONLINEPAY: "/deposit/onlinePay", //网银入款
	USER_WITHDRAW: "/user/withdraw", // 出款
	//账号
	USER_REGISTERUSERNAME: "/user/registerUserName", //账号注册时列表
	USER_USERREGISTER: "/user/userRegister", //注册账号
	SENDMESSAGE: "/sendMessage", //发送短信
	USER_FORGETPASSWORD: "/user/forgetPassword", //忘记密码
	USER_UPIPHONEUNMBER: '/user/upIphoneNumber', //修改手机号码
	USER_UPPASSWORD: '/user/upPassword', //修改登录密码
	UPPWDSENDMESSAGE: '/upPwdSendMessage', //安全中心发送验证码
	USER_RESETSECURITYPASSWORD:'/user/resetSecurityPassword', //修改资金密码
	USER_AGENTHELP:'/user/agentHelp', //上级协助
	//银行卡
	USER_USERBANKCARDINFO: "/user/userBankCardInfo", //用户已绑定的银行卡
	USER_BANK_SAVE: "/user/bank/save", //添加银行卡
	USER_BANK_LIST: "/user/bank/list", //支持的银行列表
	USER_INFOSAFE:"/user/infosafe", //获取入款银行卡
	//历史
	USER_HISTORYBILL: "/user/historyBill", //历史账单
	//交易记录
	USER_GETINOUTCASHRECORDS:"/user/getInoutcashRecords",//交易记录
	//投注记录
	USER_BETRECORD:"/user/betRecord",//投注记录
	USER_BETCANCELLATIONS:"/user/betCancellations",//撤回注单//投注记录
	// 消息通知
	USER_MESSAGENOTIFY:"/user/messageNotify", //消息通知
	USER_MESSAGEADISPOSE:'/user/messageDispose', //一键处理
	//活动
	NOTICES_GETPICTUREBYTYPE:'/notices/getPictureByType',  //活动
}
