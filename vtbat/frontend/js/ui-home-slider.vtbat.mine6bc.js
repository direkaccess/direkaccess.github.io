function headerfunc(e,t,d,a){"string"!=typeof headimg[e]&&"string"!=typeof headtext[e]&&(e=0),0==e?"object"==typeof document.getElementById("birsd")&&document.getElementById("birsd")&&(document.getElementById("birsd").innerHTML="20-? ???? ????????"):"object"==typeof document.getElementById("birsd")&&document.getElementById("birsd")&&(document.getElementById("birsd").innerHTML="??? ??? ???????"),document.getElementById("headimga").style.background="url("+headimg[t]+") center 0 no-repeat",document.getElementById("headimga").style.display="block",document.getElementById("headimgb").style.display="none",document.getElementById("headimgb").style.background="url("+headimg[e]+") center 0 no-repeat";var n=$("#headimga");n.fadeOut(d),$("#main_logo").removeClass("logo1"),$("#main_logo").removeClass("logo2"),$("#main_logo").addClass(logo[e]),$(".head p:first").css("color",text_color[e]);var o=$("#headimgb");o.fadeIn(d),headtext[e]?(document.getElementById("headmsg").style.display="",document.getElementById("headtext").innerHTML=headtext[e]):(document.getElementById("headmsg").style.display="none",document.getElementById("headtext").innerHTML=""),document.getElementById("headslide"+t).style.background="",document.getElementById("headslide"+e).style.background="white",clearTimeout(tt),tt=window.setTimeout("headerfunc("+(e+1)+","+e+","+d+","+a+")",headdelay),tthis=e}var headimg=new Array,headtext=new Array,headsort=new Array,logo=new Array,text_color=new Array;headimg[0]=frontendabsolut+"/img/header/vtb_header_242px_v1-1.jpg",logo[0]="logo3",text_color[0]="#FFFFFF",headtext[0]="",headsort[0]="4",document.getElementById("headselector").innerHTML+="<span class=selectpoint id=headslide0 onClick=headerfunc(0,tthis,animtime,headdelay)>&nbsp;</span>",img0=new Image,img0.src=headimg[0],headimg[1]=frontendabsolut+"/img/header/vtb_header_242px_v1-2.jpg",logo[1]="logo4",text_color[1]="#FFFFFF",headtext[1]="",headsort[1]="3",document.getElementById("headselector").innerHTML+="<span class=selectpoint id=headslide1 onClick=headerfunc(1,tthis,animtime,headdelay)>&nbsp;</span>",img1=new Image,img1.src=headimg[1],headimg[2]=frontendabsolut+"/img/header/vtb_header_242px_v1-3.jpg",logo[2]="logo3",text_color[2]="#FFFFFF",headtext[2]="",headsort[2]="2",document.getElementById("headselector").innerHTML+="<span class=selectpoint id=headslide2 onClick=headerfunc(2,tthis,animtime,headdelay)>&nbsp;</span>",img2=new Image,img2.src=headimg[2],headimg[3]=frontendabsolut+"/img/header/vtb_header_242px_v1-4.jpg",logo[3]="logo3",text_color[3]="#FFFFFF",headtext[3]="",headsort[3]="1",document.getElementById("headselector").innerHTML+="<span class=selectpoint id=headslide3 onClick=headerfunc(3,tthis,animtime,headdelay)>&nbsp;</span>",img3=new Image,img3.src=headimg[3];var headdelay=12e3,animtime=500,ind_new=0,ind_old=0;tt="",tthis=0,headerfunc(ind_new,ind_old,animtime,headdelay);