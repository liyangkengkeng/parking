var code=document.getElementsByClassName('obtain-code')[0]
var tel=document.getElementsByClassName('tel')[0]
var num=59
code.onclick=function(){
	if(!(/^1(3|4|5|7|8)\d{9}$/.test(tel.value))){
        alert("手机号码有误，请重填"); 
        return false;
    }else{
        code.innerText='重新发送（59s）'
	    code.disabled='true'
	    var set=setInterval(function(){
	        num--
	        code.innerText='重新发送（'+num+'s）'
	        if(num<1){
	            clearInterval(set)
	            code.disabled='false'
	            code.innerText='重新发送'
	        }
	    },1000)
    }
}
