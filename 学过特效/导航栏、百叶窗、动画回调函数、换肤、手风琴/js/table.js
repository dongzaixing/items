var oul=document.getElementById("oul");
var oli=document.getElementsByTagName("li");
var oa=document.getElementsByTagName("a");
var box=document.getElementsByClassName("box");
box[0].style.display="block";
oa[0].style.backgroundColor="pink";


//事件委托
oul.onclick=function(ev){
	var ev=ev||event;
	if(ev.target&&ev.target.nodeName=="A"){
		for(var i=0;i<oli.length;i++){
			oa[i].style.backgroundColor="white";
			box[i].style.display="none";
		}
		ev.target.style.backgroundColor="pink";
		box[ev.target.id].style.display="block";
	}
}

//循环写法
//for(var i=0;i<oa.length;i++){
//	oa[i].zdy=i;//自定义属性
//	oa[i].onclick=function(){
//		for(var i=0;i<oa.length;i++){
//			oa[i].style.background="white";
//			box[i].style.display="none";
//		}
//		this.style.background="pink";
//		box[this.zdy].style.display="block";
//	}
//	console.log(oa[i].zdy)
//}

//jq写法
//$(function(){
//	$('a').click(function(){
//		$('a').css({'background':'white'})
//		$('.box').hide()
//		$(this).css({'background':'pink'})
//		$('.box').eq($(this).parent().index()).show()
//	})
//	
//})


