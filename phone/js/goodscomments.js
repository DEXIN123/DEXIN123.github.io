(function(){
	var manage = document.querySelector(".manage");
	var append = document.querySelector(".append");
	var add_select = document.querySelector(".add_select");
	var back = document.querySelector(".back1");
	console.log(back);

	manage.addEventListener("touchstart",function(){

		append.style.bottom = " 0 ";

	})
	back.addEventListener("touchstart",function(){
  
		add_select.style.right = " -100% ";
	})
	

}());

(function(){
	var add_meg = document.querySelector(".add_meg");
	var add_select = document.querySelector(".add_select");
	add_meg.addEventListener("touchstart",function(){
		add_select.style.right = " 0 ";
	})
}());

(function(){
	var price495 = parseFloat(document.querySelector(".price495").innerHTML.slice(1));

	var coupon = parseFloat(document.querySelector(".coupon").innerHTML.slice(9,12));
	var coupon_light = document.querySelector(".coupon_light");
	coupon_light.toggle1 = null;
	var price =  document.querySelector(".price");
	coupon_light.addEventListener("touchstart",function(){
		if(!coupon_light.toggle){
			this.style.background = "#ff2150";
			coupon_light.toggle = true;


		}else{
			this.style.background = "#fff";
			coupon_light.toggle =false;
		}

		if(coupon_light.toggle == true){

	
			price.innerHTML = price495 - coupon ;

		}else if(coupon_light.toggle == false){

			price.innerHTML =price495;

		}

		
	})
	
	



}());
