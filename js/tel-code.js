function codes(paw,fun){
    var value=''
    var active = 0,
        inputBtn = document.getElementsByClassName(paw);
    for (var i = 0,len=inputBtn.length; i < len; i++) {
        inputBtn[i].addEventListener('click', function () {
            inputBtn[active].focus();
        }, false);
        inputBtn[i].addEventListener('focus', function () {
            this.addEventListener('keyup', listenKeyUp, false);
        }, false);
        inputBtn[i].addEventListener('blur', function () {
            this.removeEventListener('keyup', listenKeyUp, false);
        }, false);
    }
 
    /**
     * 监听键盘的敲击事件
     */
    function listenKeyUp() {
        let pawLength=document.getElementsByClassName(paw).length
        if (this.value.length != 0) {
            value+=this.value

            active += 1;
            if (active < pawLength) {
                inputBtn[active].focus();
            }else{
                active=pawLength-1
            }
        } else if (this.value.length == 0) {
            value = value.substring(0, value.length - 1);
            active -= 1;
            if (active > 0) {
                 
                inputBtn[active].focus();
            }else{
                inputBtn[0].focus();
                active=0
            }
        }
        if(active==pawLength-1){
            // 验证成功
            if(true){
                if(fun){
                    fun()
                }
            }
            
        }
    }
}