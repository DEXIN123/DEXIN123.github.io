(function(){
	var search_input = document.querySelector(".search_input");
	var _delete = document.querySelector(".delete");
	_delete.addEventListener("touchstart",function(){
		search_input.value = "";
	})
}());

(function(){
	var search_input = document.querySelector(".search_input");
	var content_ul = document.querySelector(".content-ul");
	var form = document.querySelector(".form");
	var clear = document.querySelector(".clear");
	var store = [];
	//提交表单
	form.addEventListener("submit",function(){
		var key = search_input.value.trim();
		if(key){
				localforage.getItem("keystore",function(err,value){
				store = value;
				if(store.indexOf(key)<0){
					store.unshift(key);
					if(store.length>10){
						store.length=10;
					}
				}
			
				localforage.setItem("keystore",store);
			})

		}
	});
	//获取缓存的 keystore
	localforage.getItem("keystore").then(function(value){
		if(value){
			var html = "";
			
			value.forEach(function(e,i){
				html += "<li>"+ e +"</li>"
			})
			content_ul.innerHTML = html;
		}
		
	}),

	clear.addEventListener("touchstart",function(){
			localforage.clear().then(function(){
				content_ul.innerHTML = "";

			//重新设置keystore为空，因为clear数组还有空的内容
				localforage.setItem('keystore', []);
			})
	})
	

}());

