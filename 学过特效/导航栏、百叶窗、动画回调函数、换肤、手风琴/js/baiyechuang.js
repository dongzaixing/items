$(function(){
//	给所有的图片定位
	$('.box').each(function(index,element){
		$(this).css({'left':''+index*50+'px'})
	})
//	定位做法
	$('.box').click(function(){//用hover的话要在动画之前加stop
		for(var i=0;i<=$(this).index();i++){
			$('.box').eq(i).animate({'left':''+(i*50)+'px'},500)
		}
		for(var i=$(this).index()+1;i<$('.box').length;i++){
			$('.box').eq(i).animate({'left':''+(i*50+300)+'px'},500)
		}
	})
	
	
//	浮动做法
	/*$('.box').hover(function(){
		$(this).stop().animate({'width':'350px'},500).siblings().stop().animate({'width':'50px'},500)
	},function(){
		$('.box').stop().animate({'width':'100px'})
	})*/

})
