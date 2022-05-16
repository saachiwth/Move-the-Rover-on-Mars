my_canvas=document.getElementById("myCanvas");
ctx=my_canvas.getContext("2d");

Images=["mars.jpg", "mars1.jpg", "mars2.jpg", "mars3.jpg", "mars4.jpg", "mars5.jpg"];
number=Math.floor(Math.random()*6);


var rover_width=100;
var rover_height=90;
var backgrond=Images[number];
var rover_Image="rover.png";
var rover_x=10;
var rover_y=10;

function add(){
    bg_img=new Image();
    bg_img.onload=uploadBackground;
    bg_img.src=backgrond;

    rover_img=new Image();
    rover_img.onload=uploadRover;
    rover_img.src=rover_Image;
}

function uploadBackground(){
    ctx.drawImage(bg_img , 0, 0, my_canvas.width, my_canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_img , rover_x, rover_y, rover_width, rover_height);
}

 window.addEventListener("keydown", myKeydown);

 function myKeydown(e){
     keyPress=e.keyCode;
     console.log(keyPress);

    if(keyPress=='38'){
    up();
    }

    if(keyPress=='40'){
    down();
    }

    if(keyPress=='37'){
    left();
     }

    if(keyPress=='39'){
    right();
     }
 }

 function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
    
   uploadBackground();
   uploadRover();
       }
}

function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
    
   uploadBackground();
   uploadRover();
       }
}

function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
    
   uploadBackground();
   uploadRover();
       }
}

function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
    
   uploadBackground();
   uploadRover();
       }
}

