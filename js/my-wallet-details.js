var use=document.getElementsByClassName('use')[0]
var invalid=document.getElementsByClassName('invalid')[0]

var invalidList=document.getElementsByClassName('invalid-list')[0]
var useList=document.getElementsByClassName('use-list')[0]

use.onclick=function(){
	this.classList.add('border-sel')
	invalid.classList.remove('border-sel')
	useList.classList.remove('hidden')
	invalidList.classList.add('hidden')
}
invalid.onclick=function(){
	this.classList.add('border-sel')
	use.classList.remove('border-sel')
	invalidList.classList.remove('hidden')
	useList.classList.add('hidden')
}
