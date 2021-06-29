
var canvas= new fabric.canvas('myCanvas');

ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h1.png", function(Img)
	{
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
	};
	new_image();
}

function new_image()
{
	abric.Image.fromURL(get_image, function(Img){
		block_image_object=Img;
	
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
		top:abric.Image.fromURL(get_image, function(Img){
    block_image_object=Img;

    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
    top:player_y, left:player_x
    });
    canvas.add(block_image_object);
    });
	ball_y, left:fabric.Image.fromURL(get_image, function(Img){
    block_image_object=Img;

    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
    top:ball_y, left:ball_x
    });
    canvas.add(block_image_object);
    });_x
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	else{
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
		function up()
{
    if(ball_y >= 0) {
        ball_y = ball_y - block_image_height;
        console.log("Block image height = " + block_image_height);
        console.log("when up arrow is pressed, X = " + ball_x + "Y = " + ball_y);
        canvas.remove(ball_object);
        ball_update();
    }
}

function down()
{
    if(player_y <= 500) {
        ball_y = ball_y + block_image_height;
        console.log("Block image height = " + block_image_height);
        console.log("when down arrow is pressed, X = " + ball_x + "Y = " + ball_y);
        canvas.remove(ball_object);
        ball_update();
    }
}

function left()
{
    if(ball_x >= 0) {
        ball_x = ball_x - block_image_width;
        console.log("Block image width = " + block_image_width);
        console.log("when left arrow is pressed, X = " + ball_x + "Y = " + ball_y);
        canvas.remove(ball_object);
        ball_update();
    }
}

function right()
{
    if(ball_x <= 850) {
        ball_x = ball_x + block_image_width;
        console.log("Block image width = " + block_image_width);
        console.log("when right arrow is pressed, X = " + ball_x + "Y = " + ball_y);
        canvas.remove(ball_object);
        ball_update();
    }
}
	}
	
}

