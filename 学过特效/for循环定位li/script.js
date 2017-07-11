var oul=document.getElementById("oul");
var oli=document.getElementsByTagName("li");

//双层for循环
function twoFor(){
	for(var i=0;i<4;i++){
		for(var j=0;j<6;j++){
			var oli=document.createElement("li");
			oli.style.backgroundPosition=j*-100+"px "+i*-100+"px";//背景图片定位
			oli.style.left=(j*100)+"px";//li定位
			oli.style.top=(i*100)+"px";
			oul.appendChild(oli);	
		}
	}
}
twoFor()


//单层for循环
/*function oneFor(){
	var n=-1
	for(var i=0;i<24;i++){
		if(i%6==0){
			n+=1
		}
		var oli=document.createElement("li");
		oli.style.backgroundPosition=(i%6)*-100+"px "+n*-100+"px";//背景图片定位
		oli.style.left=((i%6)*100)+"px";//li定位
		oli.style.top=(n*100)+"px";
		oul.appendChild(oli);
	}
}
oneFor()*/


	//事件委托方法
	$(function(){
	
	$('#oul').on('hover','li',function(){
		$(this).css({'transform':'scale(0.6)'}).siblings().css({'transform':'scale(1)'})
	},function(){
		$(this).css({'transform':'scale(1)'})
	})
	
	
	//常规时间绑定方法
//	$('li').on('mouseover',function(){
//		$(this).css({'transform':'scale(0.6)'}).siblings().css({'transform':'scale(1)'})
//	})
//
//	$('li').on('mouseout',function(){
//		$(this).css({'transform':'scale(1)'})
//	})
	
})


