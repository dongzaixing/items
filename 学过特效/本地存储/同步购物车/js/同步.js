(function(D) {
	var val = D.getElementsByTagName("input")[0],
		btn = D.getElementsByTagName("button")[0];
	var box = document.getElementsByClassName('box')[0];
	btn.onclick = function() {
		var value = val.value;
		box.innerHTML = " newValue:" + value;

		if(!value) return;
		localStorage.setItem("key", val.value);
		val.value = "";
	};
	window.addEventListener("storage", function(e) {
		console.log(e);
		box.innerHTML = " newValue:" + e.newValue;
		//e.newValue和e.oldValue是storage事件触发是最新值和上一次的值。

	});
})(document);