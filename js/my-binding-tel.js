// 验证码输入框
codes('paw')

// 验证码
var code=document.getElementsByClassName('code')[0]
var modalBox=document.getElementsByClassName('modal-box')[0]
var confirm=document.getElementsByClassName('modal-confirm')[0]
var tel=document.getElementById('tel')
// 隐藏模态框
var num=59
confirm.onclick=function(){
    // 验证验证码
    var res = verifyCode.validate(document.getElementById("code_input").value);
    if(res){
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
    }else{
        document.getElementById("code_input").value=''
    }   
}

// 显示模态框
var is=true;
code.onclick=function(){
    if(!(/^1(3|4|5|7|8)\d{9}$/.test(tel.value))){
        alert("手机号码有误，请重填"); 
        return false;
    }
    if(is){
        modalBox.style.display='flex'
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

// 手机号输入框验证
tel.onblur=function(){
    if(!(/^1(3|4|5|7|8)\d{9}$/.test(this.value))){
        alert("手机号码有误，请重填"); 
        return false;
    }
}