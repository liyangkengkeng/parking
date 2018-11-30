var look=document.getElementsByClassName('look')[0]
var know=document.getElementsByClassName('know')[0]
var navigation=document.getElementsByClassName('navigation')[0]
know.onclick=function(){
	navigation.style.display='none'
}

look.onclick=function(){
	navigation.style.display='block'
}