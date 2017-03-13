
(function(){

var content = document.getElementsByClassName("content")[0];
var footer = document.getElementById("footer");
var winh = window.innerHeight - footer.offsetHeight;
var ul = document.getElementById("like-ul");
var isFinish = false;

function appendLoading(content){

	var fragment =document.createDocumentFragment();
	var wrap = document.createElement("div");
	var img = document.createElement("img");
	var span = document.createElement("span");

	wrap.className = "loading";
	img.src = "img/icon_loading.png";
	span.innerHTML = "正在加载";

	wrap.appendChild(img);
	wrap.appendChild(span);
	fragment.appendChild(wrap);
	content.appendChild(fragment);

	return wrap;
}

	var  loading = appendLoading(content);
	var loadTop = 0;

 	content.addEventListener("scroll",function(){
 		loadTop = loading.getBoundingClientRect().top;
 		if(loadTop < winh && !isFinish){
 			ajaxLoad();
 			isFinish = true;
 		}
 	})


function ajaxLoad(){

		//创建一个ajax对象
		var xhr = new XMLHttpRequest();

		// 需要请求的链接 / 文件（html.json）
		xhr.open("get","goods.json",true);

		// 绑定一个change监听事件
		xhr.onreadystatechange = function(){

			//当请求完成（ =4）并且请求成功（ =200）
			if(xhr.readyState == 4 && xhr.status == 200){

				//接收请求回来的文本
				var res = xhr.responseText;

				var obj = JSON.parse(res);

				var html = "";

				for(var key in obj){
					html += '<li><a href="#"><img src=" '+ obj[key]["img"] +' "><p> '+ obj[key]["describe"]+' </p><span><i>￥</i>'+ obj[key]["price"] +'</span><s>'+ obj[key]["s"] +'</s></a></li>'
				}

				setTimeout(function(){
					ul.insertAdjacentHTML("beforeEnd",html);
					isFinish = false;
				},2000);
				
			}
		}

		// 一个命令 开发发送
		xhr.send(null);

	}

}());


(function(){
	
	var ul = document.getElementsByClassName("newsAuto")[0];
	var ali = ul.getElementsByTagName("li");
	var lih = ali[0].offsetHeight;
	var index = 0;
	var a = document.getElementsByClassName("hotnews")[0];
	var clone = ali[0].cloneNode(true);
	ul.appendChild(clone);
	

	setInterval(function(){

		if(index == 4){
			ul.style.marginTop = 0;
			index = 0;
		}

		index++;

		ul.style.marginTop = index * lih * -1 + "px";

	},3000);
}());

(function(){
	var popping = document.getElementById("popping");
	var input_focus = document.getElementsByClassName("input_focus")[0];
	var num = 100;
	var back = document.getElementsByClassName("back")[0];
	var search_input = document.getElementsByClassName("search_input")[0];

input_focus.addEventListener("touchstart",function(){
		var timer = setInterval(function(){
			if(num>0){
				num--;
				
			}else if(num<=0){
				num = 0;
				clearInterval(timer);
			}
			popping.setAttribute("style","top:"+num+"%;");
			
		},100/60)	
});

back.addEventListener("touchstart",function(e){
		e.preventDefault();
		var timer2 = setInterval(function(){
			if(num<100){
				num++;
			}else if(num>=100){
				num = 100;
				clearInterval(timer2);
			}
			popping.setAttribute("style","top:"+num+"%;");
			
			
		},100/60)
	});
}())