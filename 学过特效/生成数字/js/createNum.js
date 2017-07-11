$(function(){
	
	var click=false;
	$('#btn').click(function(){
		if(!click){
			for(var i=0;i<100;i++){
				$('#box').append('<li class="aa">'+(i+1)+'</li>')
			}
			$('.aa').hover(function(){
				$(this).css({'transform':'scale(.7)'});
			},function(){
				$(this).css({'transform':'scale(1)'});
			})
			click=true;
		}else{
			$('#box').empty('li');
			click=false;
		}	
		
	})
	
	
	
	
	
	
	
	
})
