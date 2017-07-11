
////创建xmldom
//var xmlDom=new ActiveXObject("Microsoft.XmlHttp")
////加载xml字符   加载xml外部文件
//获取外部文件的dom节点



//xmlDom.load("<root><user>lihaohua</user></root>")
////
var xhr = new XMLHttpRequest();
xhr.load('dfsdfsdfss');
alert(xhr)


同步及异步加载
同步：一步接着一步，不能同时执行，加载xml完成之前，代码不会执行，xhr.async=false;表示同步，xhr.async=true;表示异步
使用同步加载如果延迟了,浏览器会假死
异步：是同时执行多个事件，JavaScript任务交给浏览器内部去处理，不糊造成堵塞
在服务器端默认使用的是异步加载，如果load（）还没加载完毕就去执行后面的代码，
会导致代码执行不了，要配合onreadystatechange使用。


