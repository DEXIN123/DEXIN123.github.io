(function(){
	var content = document.querySelector(".content");
	content.addEventListener("touchstart",function(e){
		var target = e.target;

		switch(target.dataset.state){
			case "red" : red(target); 
			break;

		}
	})

	function red(current){
		var i_state = document.querySelectorAll('i[data-state="red"]');

			for(var i=0;i<i_state.length;i++){
				i_state[i].classList.remove("red");
				i_state[i].classList.add("white");
			}
			current.classList.add("red");
			current.classList.remove("white");
			current.target = true;

			var sure = current.parentNode.parentNode.parentNode.parentNode;
			console.log(sure);
			var sure_parent = sure.parentNode;
			if(current.target == true){

				var ele = sure_parent.removeChild(sure);
				console.log(ele);

				sure_parent.insertBefore(ele,sure_parent.children[0]);
			
			}

	}
}())