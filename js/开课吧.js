window.onload=function(){
			
            var onbanner_img=document.getElementById('banner_img');
			function animate(offset){
               var newleft=onbanner_img.offsetLeft+offset;
                if(newleft<-4000){
                    onbanner_img.style.left=0;
                }else if(newleft>0){
                    onbanner_img.style.left="-4000px";
                }else {
                	
                    onbanner_img.style.left=newleft+"px";
                }
}
			
			var timer;
            function play(){
                timer=setInterval(function(){
              	    animate(-1366);
            },1500);
            }
            //首次运行页面时，先启动定时器
            play();
           
    
			}
  