window.onload=function(){
	var box=document.getElementById("box");
	box.onclick=function(){
//		box.className="ssds";//没有加等的话会把原来的class全部覆盖掉
//		box.className+=" ssds";//在前面加空格就不会和前面的class连起来
//		alert(box.className.match(new RegExp("vd")));//如果字符串中存在要匹配的字符，就返回匹配的字符，否则返回null
//		alert(box.className.search(new RegExp("b")));//如果字符串中存在要匹配的字符，只会返回第一个匹配的字符的下标，否则返回-1
		alert(box.className.replace(new RegExp("ccc",'g'),'nnn'));//替换符合正则表达式的字符串,加上g是全局匹配
		
//		addClass(box,"aasa");//添加class
//		reomveClass(box,"ccc");//删除class
//		检查class是否存在
		function haveClass(element,cName){
//			两个叹号是将字符串转换成布尔值
			return !!element.className.match(new RegExp('(\\s|^)'+cName+'(\\s|$)'));//正则表达式用到字符转义
		}
//		添加class函数封装
		function addClass(element,cName){
			if(!haveClass(element,cName)){
				element.className+=" "+cName;//不加空格的话添加进去之后会跟前面的class连接起来
			}
		}
//		移除class函数封装
		function reomveClass(element,cName){
			if(haveClass(element,cName)){
				//不加空格的时候删除了之后，前面的跟后面的class连起来
				element.className=element.className.replace(new RegExp('(\\s|^)'+cName+'(\\s|$)')," ")
			}
		}	
	}

}
