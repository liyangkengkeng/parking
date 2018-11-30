function upload(e,dom){
	var file = new FileReader();
    file.readAsDataURL(e.currentTarget.files[0]);
    file.onload = function (file) {
    	// 修改图片地址
        dom.src=file.target.result
    };
}

var front=document.getElementById('front')
var after=document.getElementById('after')
var frontImg=document.getElementById('front-img')
var afterImg=document.getElementById('after-img')
// 上传图片
front.onchange=function(e){
	upload(e,frontImg)
}
after.onchange=function(e){
	upload(e,afterImg)
}

// 模态框
var tel=document.getElementsByClassName('tel')[0].innerText
var binding=document.getElementsByClassName('binding')[0]
var close=document.getElementsByClassName('close')[0]
var modal=document.getElementsByClassName('modal-box')[0]
binding.onclick=function(){
	// code()
	modal.style.display='flex'
}
close.onclick=function(){
	modal.style.display='none'
}

// 发送验证码
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

var plateColor=document.getElementsByClassName('plate-color')[0]
var inputBox=document.getElementsByClassName('input')[0]
var input=document.getElementsByClassName('pawDiv')
plateColor.onchange=function(event){
    var e=e || window.event;
    var target=e.target || e.srcElement;
    var oDiv = document.createElement('div');
    oDiv.innerHTML=`<p class="paw border67"></p>`
    oDiv.className='pawDiv'
    if(target.value==='2' || target.value==='6'){
        if(input.length<8){
            inputBox.appendChild(oDiv)
        }
    }else{
        if(input.length>7){
            inputBox.removeChild(input[7])
        }
    }
}
// 验证码输入框
codes("modal-paw",function(){window.location.href='my-car.list.html'})

