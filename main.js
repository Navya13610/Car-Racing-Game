canvas= document.getElementById('myCanvas');
ctx= canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "Car1.png"
car1_x = 10;
car1_y = 10;
car2_width = 120;
car2_height = 70;
car2_image = "Car2.png"
car1_x = 10;
car1_y = 100;

background_image = "racing.jpg"

function add()
{
    background_imdTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;
}

function add()
{
    background_imdTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar1;
    car2_imgTag.src = car2_image;
}

function uploadBackground()
{
    ctx.drawImage(backgroung_imgTag, 0, 0, canvas.height, canvas.width);
}
function uploadcar1()
{
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_height, car1_width);
}

function uploadBackground()
{
    ctx.drawImage(backgroung_imgTag, 0, 0, canvas.height, canvas.width);
}
function uploadcar2()
{
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_height, car2_width);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
     console.log(keyPressed);
     if(keyPressed == '38') 
     {
          up();
           console.log("up");
         }
         if(keyPressed == '40')
          {
               down();
                console.log("down");
             }
             if(keyPressed == '37')
              { 
                  left();
                   console.log("left"); 
                }
                if(keyPressed == '39')
                 {
                      right();
                       console.log("right");
                     }
                     
}
function car1_up()
{
    if(car_y>=0)
    {
        car_y=carr_y-10;
        console.log("when up arrow is pressed, x = "+ car_x + "| y = "+ car_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1_left()
{
    if(car_x>=0)
{
    car_x=car_x-10;
    console.log("when left arrow is pressed, x = "+ car_x + "|y = "+ car_y);
    uploadBackground();
    uploadcar1();
    uploadcar2();
}
}
function car1_right()
{
    if(car_y<=500)
{
    car_x=car_x+10;
    console.log("when right arrow is pressed, x = "+ rover_x + "|y = "+ rover_y);
    uploadBackground();
    uploadcar1();
    uploadcar1();
}
}
function car1_down()
{
    if(car_y<=500)
{
    car_x=car_x+10;
    console.log("when right arrow is pressed, x = "+ rover_x + "|y = "+ rover_y);
    uploadBackground();
    uploadcar1();
    uploadcar1();
}
}
if(car1_x > 700)
{
    console.log("car1 Won");
    document.getElementById('game_status').innerHTML = "car 1 Won!!"
}
