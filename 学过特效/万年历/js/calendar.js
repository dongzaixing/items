(function($){
	var link='<link rel="stylesheet" type="text/css" href="css/calendar.css"/>';
	$('head').append(link);
	
	var n=0;
	var options={
		item1:[':',':'],
		item2:['-','-'],
		item3:['年','月'],
		item4:['前','后']
	}
	var setting={};
	function star(obj){
		$.extend(setting,options,obj);
		run();
		runDate();
		click();
		
	}
	
	
	
	function run(){
		var div='<div class="changeTime"></div>';
		function headDate(){
			var str='<h3><span>'+getTime().H+'</span>'+setting.item1[0]+'<span>'+getTime().Min+'</span>'+setting.item1[1]+'<span>'+getTime().Sec+'</span></h3>'+
					'<h5><span>'+getTime().Y+'</span>'+setting.item1[0]+'<span>'+getTime().Mon+'</span>'+setting.item1[1]+'<span>'+getTime().Data+'</span><span>'+getTime().Day+'</span></h5>'
			$('.changeTime').html(str)		
		}
		$('#box').append(div)
		headDate();
		setInterval(headDate,1000);
	}
		
	
	
	function runDate(){
		var str='<div class="yearM"><span class="yy">'+getTime().Y+'</span>'+options.item3[0]+'<span class="mm">'+getTime().Mon+'</span>'+setting.item3[1]+'<p><span class="arrow">'+setting.item4[0]+'</span><span  class="arrow">'+setting.item4[1]+'</span></p></div>'+
				'<div class="con">'+
					'<div class="date">'+
						'<span>日</span>'+
						'<span>一</span>'+
						'<span>二</span>'+
						'<span>三</span>'+
						'<span>四</span>'+
						'<span>五</span>'+
						'<span>六</span>'+
					'</div>'+
					'<ul id="day">'+
					'</ul>'+
				'</div>';
		$('#box').append(str);
		everyDay();
		
		
	}
	
	
	//生成天数
	function everyDay(){
		$('#day').html('');
		//获取上个月的数据
		var date=new Date();
		date.setMonth(date.getMonth()+n);
		date.setDate(0)
		var prevDays=date.getDate(0);//获取上个月的最后一天，也是上个月的天数
//		console.log(prevDays)
		
		var date=new Date();
		date.setMonth(date.getMonth()+1+n);
		date.setDate(0);
		var nowDays=date.getDate(0);//当前月的总天数
		console.log(nowDays)
		
		//获取当前是几号
		var date=new Date();
		var nowDate=date.getDate();//当前是几号
		date.setMonth(date.getMonth()+n);
		date.setDate(1);
		var firseDay=date.getDay();//当前月的第一天是星期几
		
		
		//上个月剩余的天数
		var emplyDay=prevDays-firseDay;//
		for(var i=emplyDay;i<prevDays;i++){
			var oli='<li class="hGray">'+parseInt(i+1)+'</li>';
			$('#day').append(oli);
			
		}
		//这个月的天数
		for(var i=0;i<nowDays;i++){
			var oli=$('<li>'+parseInt(i+1)+'</li>');
			if(i==nowDate-1&&n==0){
				console.log(nowDate)
				oli.css({'background':'orange'});
			}
			
			$('#day').append(oli);
		}
		
		//剩下的格子要填补
		var len=42;
		var nowLen=$('#day li').length;
		for(var i=0;i<len-nowLen;i++){
			var oli='<li class="bGray">'+parseInt(i+1)+'</li>';
			$('#day').append(oli);
		}
		
		var date=new Date();
		date.setMonth(date.getMonth()+n)
		var year=date.getFullYear();
		var month=oT(date.getMonth()+1);
		$('.yy').html(year);
		$('.mm').html(month);
	}
	
	function click(){
		$('.arrow').eq(0).click(function(){
			n--;
			everyDay();
		})
		$('.arrow').eq(1).click(function(){
			n++;
			everyDay();
		})
		
	}
	
	
	
	//获取时间
	function getTime(){
		var time=new Date()
		var obj={
			Y:oT(time.getFullYear()),			
			Mon:oT(time.getMonth()+1),			
			Data:oT(time.getDate()),				
			H:oT(time.getHours()),				
			Min:oT(time.getMinutes()),			
			Sec:oT(time.getSeconds()),
			Day:',星期'+'日一二三四五六'.substr(time.getDay(),1)
		}
		return obj;
	}
	//补0
	function oT(n){
		return n= n<10?'0'+n:''+n;
	}
	
	$.fn.extend({
		setDay:star
	})
})(jQuery)