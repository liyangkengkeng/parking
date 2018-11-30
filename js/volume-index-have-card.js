var card=document.getElementsByClassName('card-box')


for(let i=0,len=card.length;i<len;i++){
	card[i].style.transform='translateX(-77.5vw)';
	(function(){
		card[i].addEventListener('touchstart',touch, false); 
		card[i].addEventListener('touchmove',touch, false); 
		card[i].addEventListener('touchend',touch, false); 
	})(i)
}

var startPosition={},deltaY,endPosition={};
var count=1;
var ty=false; //是否有滑动事件
function touch (event){ 
    var event = event || window.event; 
    switch(event.type){ 
        case "touchstart": 
            var touch = event.touches[0];
            startPosition = {
                x: touch.pageX,
                y: touch.pageY
            }
            break; 

        case "touchmove": 
            var touch = event.touches[0];
            endPosition = {
                x: touch.pageX,
                y: touch.pageY
            }
            ty=true
　　　　　　　break; 

        case "touchend":
            if(ty){
                deltaX = endPosition.x - startPosition.x;
                var num=parseFloat(card[0].style.transform.slice(11))
                // 判断左右滑动方向
                if(deltaX>60){
                    if(count>0){
                        count--
                        for(let j=0,lens=card.length;j<lens;j++){
                            card[j].style.transform='translateX('+(num+85)+'vw)'
                        }
                    }
                }
                if(deltaX<-60){
                    if(count<card.length-1){
                        count++
                        for(let j=0,lens=card.length;j<lens;j++){
                            card[j].style.transform='translateX('+(num-85)+'vw)'
                        }
                    }
                }
                ty=false
            }
            
　　　　　　　break; 
    } 
        
} 

