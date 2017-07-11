//点击回到顶部:jQ计时器方法
	$('.go-top li').css({'transform':'rotateZ(-90deg)'})
	$('#letgo').click(function(){
		time=setInterval(function(){
			$(window).get(0).scrollBy(0,-80)
			if($(document.body).get(0).scrollTop<=0){
				clearInterval(time)
			}
		},20)
	})
	

//回到顶部:js方法
//var letgo=document.getElementById("letgo");
//letgo.onclick=function(){
//	time=setInterval(function(){
//		window.scrollBy(0,-80);
//		if(document.body.scrollTop<=0){
//			clearInterval(time)
//		}
//	},20)
//}