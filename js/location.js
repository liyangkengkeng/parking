function getPosition(){

　　　　　　  //判断浏览器是否支持HTML5 定位

　　　　　　if(window.navigator.geolocation){

　　　　　　　　navigator.geolocation.getCurrentPosition(successfulCallback,failCallback)

　　　　　　}else{

　　　　　　　　   alert("你的浏览器不能使用HTML5定位")

　　　　　　   }

　　 　　}

　　　　function successfulCallback(position){

　　　　　　var latitude = position.coords.latitude;

　　　　　　var longitude = position.coords.longitude;
            localStorage.setItem('latitude',latitude)
            localStorage.setItem('longitude',longitude)
            var point = new BMap.Point(lon, lat);  // 创建坐标点
            // 根据坐标得到地址描述
            var myGeo = new BMap.Geocoder();
            myGeo.getLocation(point, function (result) {
                var city = result.addressComponents.city;
                localStorage.setItem('city',city)
                document.getElementsByClassName('current-city')[0].innerText=city
           });
　　　　}

　　　　function failCallback(error){

　　　　　　var text ;

　　　　　　switch(error.code){

　　　　　　　　case error.PERMISSION_DENIED:

      　　　　　　　　text ="用户拒绝对获取地理位置的请求。";
                      
     　　　　　　　　 break;
   　　　　　　   case error.POSITION_UNAVAILABLE:

    　　　　　　　　  text ="位置信息是不可用的。";
                      window.location.href='address.html'
      　　　　　　　　break;

   　　　　　　  case error.TIMEOUT:

     　　　　　　　　text ="请求用户地理位置超时。";
                      window.location.href='address.html'
     　　　　　　　　 break;

   　　　　　　  case error.UNKNOWN_ERROR:

     　　　　　　　　 text ="未知错误。";
                      window.location.href='address.html'
      　　　　　　　　break;
   　　　　　　 }
　　　　　　}
getPosition();