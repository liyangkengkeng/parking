var nav=document.getElementsByClassName('nav')[0]
var cityList=document.getElementsByClassName('city-list')[0]
var list=cityList.getElementsByTagName('p')
var arr=[]
for(let i=0,len=list.length;i<len;i++){
	arr.push(list[i].innerText)
}
arr.sort((a, b) => a.localeCompare(b, 'zh-Hans-CN', {sensitivity: 'accent'}))

var one=$("body").val(arr[0]).toPinyin().substr(0, 1),array=[],obj={}
  // $("body").val(arr[i]).toPinyin().substr(0, 1)
  for(var i = 0; i < arr.length; i++) {
    array[i]={}
    array[i].letter=$("body").val(arr[i]).toPinyin().substr(0, 1)
    array[i].data=[arr[i]]
  }
  for(var j=0;j<array.length;j++){
    if( array[j+1] && array[j].letter===array[j+1].letter){
      array[j].data.push(array[j+1].data[0])
      array.splice(j+1,1)
      j--
    }
  }


var dom=document.createDocumentFragment()
var ul=document.createDocumentFragment()
for(let j=0;j<array.length;j++){
 var oDiv = document.createElement("div")
 oDiv.id=array[j].letter
  var li=document.createElement('li')
  var a=document.createElement('a')
  a.innerText=array[j].letter
  a.href='#'+array[j].letter
  li.appendChild(a)
 oDiv.className='city'
 var pH = document.createElement("p")
 var pHText = document.createTextNode(array[j].letter)
 pH.appendChild(pHText)
 oDiv.appendChild(pH)
 for(let x=0;x<array[j].data.length;x++){
   var p=document.createElement("p"); 
   var pText = document.createTextNode(array[j].data[x])
     p.appendChild(pText)
     oDiv.appendChild(p)
 }
 dom.appendChild(oDiv)
  ul.appendChild(li)
}


cityList.innerHTML=''
cityList.appendChild(dom)
nav.innerHTML=''
nav.appendChild(ul)