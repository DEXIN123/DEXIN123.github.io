// 删除search的内容
(function(){
	var _del = document.querySelector(".delete");
	var search_input=  document.querySelector(".search_input");
	_del.addEventListener("touchstart",function(){
		search_input.value = "";
	})

}());

/* 商品列表的无限加载 */
(function(){

	var like_list = $(".like-list");
	var like_ul = $("#like-ul");
	var winH = $(window).height();
	var wrap;
	//做一个加载的div
	function appendLoading(like_list){
		var html = "";
		html +=  '<div class="loading">';
		html += '<img src="img/icon_loading.png" alt="">';
		html +=  '<span>加载</span>';
		html +=  '</div>';
		var wrap;
		wrap = $(html);

		like_list.append(wrap);
		return wrap;
	}

	var loading = appendLoading(like_list)[0];
	var loadingTop = 0;
	var isFinish = false; 
	
	$(".content").on("scroll",function(){
		loadingTop = loading.getBoundingClientRect().top;
		if(loadingTop < winH && !isFinish){
			ajaxLoad();
			isFinish = false;	
		}
	})

	function ajaxLoad(){
		$.ajax({
		  type: "get",
		  url: "goods1.json",
		  // data: { name: "John", location: "Boston" }
		}).done(function( msg ) {
			var html = "";
		  	for(key in msg){
		  		html += '<li><a href="#"><img src=" '+ msg[key]["img"] +' "><p>'+ msg[key]["describe"] +'</p><span><i>￥</i>'+ msg[key]["price"] +'</span><s>'+ msg[key]["s"] +'</s></a></li>';
		  	}
		  	setTimeout(function(){
		  		like_ul.append(html);
		  		isFinish = false;
		  	},1000)
		  	
		});
	}

}());



(function(){
	var like_ul = document.querySelector("#like-ul");
	var price = document.querySelector(".price");
	var price_show = document.querySelector(".price_show");
	var price_down = document.querySelector(".price_down");
	var price_up = document.querySelector(".price_up");


	price.addEventListener("touchstart",function(){
		price_show.classList.toggle("block");
	})



	var sort = document.getElementsByClassName("sort");
	var li_sort = document.getElementsByClassName("li_sort");

	

function doSort(obj,toggle){
		var num_li;
		obj.addEventListener("touchstart",function(){
			num_li = [];
			price_show.classList.toggle("block");
			
			for(var i = 0; i < li_sort.length; i++){

			   	num_li.push(li_sort[i].cloneNode(true));
			}
			like_ul.innerHTML = ""; 

			num_li.sort(function(a,b){
				var num1 = parseFloat(a.getElementsByClassName("sort")[0].innerHTML);
				var num2 = parseFloat(b.getElementsByClassName("sort")[0].innerHTML);
				if(toggle){
					return num2>num1;
				}else{
					return num2<num1;
				}
			});
			for(var i = 0 ; i<num_li.length; i++){
				like_ul.appendChild(num_li[i]);
			}
		})
}
doSort(price_down,true);
doSort(price_up,false);


var re_top = document.querySelector(".re_top");




re_top.addEventListener("touchstart",function(){
	$(".content").animate({ scrollTop: 0 }, 500); 
})

}());


// 点击显示点击消失
(function(){
	var btn = document.getElementsByClassName("btn")[0];

	var select_btn = document.getElementsByClassName("select_btn")[0];
	var select_cat = document.getElementsByClassName("select_cat")[0];

	btn.addEventListener("touchstart",function(){
		select_cat.classList.toggle("select_dis") ;

	})
	
	select_btn.addEventListener("touchstart",function(){
		select_cat.classList.toggle("select_dis") ;

	})

	var curX;
	var tarX;
	var select_cat = document.getElementsByClassName("select_cat")[0];
	var side1 = select_cat.offsetWidth;
	var select_con = document.getElementsByClassName("select_con")[0];
	var side2 = select_con.offsetWidth;
	var figure = side1 - side2;

	select_cat.addEventListener("touchstart",function(e){
		curX = e.changedTouches[0].pageX;

		select_cat.addEventListener("touchmove",function(e){
			

			select_cat.addEventListener("touchend",function(e){
				tarX = e.changedTouches[0].pageX;
				if(tarX - curX >25){
					select_cat.classList.toggle("select_dis") ;
				}
			})
		})

		if(figure > curX){
			select_cat.classList.toggle("select_dis") ;
		}

	})




}());

//点击切换
(function(){
	var changelist = document.getElementsByClassName("changelist")[0];
	var like_ul = document.getElementsByClassName("like_ul")[0];
	var ul_release = document.getElementsByClassName("ul_release")[0];
	// var toggle = true;
	changelist.addEventListener("touchstart",function(){
		like_ul.classList.toggle("display");
		ul_release.classList.toggle("display");
	})
}());