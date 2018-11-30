var no=document.getElementsByClassName('no')[0]
var yes=document.getElementsByClassName('yes')[0]
var confirm=document.getElementsByClassName('confirm')[0]
var modal=document.getElementsByClassName('modal-box')[0]
no.onclick=function(){
	confirm.style.display='none'
}

var relieve=document.getElementsByClassName('relieve')[0]
relieve.onclick=function(){confirm.style.display='block'}

yes.onclick=function(){
	modal.style.display='flex'
	confirm.style.display='none'
}

// 模态框

// 发送验证码
var tel=document.getElementsByClassName('tel')[0].innerText
var send=document.getElementsByClassName('send')[0]
var num=59
send.onclick=function(){
	// 发送验证码
        ajax({
            url:'',
            mode:'post',  //get
            data:'tel='+tel,  //参数
            fun(a){  //回调
                this.innerText='重新发送（59s）'
                this.disabled=true
                var _this=this
                var set=setInterval(function(){
                    num--
                    send.innerText='重新发送（'+num+'s）'
                    if(num<1){
                        clearInterval(set)
                        _this.disabled=false
                        _this.innerText='重新发送'
                    }
                },1000)
                //返回参数
                console.log(a)
            }
        })
}

// 验证码输入框
var value='';  //输入框内容

var close=document.getElementsByClassName('close')[0]
close.onclick=function(){
	modal.style.display='none'
	confirm.style.display='none'
}

codes("modal-paw")