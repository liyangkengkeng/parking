var btn=document.getElementsByClassName('modal-btn')[0]
var box=document.getElementsByClassName('modal-box')[0]

// 隐藏模态框
btn.onclick=function(){
	box.style.display='none'
}

// 显示模态框
var buy=document.getElementsByClassName('buy-text')[0]
buy.onclick=function(){
	box.style.display='flex'
}