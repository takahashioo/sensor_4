window.onload=function(){
if(!localStorage) {
alert('繝ｭ繝ｼ繧ｫ繝ｫ繧ｹ繝医Ξ繝ｼ繧ｸ縺ｫ蟇ｾ蠢懊＠縺ｦ縺�↑縺�');
}
// 繧ｻ繝�す繝ｧ繝ｳ繧ｹ繝医Ξ繝ｼ繧ｸ蟇ｾ蠢懷愛螳�
if(!sessionStorage) {
alert('繧ｻ繝�す繝ｧ繝ｳ繧ｹ繝医Ξ繝ｼ繧ｸ縺ｫ蟇ｾ蠢懊＠縺ｦ縺�↑縺�');
	}
}

//繝ｭ繝ｼ繧ｫ繝ｫ繧ｹ繝医Ξ繝ｼ繧ｸ繧貞炎髯､
function removeConfig(){
	localStorage.clear();
	alert("蜑企勁縺励∪縺励◆");
}


function startstop(){
if (document.getElementById("startstop").innerHTML=="貂ｬ螳夐幕蟋�"){

sensor_on(); //髢句ｧ�
document.getElementById("startstop").innerHTML="蛛懈ｭ｢";

} else {

sensor_off(); //蛛懈ｭ｢
document.getElementById("startstop").innerHTML="貂ｬ螳夐幕蟋�";

	}
}


	function sensor_off(){
		window.removeEventListener("devicemotion", sensor, false);
		}
		
    	
	function sensor_on(){
		localStorage.clear(); //繧ｹ繧ｿ繝ｼ繝域凾縺ｫ繧ｯ繝ｪ繧｢繝ｼ
	        window.addEventListener("devicemotion", sensor,false);
      		};

        function sensor(e){

	  //譌･莉假ｼ医ち繧､繝�繧ｹ繧ｿ繝ｳ繝暦ｼ�
	  var date = new Date() ;
	  var time_unix = date.getTime() ;
	  printValue("unixtime", time_unix);
			
	  //蜉�騾溷ｺｦ
	  var acc = e.acceleration;
	  var x = Numlimit5(acc.x);
	  var y = Numlimit5(acc.y);
	  var z = Numlimit5(acc.z);

	  //蜉�騾溷ｺｦ(驥榊鴨蜉�騾溷ｺｦ)
	  var acc_g = e.accelerationIncludingGravity;
	  var gx = Numlimit5(acc_g.x);
	  var gy = Numlimit5(acc_g.y);
	  var gz = Numlimit5(acc_g.z);

	  //蝗櫁ｻ｢
	  var rota_r = e.rotationRate;
	  var ra = Numlimit5(rota_r.alpha);
	  var rb = Numlimit5(rota_r.beta); 
	  var rg = Numlimit5(rota_r.gamma);

	  //蜿門ｾ怜､縺ｮ陦ｨ遉ｺ

	  printValue('acc-x', x); //x
	  printValue('acc-y', y); //y
	  printValue('acc-z', z); //z

	  printValue('acc-gx', gx); //gx
	  printValue('acc-gy', gy); //gy
	  printValue('acc-gz', gz); //gz 

	  printValue('rr-a', ra); //ra
	  printValue('rr-b', rb); //rb
	  printValue('rr-g', rg); //rg 

	  //菫晏ｭ倥ョ繝ｼ繧ｿ
	  var datalist = {acc_x:x,acc_y:y,acc_z:z,acc_gx:gx,acc_gy:gy,acc_gz:gz,rr_a:ra,rr_b:rb,rr_g:rg}

	  //繝ｭ繝ｼ繧ｫ繝ｫ繧ｹ繝医Ξ繝ｼ繧ｸ縺ｫ險倬鹸
	  localStorage.setItem(time_unix, JSON.stringify(datalist));

	  function printValue(id, value){
	  var id_obj = document.getElementById(id);
	  id_obj.innerHTML = value;
		}
	  function Numlimit5(obj){
	  return Number(obj).toFixed(5);
	  	}
	}


function list(){
  alert("> 繧ｭ繝ｼ縺ｮ荳隕ｧ繧貞�謖吶☆繧�");
  for(var i = 0; i < localStorage.length ; i++) {

	var localstragekey = localStorage.key(i)
	var d_acc_x="";
	var d_acc_gx="";
	var d_rr_a="";

	if(localStorage.getItem(localstragekey)){

		var d = JSON.parse(localStorage.getItem(localstragekey));
		d_acc_x = d.acc_x;
		d_acc_gx = d.acc_gx;
		d_rr_a = d.rr_a;
	}
	display_row = localstragekey +","+ d_acc_x+","+ d_acc_gx+","+d_rr_a;

    alert(display_row);    // 'banana','mango'
  }

}


//function
function exportcsv(){

  var finalVal = '';

  for(var i = 0; i < localStorage.length ; i++) {

	var localstragekey = localStorage.key(i)
	var d_acc_x="";
	var d_acc_y="";
	var d_acc_z="";
	
	var d_acc_gx="";
	var d_acc_gy="";
	var d_acc_gz="";
	
	var d_rr_a="";
	var d_rr_b="";
	var d_rr_g="";

	if(localStorage.getItem(localstragekey)){

	var d = JSON.parse(localStorage.getItem(localstragekey));

		d_acc_x = d.acc_x;
		d_acc_y = d.acc_y;
		d_acc_z = d.acc_z;
		
		d_acc_gx = d.acc_gx;
		d_acc_gy = d.acc_gy;
		d_acc_gz = d.acc_gz;
		
		d_rr_a = d.rr_a;
		d_rr_b = d.rr_b;
		d_rr_g = d.rr_g;	
		
		
	}

	//繧ｭ繝ｼ縺ｮ蛟､繧辰SV逕ｨ縺ｫ繝ｪ繧ｹ繝亥喧
	finalVal += localstragekey +","+ d_acc_x +","+ d_acc_y +","+ d_acc_z +","+ d_acc_gx +","+ d_acc_gy +","+ d_acc_gz +","+ d_rr_a +","+ d_rr_b +","+ d_rr_g +'\n';
  }



// Display the month, day, and year. getMonth() returns a 0-based number.
var date = new Date();
var year = date.getFullYear();
var month = ("0"+(date.getMonth() + 1)).slice(-2);
var day = ("0"+date.getDate()).slice(-2); 


  //set csv-data to a-tag on html
  var download = document.getElementById('download');
  download.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(finalVal));

  download.setAttribute('download','sensor'+ year + month + day +'.csv');


}