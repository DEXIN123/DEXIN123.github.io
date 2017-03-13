(function(){
	var detail = document.querySelector(".detail");
	var size_pop = document.querySelector(".size_pop");
	var pop_suer = document.querySelector(".pop_suer");
	var cancel = document.querySelector(".cancel");

	detail.addEventListener("touchstart",function(){
		size_pop.classList.toggle("pop_hidden");
	})

	pop_suer.addEventListener("touchstart",function(){
		size_pop.classList.toggle("pop_hidden");
	})

	cancel.addEventListener("touchstart",function(){
	size_pop.classList.toggle("pop_hidden");
	})
}());

(function(){
	var size_pop = document.querySelector(".size_pop");
	var pop_wrap = document.querySelector(".pop_wrap");
	var curY;
	var curX;
	var tarX;
	var H1 = size_pop.clientHeight;
	var H2 = pop_wrap.clientHeight;
	var figure = H1 - H2;

	size_pop.addEventListener("touchstart",function(event){
		curY = event.changedTouches[0].pageY;
		curX = event.changedTouches[0].pageX;
		if(figure > curY){
			size_pop.classList.toggle("pop_hidden");
		}	
		size_pop.addEventListener("touchmove",function(event){
			tarX =event.changedTouches[0].pageX;
			size_pop.addEventListener("touchend",function(event){
				if(tarX - curX > 25){
					size_pop.classList.toggle("pop_hidden");
				}
				
			})
		})
	})

}());

(function(){
	var buying_auto = document.querySelector(".buying_auto");
	var buying_ul1 = document.querySelector(".buying_ul1");
	var li_a = buying_ul1.querySelectorAll("li");
	var ul_a = buying_auto.querySelectorAll("ul");


	for (var i = 0 ; i < li_a.length ; i++) {
		li_a[i].index = i ;
		li_a[i].addEventListener("touchstart",function(){
			for(var i = 0 ; i < li_a.length ; i++){
				ul_a[i].style.display = "none";
			}
			ul_a[this.index].style.display = "flex"
		})
	}

}());