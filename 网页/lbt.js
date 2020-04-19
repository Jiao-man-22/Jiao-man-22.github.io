window.onload = function() {
	var prev = document.getElementById('pre');
	var next = document.getElementById('next');
	var Oinner_box = document.getElementById("inner_box"); //获得内部盒子（部分可见）
	var OplayBox = document.getElementById("playBox"); //获得展示框（可见部分）

	function animate(offset) {
		
		var newleft = Oinner_box.offsetLeft + offset; //获取父容器左侧定位值并移动offset的距离存入newleft

		if(newleft < -3000) {
			Oinner_box.style.left = 0 + "px";
		} else if(newleft > 0) {
			Oinner_box.style.left = -3000+ "px";
		} else {
			Oinner_box.style.left = newleft + 'px';
		}
	}
	prev.onclick = function() { //向左的单击事件

		animate(1000);
	}

	next.onclick = function() { //向右的单击事件
		animate(-1000)
	}
	var timer;

	function play() {
		timer = setInterval(function() { //设置间歇调用，时间间隔为1500毫秒
			next.onclick() //此处是自动向右切换，如果想设置为向左切换，把next换为prev即可
		}, 1500);
	}
	play(); //实现自动调用
	//轮播结束
	OplayBox.onmouseover=function(){
		clearInterval(timer);
	}
	OplayBox.onmouseout=function(){
			clearInterval(timer);
		var timer=setInterval(play(),3000)
	}

}