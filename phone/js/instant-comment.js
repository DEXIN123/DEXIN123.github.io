(function(){
	var assess_move = document.querySelectorAll(".assess_move");
	var star1 = assess_move[0].querySelectorAll("span");
	var star2 = assess_move[1].querySelectorAll("span");
	var star3 = assess_move[2].querySelectorAll("span");
console.log(assess_move);
console.log(star1);

	for(var i=0; i<star1.length; i++){
		star1[i].index = i+1;
		star1[i].addEventListener("touchstart",function(){
			assess_move[0].setAttribute("style","background: url('img/assess/pic_star1.png') -"+(3.219 - this.index*0.641)+"rem 0 no-repeat; background-size:6.25rem 0.453rem;");
		})
	}

	for(var i=0; i<star2.length; i++){
		star2[i].index = i+1;
		star2[i].addEventListener("touchstart",function(){
			assess_move[1].setAttribute("style","background: url('img/assess/pic_star1.png') -"+(3.219 - this.index*0.641)+"rem 0 no-repeat; background-size:6.25rem 0.453rem;");
		})
	}
	for(var i=0; i<star3.length; i++){
		star3[i].index = i+1;
		star3[i].addEventListener("touchstart",function(){
			assess_move[2].setAttribute("style","background: url('img/assess/pic_star1.png') -"+(3.219 - this.index*0.641)+"rem 0 no-repeat; background-size:6.25rem 0.453rem;");
		})
	}

}());