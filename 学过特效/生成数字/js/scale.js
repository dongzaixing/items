	var oli=document.getElementsByTagName("li");
	var box=document.getElementById("box");
	var con=document.getElementsByClassName('con')[0];
	var arr=[];//装li的原始坐标
	
	var H=document.documentElement.clientHeight;
	var W=document.documentElement.clientWidth;
	var getB=box.getBoundingClientRect();
	var l=getB.left;
	var r=W-getB.right;
	var t=getB.top;
	var b=H-getB.bottom;
	
	con.style.height=document.documentElement.clientHeight+'px';
	
	
	arrange();//先将li拍好再框里面，去到了原始坐标后就打散
	out();//将li打散在各个角落
	setTimeout(function(){
		back();//给每个li归位
		changeBgc();//背景颜色渐渐透明
	},1000)
	
	
	//将li排好在ul里面
	function arrange(){
		for(var i=0;i<6;i++){
			for(var j=0;j<6;j++){
				var li=document.createElement("li");
				li.style.left=j*60+"px";
				li.style.top=i*60+"px";
				arr.push({
					left:j*60,
					top:i*60
				})
				li.style.backgroundPosition=j*-60+"px "+i*-60+"px";//给每个li标签的背景图片定位.
				box.appendChild(li);
			}
		}
	}
	
	//取随机数
	function getRandom(){
		var arr=[];
		l1=Math.random()*l;
		r1=Math.random()*r+getB.right;
		t1=Math.random()*t;
		b1=Math.random()*b+getB.bottom;
		arr=[l1,r1,t1,b1]
		return arr;
	}
	
	//打散
	function out(){
		for(var i=0;i<oli.length;i++){
			oli[i].style.left=getRandom()[Math.floor(Math.random()*4)]-l+'px';
			oli[i].style.top=getRandom()[Math.floor(Math.random()*4)]-t+'px';
		}
	}
	//改变背景颜色
	function changeBgc(){
		var int={//创建对象,这个对象是用来给Mmove函数当参数的
			'element':con,//运动对象
			'target':{//目标值
				'left':con.offsetLeft,
				'top':con.offsetTop,
				'opacity':0
			},
			'time':2000,//时间
			'type':'linear'//运动类型,先会后慢
		}
		Mmove(int);
	}
//	box.style.transform="rotateY(720deg)"
	//给每个li归位
	function back(){
		for(var i=0;i<oli.length;i++){
//			oli[i].style.transition='3s';
//			oli[i].style.left=arr[i].left+'px';
//			oli[i].style.top=arr[i].top+'px';
			var int={//创建对象,这个对象是用来给Mmove函数当参数的
				'element':oli[i],//运动对象
				'target':{//目标值
					'left':arr[i].left,
					'top':arr[i].top,
				},
				'time':5000,//时间
				'type':'easeOut'//运动类型,先会后慢
			}
			Mmove(int);//调用运动函数
		}
	}
	


//	console.log(Math.floor(Math.random()*4))