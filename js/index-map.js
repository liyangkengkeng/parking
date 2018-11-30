var map = new BMap.Map("map");          // 创建地图实例  
// var point = new BMap.Point(116.404, 39.915);  // 创建点坐标                  
map.enableScrollWheelZoom(true);

var nav=document.getElementsByClassName('nav')[0]
var loca=document.getElementsByClassName('loca')[0]

var myP1 = localStorage.getItem('latitude')  || '古蔺县';    //起点,定位点
var myP2 =loca.innerText;    //终点	 

map.centerAndZoom(myP1, 12); // 初始化地图，设置中心点坐标和地图级别


var myIcon = new BMap.Icon("http://lbsyun.baidu.com/jsdemo/img/Mario.png", new BMap.Size(32, 70), {    //小车图片
	//offset: new BMap.Size(0, -5),    //相当于CSS精灵
	imageOffset: new BMap.Size(0, 0)    //图片的偏移量。为了是图片底部中心对准坐标点。
  });
var driving2 = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true}});    //驾车实例
				// 起点         终点
driving2.search(myP1, myP2);

