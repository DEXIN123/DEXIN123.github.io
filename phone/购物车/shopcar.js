(function(){
	var container = document.getElementsByClassName("container")[0];
	var arr_price = [];


	container.addEventListener("touchstart",function(e){
		var target = e.target;

		switch(target.dataset.state){
			case "mark_A" :mark_A(target);
			break;
			case "mark_B" :mark_B(target);
			break;
			case "light_all" :light_all(target);
			break;
			case "plus" :plus(target);
			break;
			case "minus" :minus(target);
			break;

			case "mark_del" :alert(123);mark_del(target);
			break;


		}
	})

	function mark_A(current){
	var mark_a = current.parentNode.parentNode.nextElementSibling.querySelectorAll("li>i");
		if(!current.toggle){
			current.classList.add("red");
			current.classList.remove("white");
			current.toggle = true;
			for(var i = 0; i < mark_a.length; i++){
				mark_a[i].classList.add("red");
				mark_a[i].classList.remove("white");
				mark_a[i].toggle = true;
			}
		}else{
			current.classList.add("white");
			current.classList.remove("red");
			current.toggle = false;
			for(var i = 0; i < mark_a.length; i++){
				mark_a[i].classList.add("white");
				mark_a[i].classList.remove("red");
				mark_a[i].toggle = false;
			}
		}
		mark_all();
		total();

	}

	function mark_B(current){
		if(!current.toggle){
			current.classList.add("red");
			current.classList.remove("white");
			current.toggle = true;
		}else{
			current.classList.add("white");
			current.classList.remove("red");
			current.toggle = false;
		}
		var mark_b = current.parentNode.parentNode.querySelectorAll("li>i");
		var mark_a = current.parentNode.parentNode.previousElementSibling.querySelectorAll("p>i")[0];
		var arr_b = [];
		for(var i = 0; i < mark_b.length; i++){
			arr_b.push(mark_b[i].toggle+"");	
		}
		if(arr_b.indexOf("false")< 0 && arr_b.indexOf("undefined")<0){
			mark_a.classList.add("red");
			mark_a.classList.remove("white");
			mark_a.toggle = true; 
		}else if(arr_b.indexOf("false")>= 0 || arr_b.indexOf("undefined")>=0){
			mark_a.classList.add("white");
			mark_a.classList.remove("red");
			mark_a.toggle = false; 
		}

		mark_all();
		total();

	}

	function mark_all(){
		var up = document.querySelectorAll(".up");
		var light = document.querySelector("#all");
		var arr_up = [];
		for(var i = 0; i < up.length; i++){
			arr_up.push(up[i].toggle+'');
		}
		if(arr_up.indexOf("false")< 0 && arr_up.indexOf("undefined")<0){
			light.classList.add("red");
			light.classList.remove("white");
			light.toggle = true;
		}
		if(arr_up.indexOf("false")>= 0 || arr_up.indexOf("undefined")>=0){
			light.classList.add("white");
			light.classList.remove("red");
			light.toggle = false;
		}

	
	}

	function light_all(){
		var light = document.querySelector("#all");
		var up = document.querySelectorAll(".up");

		if(light.toggle == false || light.toggle == undefined){
			light.classList.add("red");
			light.classList.remove("white");
			light.toggle = true;
			for(var i = 0; i < up.length; i++){
				up[i].classList.add("red");
				up[i].classList.remove("white");
				up[i].toggle = true;
			}
		}else if(light.toggle==true){
			light.classList.add("white");
			light.classList.remove("red");
			light.toggle = false;
			for(var i = 0; i < up.length; i++){
				up[i].classList.add("white");
				up[i].classList.remove("red");
				up[i].toggle = false;
			}
		}
		total();
	}




	var num=1;
	function plus(current){
		
		var em = current.previousElementSibling;

		var minus = current.previousElementSibling.previousElementSibling;
		if(++num > 0){
			minus.style.color = "#000";
		}
		em.innerHTML = num;
		total();
	}

	function minus(current){
		var em = current.nextElementSibling;
		num--;
		
		if(num <= 0){
			num = 0;
			em.innerHTML = num;
			current.style.color = "#f7f7f7";
			return false;
		}
		em.innerHTML = num;
		total();
	}

		function total(){
			var price = document.querySelectorAll('i[data-state="mark_B"]');
			var total = document.querySelector('.total');
			var total_save =  document.querySelector('.total_save');
			var balance = document.querySelector('.balance');

			var arr = [];
			var arr_balance = [];
			var conut1 = 0;
			var conut2 = 0;
			for(var i = 0; i < price.length; i++){
				arr.push(price[i].toggle+"");
			}

			for(var i = 0; i < arr.length; i++){
				if(arr[i] == "true"){
					arr_balance.push(arr[i]);
					var num= parseInt(price[i].nextElementSibling.nextElementSibling.querySelector('em').innerHTML);
					var money_save =  parseFloat(price[i].nextElementSibling.nextElementSibling.nextElementSibling.querySelector('s').innerHTML.slice(1));
					console.log(money_save);
					var money= parseFloat(price[i].nextElementSibling.nextElementSibling.nextElementSibling.querySelector('.mark_price').innerHTML.slice(1));	
					conut1 += money * num;
					conut2 += (money-money_save) * num;
				}
			}
			
			total.innerHTML = conut1.toFixed(2);
			total_save.innerHTML = conut2.toFixed(2); 
			balance.innerHTML = arr_balance.length;
		}

		function mark_del(current) {
			
			var shop_len = current.parentNode.parentNode.parentNode.querySelectorAll('li');
			if(shop_len.length == 1){
				current.parentNode.parentNode.parentNode.parentNode.remove();
			}else{
				current.parentNode.parentNode.remove();
			}
		}



}());

