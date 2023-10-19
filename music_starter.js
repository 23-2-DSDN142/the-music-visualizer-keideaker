let firstRun = true
let starImg;
let sunImg
let earthImg
let marsImg
let moonImg
let neptuneImg
let randomImg
let saturnImg
let yellowstarImg
let spacemanImg
let spaceshipImg



// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
  //text and background
  background('#000000')
  textFont('Futura'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(20);

var spaceUp = map(drum,0,900,0,height)
var spaceDown = 20

 // display "words"
 textAlign(CENTER);
 fill('#ffffff')
 textSize(vocal);
 text(words,550,720);

 if(firstRun){
  //white stars
  starImg = loadImage('star.png')
  firstRun = false

  //sun
  sunImg = loadImage('sun.png')
firstRun = false

//earth
earthImg = loadImage('earth.png')
firstRun = false

//mars
marsImg = loadImage('mars.png')
firstRun = false

//moon
moonImg = loadImage('moon.png')
firstRun = false

//neptune
neptuneImg = loadImage ('neptune.png')
firstRun = false

//made up planet
randomImg = loadImage ('random.png')
firstRun = false

//saturn
saturnImg = loadImage ('saturn.png')
firstRun = false

//other star
yellowstarImg = loadImage ('yellowstar.png')
firstRun = false

//spaceman 
spacemanImg = loadImage ('spaceman.png')
firstRun = false

//spaceship
spaceshipImg = loadImage ('spaceship.png')
firstRun = false



}

image(starImg,bass,0)
image(sunImg,vocal,0)
image(earthImg,other,0)
image(marsImg,other,0)
image(moonImg,other,0)
image(neptuneImg,other,0)
image(randomImg,other,0)
image(saturnImg,other,0)
image(yellowstarImg,vocal,0)
image (spacemanImg,spaceUp,spaceDown)
image (spaceshipImg,drum,0)
}



