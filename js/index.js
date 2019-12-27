/*顶部滑动开始*/
var cover = document.getElementById('cover');
window.onscroll = function(){
	var st = document.documentElement.scrollTop || document.body.scrollTop;
	if(st > 180){
		cover.style.position = 'fixed';
	}else{
		cover.style.position = 'static';
	}
}

/*顶部滑动结束*/
/*轮播图效果开始*/
var box = document.getElementById('box');
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var oNavlist = document.getElementById('dian').children;
var index = 1; //打开页面生效的图片的下标为1
var timer;
var isMoving = false;

box.onmouseover = function () {
	animate(left, {
		opacity: 1
	})
	animate(right, {
		opacity: 1
	})
	clearInterval(timer); //图片停止滚动
}

box.onmouseout = function () {
	animate(left, {
		opacity: 0
	})
	animate(right, {
		opacity: 0
	})
	timer = setInterval(next, 1000); //图片开始接着滚动
}
right.onclick = next;
left.onclick = prev;

function next() {
	if (isMoving) {
		return;
	}
	isMoving = true;
	index++;
	navmove();
	animate(slider, {
		left: -800 * index
	}, function () {
		if (index == 7) {
			slider.style.left = '-800px';
			index = 1;
		}
		isMoving = false;
	});
}

function prev() {
	if (isMoving) {
		return;
	}
	isMoving = true;
	index--;
	navmove();
	console.log("index = " + index);
	animate(slider, {
		left: -800 * index
	}, function () {
		if (index == 0) {
			slider.style.left = '-4800px';
			index = 6;
			console.log("index = " + index);
		}
		isMoving = false;
	});
}
//按钮点击切换事件
for (var i = 0; i < oNavlist.length; i++) {
	oNavlist[i].index = i;
	oNavlist[i].onclick = function () {
		index = this.index + 1;
		navmove();
		animate(slider, {
			left: -800 * index
		});
	}

}
//图片切换时按钮样式跟着切换
function navmove() {
	for (var i = 0; i < oNavlist.length; i++) {
		oNavlist[i].className = "";
	}
	if (index > 6) {
		oNavlist[0].className = "active";
	} else if (index <= 0) {
		oNavlist[5].className = "active";
	} else {
		oNavlist[index - 1].className = "active";
	}
}


//页面打开时自动滚动切换
timer = setInterval(next, 1000);


function getStyle(obj,attr){
	if (obj.currentStyle) {
  		return obj.currentStyle[attr];
  	} else {
  		return getComputedStyle(obj, null)[attr];
  	}
}

function animate(obj, json, callback) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function () {
		var flag = true;
		for (var attr in json) {
			(function (attr) {
				if (attr == "opacity") {
					var now = parseInt(getStyle(obj, attr) * 100);
					var dest = json[attr] * 100;
				} else {
					var now = parseInt(getStyle(obj, attr));
					var dest = json[attr];
				}
				var speed = (dest - now) / 6;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
				if (now != dest) {
					flag = false;
					if (attr == "opacity") {
						obj.style[attr] = (now + speed) / 100;
					} else {
						obj.style[attr] = now + speed + "px";
					}
				}
			})(attr);
		}
		if (flag) {
			clearInterval(obj.timer);
			callback && callback(); //如果回调函数存在，就调用回调函数
		}
	}, 40);
}
/*图片轮播图效果结束*/
/*公告轮播*/
var ul = document.getElementById('ul');
function show(){
	var top = ul.offsetTop - 1;
	ul.style.top = top + "px";
	if(-1 * ul.offsetTop >= ul.offsetHeight / 2 ){
		ul.style.top = 0;
	}
}
var t = setInterval(show,20);
var li = document.getElementById('ul').children;
for (var i = 0; i < li.length; i++) {
    //移出事件
    li[i].onmouseout = function () {
        //不能加 var
        t = setInterval(show, 20);

    };
    //移入事件
    li[i].onmouseover = function () {
        clearInterval(t);
    };
}
/*公告轮播结束*/
/*金额转换开始*/
var input = document.getElementById('in');
var price = document.getElementById('price');
function showPrice(that){
	price.innerHTML = "￥" + that.value;
}

/*金额转换结束*/
/*浮标动态开始*/
var list = document.getElementById('fubiao').children;
var erwei = document.getElementById('erwei');
var imging = document.getElementById('imging');
var p = document.getElementById('p');
var btnn = document.getElementById('btnn');
var div = document.getElementById('div');
for(var i = 0; i < list.length; i++){
	list[i].index = i;
	list[i].setAttribute('onmouseover','spread(this)');
	list[i].setAttribute('onmouseout','out()');
}
function spread(that){
	for(var j = 0;j < list.length;j++){
		list[j].style.width = 45 + "px";
	}that.style.width = 123 + "px";
	if(that.index == 1){
		div.style.display = "block";
	}
	if(that.index == 2){
		erwei.src = "";
		imging.src = "./img/erwei.png";
		div.style.display = "none";
	}
	if(that.index == 0 || that.index == 3){
		erwei.src = "./img/serwei.png";
		imging.src = "";
		div.style.display = "none";
	}

}
function out(){
	for(var j = 0;j < list.length;j++){
		list[j].style.width = 45 + "px";
	}
}

/*浮标动态结束*/