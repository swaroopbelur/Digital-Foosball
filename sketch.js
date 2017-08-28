var ball;
function setup()
{
	//use screen.width in the final version
	createCanvas(1280,720);
	ball = new Ball();

}

function draw()
{
	background(10,255,10);  
	ball.setupField();
	ball.setupPlayers();
	ball.show();
	ball.moveBall();
	ball.kickCheck();
	//console.log(0.45*height, ball.y, 0.55*height);
	ball.edgeCheck();
}