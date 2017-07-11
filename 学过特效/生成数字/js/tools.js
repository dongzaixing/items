var Tween = {
	linear: function (t, b, c, d){
		return c*t/d + b;
	},
	easeIn: function(t, b, c, d){
		return c*(t/=d)*t + b;
	},
	easeOut: function(t, b, c, d){
		return -c *(t/=d)*(t-2) + b;
	},
	easeBoth: function(t, b, c, d){
		if ((t/=d/2) < 1) {
			return c/2*t*t + b;
		}
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInStrong: function(t, b, c, d){
		return c*(t/=d)*t*t*t + b;
	},
	easeOutStrong: function(t, b, c, d){
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeBothStrong: function(t, b, c, d){
		if ((t/=d/2) < 1) {
			return c/2*t*t*t*t + b;
		}
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	elasticIn: function(t, b, c, d, a, p){
		if (t === 0) { 
			return b; 
		}
		if ( (t /= d) == 1 ) {
			return b+c; 
		}
		if (!p) {
			p=d*0.3; 
		}
		if (!a || a < Math.abs(c)) {
			a = c; 
			var s = p/4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	elasticOut: function(t, b, c, d, a, p){
		if (t === 0) {
			return b;
		}
		if ( (t /= d) == 1 ) {
			return b+c;
		}
		if (!p) {
			p=d*0.3;
		}
		if (!a || a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},    
	elasticBoth: function(t, b, c, d, a, p){
		if (t === 0) {
			return b;
		}
		if ( (t /= d/2) == 2 ) {
			return b+c;
		}
		if (!p) {
			p = d*(0.3*1.5);
		}
		if ( !a || a < Math.abs(c) ) {
			a = c; 
			var s = p/4;
		}
		else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		if (t < 1) {
			return - 0.5*(a*Math.pow(2,10*(t-=1)) * 
					Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		}
		return a*Math.pow(2,-10*(t-=1)) * 
				Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
	},
	backIn: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
		   s = 1.70158;
		}
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	backOut: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 1.70158;  //回缩的距离
		}
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	}, 
	backBoth: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 1.70158; 
		}
		if ((t /= d/2 ) < 1) {
			return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		}
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	bounceIn: function(t, b, c, d){
		return c - Tween['bounceOut'](d-t, 0, c, d) + b;
	},       
	bounceOut: function(t, b, c, d){
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
		}
		return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
	},      
	bounceBoth: function(t, b, c, d){
		if (t < d/2) {
			return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
		}
		return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
	}
};


 var con=document.getElementById('con');
function fn(t,b,c,d){
	return c*t/d + b;
}

var t=0;
//setInterval(function(){
//	t++
//	var a=fn(t,10,5,5)
//	con.style.left=a+"px";
//	console.log(a)
//},100)

function run(){
	var t=0;
	var c=200
	var b=400-200;
	var d=2000/50;
	var timer=null;
	
	timer=setInterval(function(){
		t++;
		var num=Tween['linear']=(t,c,b,d);//return c*t/d + b;
	},20)
	
	
}
//setInterval(run,1000)
function move(obj,attr,target,time,type,callback){
	//alert(1)
	//function(t, b, c, d)
	//move(box,"left",300,2000,"linear");
	var t = 0
	
	var c = parseInt(css(obj,attr));
	
	var b = target - c ;
	
	var d = time/50;        
	
	console.log(t,b,c,d)
	
	var timer = null;
	
	timer = setInterval(function(){
		t++;
		
		var nub = Tween[type](t, c, b, d);
		
		if(attr == "opacity"){
			obj.style[attr] = nub/100;
			obj.style[attr] = 'alpha(opacity='+nub+');'
		}else{
			obj.style[attr] = nub +'px';
		}
		console.log(nub)
		if(t>=d){        //
			//console.log(typeof callback);
//			if(typeof callback == 'function'){
//				callback();
//			}
			
			(typeof callback == 'function')&&callback();
			clearInterval(timer);
			
		}
		
	},20)
}

function css(obj,attr){
	var num  =0;
	if(obj.currentStyle){
		num =  obj.currentStyle[attr];
	}else{
		num =  getComputedStyle(obj)[attr]
	}
	
	if(attr == "opacity"){
		return  Math.floor(num*100);
	}
	return parseInt(num) ;
}




function Mmove(int){
	
		var obj=int.element;
		var time=int.time;
		var type=int.type;
		var callback=int.callback||null;
		var fn=int.fn||null;
		var target=int.target;
		var t=0;
		var b={};
		var c={};
		var d=time/50;
		var time=null;
		for(var attr in target){
			b[attr]=css(obj,attr);
			c[attr]=target[attr]-css(obj,attr)
		}
		
		time=setInterval(function(){
			t++;
			for(var x in c){
				var nub=Tween[type](t,b[x],c[x],d);
				if(x == 'opacity'){
					obj.style[x] = nub/100;
				}else{
					obj.style[x] = nub + 'px';
				}
			}
			(typeof fn == "function")&&fn();//如果有同步函数就执行，没有就不管
			if(t>=d){		
				//如果有回调函数就执行，没有就不管
				(typeof callback == "function")&&callback();
				clearInterval(time)
			}	
			
		},50)
		
	
	
}


