$(function(){
	
//	hover事件写法
	$('.firstNav').hover(function(){
		$(this).find('p').animate({'text-indent': '10px'},500)
		$(this).children('ul').stop().slideDown(500)
	},function(){
		
		$(this).find('p').animate({'text-indent': '0px'},500)
		$('.secNav').stop().slideUp(500)
	})
	
	
//	点击事件写法
//	$('.firstNav').click(function(){
//		$('.secNav').eq($(this).index()).stop().slideToggle(500).parent().siblings().children('ul').slideUp()
//	})
	
	
})
