//jQ
/*$(function(){
	$('#btn').hover(function(){
		$('span').first().show(100,function run(){//回调函数
			$(this).next().show(100,run).animate({'top':'50px'})
		}).animate({'top':'50px'})
	},function(){
		$('span').last().animate({'top':'0px'},300).hide(100,function hid(){
			$(this).prev().not('button').animate({'top':'0px'},300).hide(100,hid)
		})
	})	
})*/



//一次性计时器
/*setTimeout(function(){
	$('span').first().show(100,function run(){//回调函数
		$(this).next().show(100,run).animate({'top':'50px'})
	}).animate({'top':'50px'})
},500)*/




//js
/*var btn=document.getElementById("btn");
var span=document.getElementsByTagName("span");
var time=null;
btn.onclick=function(){
	var num=0;
	time=setInterval(function(){
		span[num].style.display="block";
		num++;
		if(num>=span.length){
			clearInterval(time);		
		}
	},100)	
}*/



