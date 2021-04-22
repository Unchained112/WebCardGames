function BreakoutView(props){
    console.log(props.breakout_data);
    writeData(props.breakout_data);
    return (
		<div class="w3-row-padding">

        <div class="w3-half" id="breakout game" style="max-width:600px">
		<div class="w3-center w3-dark-grey" id="out"></div>
		<div class="w3-dark-grey w3-center">Use A and D to control the paddle motion</div>
		<div class="w3-center">
        <canvas id="canvas" style="background: url('./assets/table_pattern.jpg')">Breakout Canvass</canvas>
        </div>
		<script>
            var breakout = VARIABLE.my_variable(0);
            runBreakout(breakout.cards);    
        </script>
		</div>
		<div class="w3-half" id="breakout introduction">
			<h2>Breakout</h2>
			<p>This is not a game related to Poker. We implement this game in our project for two main reasons. One is to test the run-time animation game using Model-View-Presenter structure and  Vue. The other reason is to test the Poker Card API. However, the development of Breakout game is still an interesting story to know.   </p>
			<h3>A Brief History of Breakout </h3>
			<p>"Breakout" is an arcade game conceived by Nolan Bushnell and Steve Bristol. They deliberately changed the simulated table tennis game "Pong" to a single-player game. After that, they had the inspiration to make the Breakout game. "Pong"'s developer Alan Alcorn was appointed as the person in charge of the game development work, and in 1975 developed the game in cooperation with Cyan Engineering. In the same year, Alcon appointed Steve Jobs to design the arcade prototype of this game, and Jobs also promised to complete the design prototype within 4 days.</p>
			<p><img src="./assets/breakout-A.png" width="200" align="right">Atari Breakout Arcade</img> Although Jobs did not have much experience in circuit board design, he knew that his friend Steve Wozniak had the ability to make circuit boards. Jobs successfully persuaded Wozniak to cooperate with him. In order to reduce the number of circuit boards, Wozniak used his "tricky little design" to design prototypes. Towards the end of the development work, Wozniak wanted to move the scoreboard to the top of the screen, but Jobs claimed that Bushnell wanted to place the scoreboard at the bottom of the screen, so Wozniak gave up the idea. The two successfully completed the design within 4 days, and Jobs received $5,000 as a reward. However, Wozniak did not know about the $5,000 award, so he only received $350 as salary.</p>
			<p>In the end, Atari could not use the prototype designed by Wozniak, because he reduced the number of transistors-transistor logic to 42, which made the arcade too sophisticated and complicated, making it difficult for Atari to manufacture them in large quantities. However, Wozniak pointed out that this was because Atari could not understand his design. Finally, Atari used their own design, which requires up to 100 transistors-transistor logic. Ironically, Wozniak's suggestion to move the scoreboard to the top of the screen was accepted instead.</p>


			<p>Reference <br></br>
			 Marty "Retro Rogue" Goldberg. <a href="https://web.archive.org/web/20140623034804/http://classicgaming.gamespy.com/View.php?view=Articles.Detail&id=395">"A Complete History of Breakout"</a> 
			</p>

		</div>
        </div>
    );
}

function writeData(data){
    VARIABLE.init([data]);
}

