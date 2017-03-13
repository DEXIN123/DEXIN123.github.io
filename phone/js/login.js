(function(){

	// 判断正则
	var username = document.getElementsByName("username")[0];
	var password = document.getElementsByName("password")[0];
	var vcode = document.getElementsByName("vcode")[0];
	var submit = document.getElementsByClassName("submit")[0];



	submit.addEventListener("touchstart",function(e){
		if(!user() || !psw()){
			e.preventDefault();
		}
	});

	username.addEventListener("change",function(){

		hasValue();
	});

	password.addEventListener("change",function(){
		hasValue();
	});

	vcode.addEventListener("change",function(){
	
		hasValue();
	});


	function hasValue(){
		if(username.value.trim() && password.value.trim() && vcode.value.trim()){
			submit.classList.add("active");
		}
	}



	function user(){

		var user_value = username.value;

		var reg = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/; 
		var phone = /1[3-9]{10}/;
		console.log(reg.text(user_value));
		if (reg.text(user_value) || phone.text(user_value)) {

			return true;
		}
		return false;
	}

	function psw(){

		var val = password.value;

		// 密码正则
		var reg = /^[\w_\-@\#\$]{8,16}/;

		if(reg.test(val)){
			return true;
		}
		return false;
	}

}());

(function(){
	var psw_ctrl = document.getElementsByClassName("psw-ctrl")[0];
	var btn = psw_ctrl.getElementsByTagName("span")[0];
	var password =  document.getElementsByName("password")[0];
	var off = false;  
	btn.addEventListener("touchstart",function(){
		off = off ? false : true;

		btn.classList.toggle("active");
		
		if(off){
			password.setAttribute("type","text");
		}else{
			password.setAttribute("type","password");
		}
	});

}());