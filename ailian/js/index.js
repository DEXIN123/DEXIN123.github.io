(function(){
	var bOX = document.getElementsByClassName("bOX")[0];
	var li = bOX.getElementsByTagName("li");
	var ps = bOX.getElementsByClassName("ps");
	var menuP = document.getElementsByClassName("menuP")[0];
	var old = li[0];
	for(var i = 0; i<li.length; i++){
		li[i].index = i;
		li[i].addEventListener("click",function(){//点击事件
			for(var i =0;i<li.length;i++){
				ps[i].classList.remove("menuP");//添加后removemenuP,为空	
			}
			ps[this.index].classList.add("menuP");//添加menuP
		})
	}
	//console.log(li);
}());


(function(){
	window.onload = function(){
		var t1 = new Tab();
		t1.init();
	}
	// 全局变量就是属性
	function Tab(){
		this.oParent = document.getElementById("div1");
		this.aInput = this.oParent.getElementsByTagName("input");
		this.aDiv = this.oParent.getElementsByClassName("dun");
		
	}
// 函数就是方法
	Tab.prototype.init = function(){
		var This = this; 
		console.log(111,this)
		for(var i=0 ; i < this.aInput.length; i++){
			this.aInput[i].index = i;

			this.aInput[i].onclick = function(){
				console.log(222,this)

				// This.change(this);
				 for(var i=0 ; i < This.aInput.length; i++){
						This.aInput[i].className = "";
			 			This.aDiv[i].style.display = "none";
			 		}
			 		this.className = "active";
			 		This.aDiv[this.index].style.display = "block";
			 	}
		
			}
		}

}());