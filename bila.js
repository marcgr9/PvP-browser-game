// jucator.js


class Jucator {
	constructor(tip) {
		this.tip = tip
		this.r = RADIUS
		this.pos = createVector(random(720), random(720))
		this.dir = createVector(0, 0)
		this.vel = INITIAL_VEL
		this.scor = 0
		this.teleporting = false
		this.img = pImgs[tip]
		this.img.resize(this.r, this.r)
	}
	
	show() {
		imageMode(CENTER)
		image(this.img, this.pos.x, this.pos.y)
		this.move()
	}
	
	move() {
		this.pos.x += this.vel * this.dir.x
		this.pos.y += this.vel * this.dir.y
		if (this.pos.x < 0 || this.pos.x > width) this.pos.x = abs(this.pos.x-width)
		if (this.pos.y < 0 || this.pos.y > height) this.pos.y = abs(this.pos.y-height)
		
		if (this.ate()) {
			sunete[1].play()
			this.scor += game.mancare.points[game.mancare.index]
			this.vel -= 0.1
			this.r += 3
			this.img.resize(this.r, this.r)
			game.mancare.update()
		}
		
	}
	
	setDir(x, y) {
		this.dir = createVector(x, y)
	}
	
	ate() {
		return dist(this.pos.x, this.pos.y, game.mancare.pos.x, game.mancare.pos.y) < this.r / 2
	}
	
	teleport() {
		if (!this.teleporting) {
			let that = this
			this.teleporting = true
			setTimeout(function() {
				sunete[0].play()
				that.pos = createVector(random(720), random(720))
				that.r -= 3
				that.vel += 0.1
				this.img.resize(this.r, this.r)
				that.teleporting = false
			}, 1000)
		}
	}
}

































/*class Bila {
	construct(tip) {
		this.r = 32;
    this.tip = tip;
    switch (this.tip) {
      case 1: this.pos = createVector(width / 8, height/8); break;
      case 2: this.pos = createVector(width - width/8, height - height/8); break;
    }
	}
	misca() {
		this.pos.x += dir[this.tip-1].x * vel[this.tip-1];
		this.pos.y += dir[this.tip-1].y * vel[this.tip-1];
	}
	mareste() {
		this.r += 5;
	}
	arata() {
		if (!mancat[this.tip-1]) {
			noStroke();
	    fill(culori[this.tip-1]);
			ellipse(this.pos.x, this.pos.y, this.r);
			textSize(24);
			fill(255);
			textAlign(CENTER);
			text(scor[this.tip-1], this.pos.x, this.pos.y+8);
			fill(culori[this.tip-1]);
		}
	}
	afara() {
		if (this.pos.x < 0 || this.pos.x > width) this.pos.x = abs(this.pos.x-width);
		if (this.pos.y < 0 || this.pos.y > height) this.pos.y = abs(this.pos.y-height);
	}
	gata() {
		textSize(32);
		textAlign(CENTER);
		fill(culori[this.tip-1]);
		switch (this.tip) {
			case 1:
				if (vel[0] <= 0 || scor[0] >= scorPentruVictorie.value()) {
					// noLoop();
					sunetScary.loop()
					text(jucator1.value() + " A CASTIGAT", width/2, height/2);
					text("APASA R PENTRU A JUCA DIN NOU", width/2, height/4);
					gata = true;
					vel[0] = 4;
					this.r = 100;
				}
				break;
				case 2:
					if (vel[1] <= 0 || scor[1] >= scorPentruVictorie.value()) {
						// noLoop();
						sunetScary.loop()
						text(jucator2.value() + " A CASTIGAT", width/2, height/2);
						text("APASA R PENTRU A JUCA DIN NOU", width/2, height/4);
						gata = true;
						vel[1] = 4;
						this.r = 100;
					}
				break;
		}
	}
	mancat() {
		if (dist(this.pos.x, this.pos.y, mancare.pos.x, mancare.pos.y) < this.r/2) {
			mancare.update();
			this.mareste();
			//console.log("JUCATOR " + this.tip-1 + ":: " + ++scor[this.tip-1]);
			++scor[this.tip-1];
			vel[this.tip-1] -= 0.1;
		}
	}
}

function tp(B) {
	if (!gata) {
		B.r -= 5;
		B.pos.x = random(width);
		B.pos.y = random(height);
	}
}


var B = new Bila();
var B2 = new Bila();
*/