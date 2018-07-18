// 起手式喔～～～
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// 設定Canvas的寬度與長度
c.width = window.innerWidth;
c.height = window.innerHeight;

// 開始畫畫囉～～～

// 變數設定
var x = [200,500,400,100];
var y = [200,130,500,700];
var dx = [4,3,2,1];
var dy = [4,5,3,1];
//ball function
function ball(r,g,b,a,br,turnx,turny,turnd,no){


	if ( x[no]+dx[no]+turnx >=br && x[no]+dx[no]+turnx <= c.width){
		x[no] += dx[no];
	}else {
		if (dx[no]>0){
			dx[no] = Math.floor((Math.random() * turnd) + 5);
		}else{
			dx[no] = Math.floor((Math.random() * turnd) + 5)*-1;
		}
		dx[no] = -dx[no];
	}
	if ( y[no]+dy[no]+turny >=br && y[no]+dy[no]+turny <= c.width){
		y[no] += dy[no];
	}else {
		dy[no] = -dy[no];
		if (dy[no]>0){
			dy[no] = Math.floor((Math.random() * turnd) + 5);
		}else{
			dy[no] = Math.floor((Math.random() * turnd) + 5)*-1;
		}
	}
	// 路徑畫法：
	ctx.beginPath();

	// 畫出一個圓的路徑
	ctx.arc (x[no]+turnx, y[no]+turny, br, 0, Math.PI*2, true);

	// 塗上顏色
	ctx.fillStyle = "rgba("+r+","+g+","+b+","+a+")";
	ctx.fill();

	// 結束路徑
	ctx.closePath();
	
	
}

// 短時間呼叫這個函數多次，用來更新畫不與圓圈座標
function animate() {
	requestAnimationFrame(animate);
	// 設定Canvas的寬度與長度
	c.width = window.innerWidth;
	c.height = window.innerHeight;
  /*
  // 清空畫布
  ctx.clearRect(0, 0, c.width, c.height);
  
  // 畫圓
	ctx.beginPath();
	ctx.moveTo(100,100);
	ctx.lineTo(200,200);
	ctx.lineTo(230,100);
  // 顏色設定 rgba(255,187,0,0.8)
	ctx.strokeStyle = "rgba(255,187,0,0.8)";
  ctx.lineWidth = 10;
	ctx.stroke();
	ctx.closePath();
	
	//
	ctx.beginPath();
	ctx.moveTo(300,100);
	ctx.lineTo(500,200);
	ctx.lineTo(230,350);
  // 顏色設定 rgba(255,187,0,0.8)
	ctx.strokeStyle = "rgba(255,40,0,0.8)";
  ctx.lineWidth = 10;
	ctx.stroke();
	ctx.closePath();
  // 調整圓球顏色
  
  // 當球碰到邊界時反彈
	*/
		
	////red ball/*
	ball(219,50,54,1,20,0,0,3,1);
	ball(244,194,13,1,20,30,50,1,2);
	ball(60,186,84,1,20,60,10,3,3);
	ball(72,133,237,1,20,100,80,3,0);


}

// 呼叫animate
animate();