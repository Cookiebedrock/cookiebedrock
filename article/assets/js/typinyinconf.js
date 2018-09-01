window.onload = function() {
	var demo = new Typinyin();
	demo.attach('#typinyin_demo'); // 绑定元素
	demo.setOptions({
		sentences: [{
			ch: [ {
				pause: 40
			},"欢迎", "来到", "垃圾堆(Ｔ▽Ｔ)"],
			py: ["", "huanying", "laidao", "lajidui"],
		}, {
			ch: ["在这里","你可以","发现许多。"],
			py: ["zaizheer", "youis","merbq"], // 用"\b" 来删除一个字符
		}, {
			ch: ["女装和", "编程会改变世界", "（づ￣3￣）づ╭❤～"],
			py: ["xihuan", "moegirls", "!!!∑(ﾟДﾟノ)ノ"],
		}, {
			ch: ["让", "我们", "成为", "好朋友吧", "_(:з」∠)_"], // 用"\b" 来删除一个字符
			py: [
				["ε = = (づ′▽`)づ ", {
					pause: 281
				}, {
					del: 14
				} /* 暂停281毫秒后删除十四个字符 */ , ""], "ni", "chengwei", "RBQ", "(*/ω＼*)"
			],
		}, {
			ch: ["立即", "开启新世界的大门", "吧", "！"],
			py: ["liji", "papapa", "ba", "！"]
		}], // 需要输入的句子
		startDelay: 1000, // 启动延时，以毫秒记
		typeSpeed: 100, // 打字速度，以毫秒记
		pause: 1000, // 每一句话打完后的停顿时间，以毫秒记
		backSpeed: 60, // 删除文字的速度，以毫秒记
		cursorChar: "▃", // 光标字符
		loop: false, // 是否循环播放
	});
	demo.init(); // 初始化并开始打字
	var demo01 = new Typinyin();
	demo01.attach('#typinyin_demo01'); // 绑定元素
	demo01.setOptions({
		sentences: [{
			ch: [{
				pause: 40
			}, "2"],
			py: ["C"]//保留
		}], // 需要输入的句子
		startDelay: 1000, // 启动延时，以毫秒记
		typeSpeed: 100, // 打字速度，以毫秒记
		pause: 1000, // 每一句话打完后的停顿时间，以毫秒记
		backSpeed: 60, // 删除文字的速度，以毫秒记
		cursorChar: "|", // 光标字符
		loop: false, // 是否循环播放
	});
}