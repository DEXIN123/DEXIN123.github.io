(function(){
	var cm_ul2 = document.querySelector(".cm_ul2");
	var li = cm_ul2.querySelectorAll("li");

	var cm_ul3 = document.querySelectorAll(".cm_ul3");
	var slide = document.querySelector(".slide");
	var index = 0;
	var isFinish = false;
	for(var i=0; i<li.length;i++){
		li[i].index = i;
		li[i].addEventListener("touchstart",function(){
			for(var i=0; i<li.length;i++){
				li[i].style.color = "#ffffff";
			}
			index = this.index;
			this.style.color = "#000000";
			slide.setAttribute("style"," transition: all 1s;transform: translateX(-"+33.33*this.index+"%)");
    
		})
	}

	var curX;
	var tarX;
	document.addEventListener("touchstart",function(e){
		curX = e.changedTouches[0].pageX;
		/*console.log(curX);*/

		document.addEventListener("touchmove",function(e){
			tarX = e.changedTouches[0].pageX;
			/*console.log(tarX);*/
		document.addEventListener("touchend",function(e){
				if(index<2){
								
					left_move();
				}	
				if(index >0){
					
					right_move();
				}
			

				


				function left_move(){
					if(curX-tarX > 20 && !isFinish){
						isFinish =true;
						index = index + 1;
						console.log(index);
						slide.setAttribute("style"," transition: all 0.5s;transform: translateX(-"+33.33*index+"%)");
						slide.addEventListener("webkitTransitionEnd", function(){			
						isFinish = false;
						})

					}
				}

				function right_move(){
					if( tarX - curX > -20  && !isFinish){
					
						isFinish = true;
						index = index - 1;
						console.log(index, "right");
						slide.setAttribute("style"," transition: all 0.5s;transform: translateX(-"+33.33*index+"%)");
						slide.addEventListener("webkitTransitionEnd", function(){
					
							isFinish =false;
							
							
						})

					}
				}


				// isFinish = false;
			})
		})

	})



}())