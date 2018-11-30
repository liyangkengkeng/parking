window.onload=function(){
	var details=document.getElementsByClassName('details')
	for(let i=0,len=details.length;i<len;i++){
		(function(){
			details[i].onclick=function(e){
				var e=e || window.event;
    			var target=e.target || e.srcElement;
    			console.log(target.className)
    			if(target.className!=='query'){
    				window.location.href='index-payment-details.html'
    			}
			}
		})(i)
	}
}