function runBreakout(cards){
var canvas = document.getElementById("canvas");
var cWidth = document.getElementById('breakout game').offsetWidth-10;
canvas.width = cWidth;
var cHeight = document.getElementById('breakout game').offsetWidth-10;
canvas.height = cHeight 

var c = canvas.getContext("2d");
var out = document.getElementById("out");
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var paddle_img = new Image;
paddle_img.src = "./assets/paddle_2.png"

var ball_img = new Image;
ball_img.src = "./assets/ball_32_32.png";

var player = new Player(0.4*cWidth, 0.95*cHeight,0.2*cWidth,0.04*cHeight, paddle_img);
var ball = new Ball(0.5*cWidth, 0.5*cHeight, 0.02*cWidth, Math.floor(Math.random()*2+2),Math.floor(Math.random()*2+2),"red", ball_img);
var bricks;
var dKeyDown = false;
var aKeyDown = false;
var gameStart = false;
var gameOver = false;
var winner = false;
var isPause = false;

loadMap(cards);
start();

function Brick(x,y,width,height,color,card){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.color = color;
    this.card = card;
}

function Ball(x,y,r,dx,dy,color,ball_img){
	this.x = x;
	this.y = y;
	this.r = r;
	this.dx = dx;
	this.dy = dy;
	this.color = color;
    this.ball_img = ball_img;
}

function Player(x,y,width,height,paddle){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.moveSpeedLimit = 10;
	this.accel = 0.75;
	this.decel = 0.75;
	this.xVel = 0;
	this.yVel = 0;
	this.color = "black";
    this.paddle = paddle;
}

function start(){
	checkPlayer_BoundsCollision();
	checkBall_PlayerCollision();
	checkBall_BoundsCollision();
	checkBall_BrickCollision();
	clear();
	renderPlayer();
    if(gameStart === true && isPause === false){
        checkKeyboardStatus();
        moveBall();
    }
    if(gameStart === true){
        renderBall();
    }
	renderBricks();
	checkWinner();
	if(gameOver === false){
        out.innerHTML = "Press S to start"
        out.innerHTML += "<br>";
		requestAnimationFrame(start);
	} else {
		out.innerHTML = "Game over";
		if(winner){
			out.innerHTML += ", you won!";
		}
		out.innerHTML += "<br>";
		out.innerHTML += "Press R to restart";
        out.innerHTML += "<br>";
	}
    out.innerHTML += "Press P to pause" 
		
}

function moveBall(){
	ball.x = ball.x+ball.dx;
	ball.y = ball.y+ball.dy;
}

document.onkeydown = function(e){
	if(e.keyCode === 65){
		aKeyDown = true;
	}
	if(e.keyCode === 68){
		dKeyDown = true;
	}
	if(e.keyCode === 82){
        console.log(gameStart);
		if(gameOver) restart(cards);
	}
    if(e.keyCode === 83){
        gameStart = true;
        console.log(gameStart);
    }
    if(e.keyCode == 80){
        if(isPause === false){
            isPause = true;
        }
        else{
            isPause = false;
        }
    }
}

document.onkeyup = function(e){
	if(e.keyCode === 65){
		aKeyDown = false;
	}
	if(e.keyCode === 68){
		dKeyDown = false;
	}
}

function checkBall_BrickCollision(){
	var ax1 = ball.x-ball.r;
	var ay1 = ball.y-ball.r;
	var ax2 = ball.x+ball.r;
	var ay2 = ball.y+ball.r;
	var bx1;
	var by1;
	var bx2;
	var by2;
    var prevX, prevY;
	for(var i = 0; i < bricks.length; i++){
		bx1 = bricks[i].x;
		by1 = bricks[i].y;
		bx2 = bricks[i].x+bricks[i].width;
		by2 = bricks[i].y+bricks[i].height;
		if(!(ax2 <= bx1 || bx2 <= ax1 || ay2 <= by1 || by2 <= ay1)){
			prevX = ball.x - ball.dx - ball.r;
			prevY = ball.y - ball.dy - ball.r;
			if((prevX > bx2 || prevX < bx1) && prevY >= by1 && prevY <= by2){
				ball.dx = -ball.dx;	
			} else {
				ball.dy = -ball.dy;
			}
			bricks.splice(i,1);
			return;
		}
	}
}

function checkBall_BoundsCollision(){
	var x = ball.x - ball.r;
	var y = ball.y - ball.r;
	var size = ball.r*2;
	var x2 = x + size;
	var y2 = y + size;
	if(x < 0){
		ball.x = 0 + ball.r;
		ball.dx = -ball.dx;
	} else if(x + size > canvas.width){
		ball.x = canvas.width - ball.r;
		ball.dx = -ball.dx;
	}
	if(ball.y < 0){
		ball.y = 0 + ball.r;
		ball.dy = -ball.dy
	} else if(ball.y + ball.r > canvas.height){
		gameOver = true;
		winner = false;
	}
}

function checkBall_PlayerCollision(){
	var ax1 = player.x;
	var ay1 = player.y;
	var ax2 = player.x+player.width;
	var ay2 = player.y+player.height;
	var bx1 = ball.x-ball.r;
	var by1 = ball.y-ball.r;
	var bx2 = ball.x+ball.r;
	var by2 = ball.y+ball.r;
	if(!(ax2 <= bx1 || bx2 <= ax1 || ay2 <= by1 || by2 <= ay1)){
		ball.dy = -ball.dy;
	}
}

function checkKeyboardStatus(){
	if(dKeyDown){
		if(player.xVel < player.moveSpeedLimit){
			player.xVel += player.accel;	
		} else {
			player.xVel = player.moveSpeedLimit;
		}
	} else {
		if(player.xVel > 0){
			player.xVel -= player.decel;
			if(player.xVel < 0) player.xVel = 0;
		}
	}
	if(aKeyDown){
		if(player.xVel > -player.moveSpeedLimit){
			player.xVel -= player.accel;	
		} else {
			player.xVel = -player.moveSpeedLimit;
		}
	} else {
		if(player.xVel < 0){
			player.xVel += player.decel;
			if(player.xVel > 0) player.xVel = 0;
		}
	}
	player.x+=player.xVel;
}

function checkPlayer_BoundsCollision(){
	if(player.x < 0){
		player.x = 0;
		player.xVel = 0;
	} else if(player.x + player.width > canvas.width){
		player.x = canvas.width - player.width;
		player.xVel = 0;
	}
	if(player.y < 0){
		player.y = 0;
		player.yVel = 0;
	} else if(player.y + player.height > canvas.height){
		player.y = canvas.height - player.height;
		player.yVel = 0;
	}
}

function renderPlayer(){
	c.save();
	// c.fillStyle = player.color;
	// c.fillRect(player.x,player.y,player.width,player.height);
    c.drawImage(player.paddle, 0, 0, 512, 128, player.x, player.y, player.width, player.height);
	c.restore();
}

function loadMap(cards){
    bricks = [];
    for(var i = 0; i < 52; i++){
        var card_img = new Image;
        card_img.src = cards[i].image;
        var x_pos = 0.06*cWidth + (i % 13)*(0.065*cWidth+2);
        var y_pos = 0.06*cWidth + Math.floor(i / 13)*(0.09*cWidth+2);
        var single_brick = new Brick(x_pos, y_pos, 0.065*cWidth, 0.09*cWidth, "blue", card_img);
        bricks = [...bricks, single_brick];
    }
}

function checkWinner(){
	if(bricks.length < 1){
		gameOver = true;
		winner = true;
	}
}

function restart(cards){
	out.innerHTML = "";
	gameOver = false;
	loadMap(cards);
	player = new Player(0.5*cWidth, 0.95*cHeight,0.2*cWidth,0.04*cHeight, paddle_img);
	ball = new Ball(0.5*cWidth, 0.5*cHeight, 0.02*cWidth, Math.floor(Math.random()*2+2),Math.floor(Math.random()*2+2),"red", ball_img);
	start();
}

function renderBall(){
	c.save();
	// c.fillStyle = ball.color;
	// c.beginPath();
	// c.arc(ball.x,ball.y,ball.r,0,Math.PI*2);
	// c.fill();
    c.drawImage(ball.ball_img, 0, 0, 32, 32, ball.x, ball.y, ball.r, ball.r);
	c.restore();
}

function clear(){
	c.clearRect(0,0,canvas.width,canvas.height);
}

function renderBricks(){
	for(var i = 0; i < bricks.length; i++){
		c.save();
		// c.fillStyle = bricks[i].color;
		// c.fillRect(bricks[i].x,bricks[i].y,bricks[i].width,bricks[i].height);
        c.drawImage(bricks[i].card, 0, 0, 226, 314, bricks[i].x, bricks[i].y, bricks[i].width, bricks[i].height);
		c.restore();	
	}
}
}