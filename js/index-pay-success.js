var time=document.getElementsByClassName('time')[0]
var a=3;
var set=setInterval(function(){
	console.log(time.innerText)
	a--;
	time.innerText=a
	if(a<1){
		window.location.href='index-already-payment-details.html'
		clearInterval(set);
	}
},1000)