var btn=document.getElementsByClassName('modal-btn')[0]
var modal=document.getElementsByClassName('modal-box')[0]
btn.onclick=function(){
	modal.style.display='none'
}

var see=document.getElementsByClassName('see')[0]
see.onclick=function(){
	modal.style.display='flex'
}