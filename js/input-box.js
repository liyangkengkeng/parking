
// 车牌号输入框
(function (window, document) {
    var modal=document.getElementsByClassName('modal')[0]  //省份弹框
    var modalCity=document.getElementsByClassName('modal-city')[0] //市弹框
    var modalNumber=document.getElementsByClassName('modal-number')[0] //车牌号弹框
    var modalData=document.getElementsByClassName('modal-data') //省、市span
    var del=document.getElementsByClassName('modal-del')  //省 市  删除按钮
    var active = 0,
        inputBtn = document.getElementsByClassName('paw');
    function inputBlur(){
        for(let i=0;i<inputBtn.length;i++){
            inputBtn[i].style.border='1px solid #ccc'
        }
        inputBtn[active].style.border='2px solid #026cb7'
    }
    for (var i = 0,len=inputBtn.length; i < len; i++) {
        inputBtn[i].addEventListener('click', function () {
            if(!active){
                inputBtn[active].focus();
                inputBlur()
                modal.classList.remove('hidden')
            }else{
                inputBtn[active].focus();
                inputBlur()
                if(active==1){
                    modalCity.classList.remove('hidden')
                }
                if(active>1){
                    modalNumber.classList.remove('hidden')
                }
            }
            
        }, false);
    }

    // 修改省份输入框值
    modalData[0].onclick=function(e){
        var e=e || window.event;
        var target=e.target || e.srcElement;
        if(target.localName=='span'){
            inputBtn[active].innerText=target.innerText
            modal.classList.add('hidden')
            modalCity.classList.remove('hidden')
            active++
            inputBtn[active].focus();inputBlur()
        }
        
    }
    // 修改市输入框值
    modalData[1].onclick=function(e){
        var e=e || window.event;
        var target=e.target || e.srcElement;
        if(target.localName=='span' ){
            inputBtn[active].innerText=target.innerText;
            modalCity.classList.add('hidden')
            modalNumber.classList.remove('hidden')
            active++
            inputBtn[active].focus();inputBlur()
        }    
    }
    // 车牌号输入框
    modalNumber.onclick=function(e){
        var e=e || window.event;
        var target=e.target || e.srcElement;
        if(target.className=='con'){
            modalNumber.classList.add('hidden')
            return false
        }
        if(target.localName=='span' && target.className.indexOf('del')<0){
            inputBtn[active].innerText=target.innerText;
            if(active < inputBtn.length-1){
                active++
                inputBtn[active].focus();inputBlur()
            }else{
                active=inputBtn.length-1
                inputBtn[active].focus();inputBlur()
            }
        }else{
            console.log(active)
            if(inputBtn[active].innerText.length>0){//输入框有值
                inputBtn[active].innerText=''
                inputBtn[active].focus();inputBlur()
            }else{//输入框无值
                active--;
                inputBtn[active].focus();inputBlur()
                inputBtn[active].innerText=''
                if(active<2){
                    modalCity.classList.remove('hidden')
                    modalNumber.classList.add('hidden')
                }
            }
        }   
    }

    // 推荐省
    var modalRec=document.getElementsByClassName('modal-rec')
    for(let i=0,len=modalRec.length;i<len;i++){
        (function(){
            modalRec[i].ontouchstart=function(e){
                inputBtn[0].innerText=this.innerText
                modal.classList.add('hidden')
                modalCity.classList.remove('hidden')
                active++
                inputBtn[active].focus();inputBlur()
            }
        })(i)
    }
// 推荐市
    var modalCityRec=document.getElementsByClassName('modal-city-rec')
    for(let i=0,len=modalCityRec.length;i<len;i++){
        (function(){
            modalCityRec[i].ontouchstart=function(e){
                inputBtn[1].innerText=this.innerText
                modalCity.classList.add('hidden')
                modalNumber.classList.remove('hidden')
                active++
                inputBtn[active].focus();inputBtn[active].style.border='1ps solid #67C1BF'
            }
        })(i)
    }
    // 删除按钮
    del[0].onclick=function(){
        active=0
        inputBtn[0].innerText=''
        inputBlur()
    }
    del[1].onclick=function(){
        if(inputBtn[1].innerText.length>0){  //市输入框有值
            inputBtn[1].innerText=''
            inputBtn[1].focus();inputBtn[active].style.border='1ps solid #67C1BF'
        }else{//市输入框无值
            modal.classList.remove('hidden')
            modalCity.classList.add('hidden')
            active=0;
            inputBtn[0].focus();
            inputBtn[0].innerText=''
            inputBlur()
            // inputBtn[active].style.border='1ps solid #67C1BF'
        }
    }

})(window, document);
if(localStorage.getItem('city')){
   document.getElementsByClassName('current-city')[0].innerText=city
}