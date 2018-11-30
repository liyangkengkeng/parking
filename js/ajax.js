//创建XMLHttp对象
function CreateXmlHttp() {
    //非IE浏览器创建XmlHttpRequest对象
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else {
        return null;
    }
    //IE浏览器创建XmlHttpRequest对象
    if (window.ActiveXObject) {
        try {
            return new ActiveXObject("Microsoft.XMLHTTP"); //较老的IE版本创建
        } catch (e) {
            try {
                return new ActiveXObject("Msxml2.XMLHTTP"); //较新的IE版本创建
            } catch (ex) {
                return null;
            }
        }
    }
}
// var data={
//     url:'',
//     mode:'post',  //get
//     data:'',  //参数
//     fun(a){  //回调

//     }
// }
function ajax(data) {
    var xmlHttp = CreateXmlHttp();
    if (!xmlHttp) {
        alert("创建xmlHttp对象异常");
        return false;
    }
    var oDiv = document.createElement("div")
    oDiv.className='ajax-loding'
    var box = document.createElement("div")
    for(var a=0;a<8;a++){
        var span = document.createElement("span")
        span.style.webkitTransform='rotate('+(a*360/8)+'deg)'
        box.appendChild(span)
    }
    oDiv.appendChild(box)
    document.getElementsByTagName('body')[0].appendChild(oDiv)
    var url = data.url;
    xmlHttp.open(data.mode, url, true);
    //setRequestHeader()：POST传数据时，用来添加 HTTP 头
    // 添加http头，发送信息至服务器时内容编码类型
    xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    var ajaxarr = [];
    for (var i in data.data) {
        ajaxarr.push(i+ "=" + data.data[i]);
    }
    ajaxstr=ajaxarr.join("&");
    xmlHttp.send(ajaxstr);
    //onreadystatechange 每次状态改变所触发事件的事件处理程序。
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200 || xmlHttp.status == 304) {
            // status值说明  
            // 200:成功  
            // 404:没有发现文件、查询或URl  
            // 500:服务器产生内部错误    
                document.getElementsByTagName('body')[0].removeChild(oDiv)
                // 这里可以对返回的内容做处理  
                // 一般会返回JSON或XML数据格式  
                data.fun(xmlHttp.responseText)
        }else{
            alert('发送失败')
        }
    }
}