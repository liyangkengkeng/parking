// 短信验证码输入框
codes(
    'paw',function(){document.getElementsByClassName('replace')[0].onclick=function(){window.location.href='my-modify-tel2.html'}}
)

var tel=document.getElementsByClassName('tel')[0].innerText
var send=document.getElementsByClassName('send')[0].getElementsByTagName('button')[0]
var modal=document.getElementsByClassName('modal-box')[0]
var confirm=document.getElementsByClassName('modal-confirm')[0]

// 发送验证码
var num=59
var is=true;
send.onclick=function(){
    if(is){
        modal.style.display='flex'
        is=false
    }else{
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
}

// 图形验证码
confirm.onclick=function(){
    // 验证验证码
    var res = verifyCode.validate(document.getElementById("code_input").value);
    if(res){
        modal.style.display='none'
        ajax({
            url:'',
            mode:'post',  //get
            data:'tel='+tel,  //参数
            fun(a){  //回调
                send.innerText='重新发送（59s）'
                send.disabled=true
                var set=setInterval(function(){
                    num--
                    send.innerText='重新发送（'+num+'s）'
                    if(num<1){
                        clearInterval(set)
                        send.disabled=false
                        send.innerText='重新发送'
                    }
                },1000) 
                //返回参数
                console.log(a)  
            }
        })
        
    }else{
        alert('验证码错误')   
        document.getElementById("code_input").value=''
    }   
}
 