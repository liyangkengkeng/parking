var btn=document.getElementsByClassName('add-btn')[0]
var modal=document.getElementsByClassName('upper-limit')[0]

btn.onclick=function(){
	modal.style.display='block'
	setTimeout(function(){modal.style.display='none'},1000)
}