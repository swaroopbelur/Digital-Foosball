function Ball() 
{
	//Use screen.width in the final version
	this.x = width/2;
	this.y = height/2;
	this.xspeed = 1;
	this.yspeed = 2;
	this.aGoals = 0;
	this.bGoals = 0;

	team = [1,3,2,5,5,2,3,1];
	teamLocation = [0,0,0,0,0,0,0,0,0];
	kickForce = 30;

	this.setupPlayers = function()
	{
		for (var i = 0; i < 8; i++) {
			for (var j = 0; j < team[i]; j++) {
				if (i == 0 || i == 1 || i == 3 || i == 5)
					fill(255, 0, 0);
				else
					fill(0,0,255);
				ellipse(((i+0.5)*width)/8 , ((j+0.5)*height/team[i]) + teamLocation[i], 25,25);
			}
		}
	}

	this.setupField = function()
	{
		fill(255);
		rect(0,height*0.3, width*0.12, height*0.4);
		rect((width*0.88)-7,height*0.3, width*0.13, height*0.4);
		fill(0,255,0);
		rect(0,(height*0.3)+7, width*0.115, height*0.38);
		rect(width*0.88,(height*0.3)+7, width*0.13, height*0.38);
		fill(255);
		rect(0, (height*0.4), 7, (height/5));
		rect(width-7, (height*0.4), 7, (height/5));
		rect((width/2)-2.5, 0, 5, height)
		ellipse(width/2, height/2, 20, 20);
		ellipse(width/2, height/2, 105, 105);
		fill(10, 255, 10);
		ellipse(width/2, height/2, 100, 100);
	}

	this.reset = function()
	{
		this.x = width/2;
		this.y = height/2;
	}

	this.show = function() 		
	{
		fill(32,32,32);
		ellipse(this.x, this.y, 30, 30);
	}

	this.moveBall = function()
	{
		this.x += this.xspeed;
		this.y += this.yspeed;
	}

	this.kickCheck = function()
	{
		for(var i = 0; i < 8; i++)
		{
			if((this.x - 12.5) < (((i+0.5)*width)/8) && (((i+0.5)*width)/8) < (this.x + 12.5))
			{
				for(var j = 0; j < team[i]; j++)
				{
					if((this.y - 12.5) < (((j+0.5)*height/team[i]) + teamLocation[i]) && (((j+0.5)*height/team[i]) + teamLocation[i]) < (this.y + 12.5))
					{
						console.log("Kick");
						var k = ((this.y - (((j+0.5)*height/team[i]) + teamLocation[i]))/(this.x - (((i+0.5)*width)/8)));
						this.xspeed = -k*this.xspeed;
						this.yspeed = -this.yspeed/k;
						break;
					}
				}
			}
		}
	}

	this.edgeCheck = function()
	{	
		var temp = 0;
		if(this.y > height || this.y < 0)
		{
			temp = 1;
			console.log("Top or Bottom");
			this.yspeed = -this.yspeed;
		}
		if(this.x > width || this.x < 3)
		{
			temp = 2;
			console.log("Left or Right");
			this.xspeed = -this.xspeed;
		}
		if(temp != 0 && (0.55*height > this.y && 0.45*height < this.y)) //Fix these values
			if(temp == 2)
			{
				console.log("A GOOOAALLL");
				this.aGoals += 1;
				this.reset();
			}
			else
			{
				console.log("B GOOOOAALLL");
				this.bGoals += 1;
				this.reset();
			}

	}

}
