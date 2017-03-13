(function(){
	var balance = document.querySelector('.balance');
	var span = balance.querySelectorAll('span');

	for(var i=0; i<span.length;i++){
		span[i].addEventListener("touchstart",function(){
			for(var i=0; i<span.length;i++){
				span[i].classList.remove("redshow");
			}
			this.classList.add("redshow");

		})
	}
}())