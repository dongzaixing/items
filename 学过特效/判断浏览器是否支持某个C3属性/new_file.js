function checkC3(attr){
				var box=document.createElement('div');
				if(attr in box.style){
					alert('支持');
				}else{
					alert('不支持');
				}
			}
			checkC3('opacity')