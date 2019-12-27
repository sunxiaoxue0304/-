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
/*净含量开始*/
var list = document.getElementById('list').children;
var choice = document.getElementById('choice');
for(var i = 0; i < list.length;i++){
	list[i].setAttribute('onclick','change(this)');
}
function change(that){
	for(var i = 0;i < list.length;i++){
		list[i].className ="";
	}
	that.className = "choose";
	choice.innerHTML = '"' +that.children[0].innerHTML + '"';
	console.log(choice.innerHTML);

}
/*净含量结束*/
/*数量变化开始*/
var input = document.getElementById('input');
var jia = document.getElementById('jia');
var jian = document.getElementById('jian');
var rest = document.getElementById('rest');
var value = document.getElementById('input').value;

jia.setAttribute('onclick','test()');
jian.setAttribute('onclick','tes()');
input.setAttribute('onchange','show(this)');


function show(that){
	value = document.getElementById('input').value;
	console.log(value);
	/*rest.innerHTML = 5-value;*/

}
function test(){
	jian.className = "";
	jia.className = "";
	if(value < 5){
		value ++;
		jia.className = "click";
	} 
	if(value ==  5){
		jia.className = "noclick";
	}
	input.value = value;
	/*rest.innerHTML = 5-value;*/
}
function tes(){
	jian.className = "";
	jia.className = "";
	if(value > 1){
		value --;
		jian.className = "click";
	} 
	if(value == 1){
		jian.className = "noclick";
	}
	input.value = value;
}
/*数量变化结束*/
/*加入购物车开始*/
var shop = document.getElementById('shop');
var popup =document.getElementById('popup');
var kuang = document.getElementById('kuang');
var pur = document.getElementById('pur');
var shopping = document.getElementById('shopping');
shop.setAttribute('onclick','pop()');
pur.setAttribute('onclick','faded()');
shopping.setAttribute('onclick','faded()');

function pop(){
	kuang.style.display = "block";
	popup.className = "popup";
}
function faded(){
	kuang.style.display = "none";
	popup.className = "";
}
/*加入购物车结束*/
/*图片切换*/
var picture = document.getElementById('picture');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var ull = document.getElementById('ull').children;
var Bimg = document.getElementById("Bimg"); // 放大镜
var num = 0;
prev.setAttribute('onclick','zuo()');
next.setAttribute('onclick','you()');

for(var i = 0;i<ull.length;i++){
	ull[i].index = i;
	ull[i].setAttribute('onmouseover','task(this)');
}
function task(that){
	num = that.index;
	for(var j = 0;j < ull.length; j++){
		ull[j].className = "";
	}
	if(that.index == 0){
		Bimg.src = "../img/pp0.jpeg"
		picture.src = "../img/pp0.jpeg";
		picture.style.hight = 408 + "px";
		picture.style.width = 408 + "px";
		ull[that.index].className = "bian";
	}
	if(that.index == 1){
		Bimg.src = "../img/pp1.jpeg"
		picture.src = "../img/pp1.jpeg";
		ull[that.index].className = "bian";
	}
}
function zuo(){
	num--;
	for(var j = 0;j < ull.length; j++){
		ull[j].className = "";
	}
	if(num == -1){
		num = 1;
		picture.src = "../img/pp1.jpeg";
		picture.style.hight = 408 + "px";
		picture.style.width = 408 + "px";
		ull[num].className = "bian";
	}else{
		picture.src = "../img/pp0.jpeg";
		ull[num].className = "bian";
	}
}
function you(){
	num++;
	for(var j = 0;j < ull.length; j++){
		ull[j].className = "";
	}
	if(num == 2){
		num = 0;
		picture.src = "../img/pp0.jpeg";
		picture.style.hight = 408 + "px";
		picture.style.width = 408 + "px";
		ull[num].className = "bian";
	}else{
		picture.src = "../img/pp1.jpeg";
		ull[num].className = "bian";
	}
}
/*放大镜功能开始*/
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var sli = document.getElementById('sli');
var box = document.getElementById('box');
img1.onmouseover = function(){
	sli.style.display = 'block';
	img2.style.display = 'block';
}
img1.onmouseout = function(){
	sli.style.display = 'none';
	img2.style.display = 'none';
}
img1.onmousemove = function(ev){
	var st = document.documentElement.scrollTop || document.body.scrollTop;
	var ev = ev || window.event;

	var oL = ev.clientX - box.offsetLeft - sli.offsetWidth / 2;
	var oT = ev.clientY - box.offsetTop + st - sli.offsetHeight / 2;

	var oMaxw = img1.offsetWidth - sli.offsetWidth;
	var oMaxh = img1.offsetHeight - sli.offsetHeight;

	oL = oL > oMaxw ? oMaxw : oL < 0 ? 0 : oL;
	oT = oT > oMaxh ? oMaxh : oT < 0 ? 0 : oT;

	sli.style.left = oL + 'px';
	sli.style.top = oT + 'px';

	var scale = img2.offsetWidth / sli.offsetWidth;
	Bimg.style.left = -scale * oL + 'px';
	Bimg.style.top = -scale * oT + 'px';
}
/*放大镜功能结束*/