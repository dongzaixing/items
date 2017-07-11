window.onload=function(){
	

//js写法
var btn=document.getElementById("change");
var oul=document.getElementById("sImg");
var oli=document.getElementsByTagName("li");
var con=document.getElementById("con");
var hide=true;
var coo="";


var cover=document.getElementById("cover");

var box=document.getElementsByClassName("box")[0];

btn.onclick=function(){
	if(hide){
		oul.style.display="block";
		this.innerHTML="收起"
		hide=false;
	}else{
		oul.style.display="none";
		this.innerHTML="换肤"
		hide=true;
	}
}
for(var i=0;i<oli.length;i++){
	oli[i].onclick=function(){
		var a=this.innerHTML;
		var index=a.substring(a.indexOf("=")+2,a.indexOf(">")-1);
		document.cookie="user="+index;//设置cookie
		//获取cookie
		coo=document.cookie.substring(document.cookie.indexOf("=")+1);
		con.style="background: url("+coo+");"
		console.log(coo)
	}
}
//在外面也要获取一次cooki
coo=document.cookie.substring(document.cookie.indexOf("=")+1);
con.style="background: url("+coo+");"



}


