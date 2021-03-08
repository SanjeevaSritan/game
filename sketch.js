var back_img1,background1,door,door_img,back_img2,hero,hero_img,coins,coin1,coin2,coin3,coin4,coin5,coin6,back_img3
var gameState =0
var score = 0
var score1 = 0
var monster,monster_img,hero_img2
var coin7,coin8,coin9,coin10,coin11,coin12,coin13,coin14,coin15,coin16,coin17,coin18,coin19,coin20,coin21  
var coin22,coin23,coin24,coin25,coin26,coin27,coin28,coin29,coin30,coinsAll,goS,go_img
var k1,k2,k3,k1_img,k2_img,k3_img,jail,jail_img,k4,k4_img,back_img4
function preload(){
  back_img1 = loadImage("scary background.jpg")
  door_img = loadImage("door.png")
  back_img2 = loadImage("room1.jpg")
  hero_img = loadImage("hero.png")
  coins = loadImage("coin.png")
  back_img3 = loadImage("room2.jpg")
  monster_img = loadImage("monster2.png")
 hero_img2 = loadImage("hero2.png")
 go_img = loadImage("go.png")
 k1_img = loadImage("sk1.png")
 k2_img = loadImage("sk2.png")
 k3_img = loadImage("sk3.png")
 jail_img = loadImage("jail.jpg")
 k4_img = loadImage("hc.png")
back_img4 = loadImage("cave.jpg")
}
 function setup() {
  createCanvas(1200,800);
  background1 = createSprite(500,300,1000,400)
  background1.addImage(back_img1)
  background1.scale = 1.9
 door = createSprite(520,325) 
 door.addImage(door_img)
 door.scale = 0.3
 hero = createSprite(600,650)
 hero.addImage(hero_img)
 hero.scale = 0.2
 hero.visible = false
 monster = createSprite(1150,160)
 monster.scale = 0.3
 monster.addImage(monster_img)
 monster.visible = false
 coin1=createSprite(150,150,20,20)
 coin1.addImage(coins)
 coin1.scale = 0.1
 coin2=createSprite(250,150,20,20)
 coin2.addImage(coins)
 coin2.scale = 0.1
 coin3=createSprite(350,150,20,20)
 coin3.addImage(coins)
 coin3.scale = 0.1
 coin4=createSprite(450,150,20,20)
 coin4.addImage(coins) 
 coin4.scale = 0.1
 coin5=createSprite(550,150,20,20)
 coin5.addImage(coins) 
 coin5.scale = 0.1
 coin6=createSprite(650,150,20,20)
 coin6.addImage(coins) 
 coin6.scale = 0.1
 coin7=createSprite(150,225,20,20);
 coin7.addImage(coins) 
 coin7.scale = 0.1 
 coin8=createSprite(250,225,20,20);
 coin8.addImage(coins) 
 coin8.scale = 0.1
 coin9 =createSprite(350,225,20,20);
 coin9.addImage(coins) 
 coin9.scale = 0.1
 coin10=createSprite(450,225,20,20);
 coin10.addImage(coins) 
 coin10.scale = 0.1
 coin11=createSprite(550,225,20,20);
 coin11.addImage(coins) 
 coin11.scale = 0.1
 coin12=createSprite(650,225,20,20);
 coin12.addImage(coins) 
 coin12.scale = 0.1
 coin13=createSprite(150,300,20,20)
 coin13.addImage(coins) 
coin13.scale = 0.1
 coin14=createSprite(250,300,20,20)
 coin14.addImage(coins) 
 coin14.scale = 0.1
 coin15=createSprite(350,300,20,20)
 coin15.addImage(coins) 
coin15.scale = 0.1
 coin16=createSprite(450,300,20,20)
 coin16.addImage(coins) 
coin16.scale = 0.1
 coin17=createSprite(550,300,20,20)
 coin17.addImage(coins) 
coin17.scale = 0.1
 coin18=createSprite(650,300,20,20)
 coin18.addImage(coins) 
coin18.scale = 0.1
 coin19=createSprite(150,375,20,20)
 coin19.addImage(coins) 
coin19.scale = 0.1
 coin20=createSprite(250,375,20,20)
 coin20.addImage(coins) 
coin20.scale = 0.1
 coin21=createSprite(350,375,20,20)
 coin21.addImage(coins) 
coin21.scale = 0.1
 coin22=createSprite(450,375,20,20)
 coin22.addImage(coins) 
coin22.scale = 0.1
 coin23=createSprite(550,375,20,20)
 coin23.addImage(coins) 
coin23.scale = 0.1
 coin24=createSprite(150,450,20,20)
 coin24.addImage(coins) 
coin24.scale = 0.1
 coin25=createSprite(250,450,20,20)
 coin25.addImage(coins) 
coin25.scale = 0.1
 coin26=createSprite(350,450,20,20)
 coin26.addImage(coins) 
coin26.scale = 0.1
 coin27=createSprite(450,450,20,20)
 coin27.addImage(coins) 
coin27.scale = 0.1
 coin28=createSprite(550,450,20,20)
 coin28.addImage(coins) 
coin28.scale = 0.1
 coin29=createSprite(650,450,20,20)
 coin29.addImage(coins) 
 coin29.scale = 0.1
 coin30=createSprite(750,450,20,20)
 coin30.addImage(coins) 
 coin30.scale = 0.1
 coin1.visible = false
 coin2.visible = false
 coin3.visible = false
 coin4.visible = false
 coin5.visible = false
 coin6.visible = false
 coin7.visible = false
 coin8.visible = false
 coin9.visible = false
 coin10.visible = false
 coin11.visible = false
 coin12.visible = false
 coin13.visible = false
 coin14.visible = false
 coin15.visible = false
 coin16.visible = false
 coin17.visible = false 
 coin18.visible = false
 coin19.visible = false
 coin20.visible = false
 coin21.visible = false
 coin22.visible = false
 coin23.visible = false
 coin24.visible = false
 coin25.visible = false
 coin26.visible = false
 coin27.visible = false
 coin28.visible = false
 coin29.visible = false
 coin30.visible = false
 goS = createSprite(400,200,20,25)
 goS.addImage(go_img)
 goS.visible = false
 goS.scale = 0.3
 k1=createSprite(350,450,20,20)
k1.addImage(k1_img) 
k1.scale = 0.2
k1.visible = false
k2=createSprite(450,450,20,20)
k2.addImage(k2_img)
k2.scale = 0.2
k2.visible = false
k3=createSprite(550,450,20,20)
k3.addImage(k3_img)
k3.scale = 0.2
k3.visible = false
jail = createSprite(300,500,70,80)
jail.scale = 1.5
jail.addImage(jail_img)
jail.visible = false
k4 = createSprite(450,450,20,20)
k4.addImage(k4_img)
k4.scale = 2.0
k4.visible = false
 }

function draw() {
  drawSprites();
 
  if (keyDown(UP_ARROW)){
    hero.y= hero.y-3
      }
    if (keyDown(DOWN_ARROW)){
      hero.y =hero.y+3
     }
    if (keyDown(RIGHT_ARROW)){
    hero.x =hero.x+3
    }
    if (keyDown(LEFT_ARROW)){
    hero.x = hero.x-3
    }
  
  if (gameState === 0){
  fill("red")
  textSize(20)
 text("SAVE YOUR 3 FRIENDS BY CROSSING CERTAIN CIRCUMSTANCES",250,150)
  }
 
 if (mousePressedOver(door)){
  gameState =1
 }
 if (gameState === 1){
text("Score:"+score,500,50)
door.visible = false
background1.addImage(back_img2)
hero.visible = true
coin1.visible = true
coin2.visible = true
coin3.visible = true
coin4.visible = true
coin5.visible = true
coin6.visible = true
coin7.visible = true
coin8.visible = true
coin9.visible = true
coin10.visible = true
coin11.visible = true
coin12.visible = true
coin13.visible = true
coin14.visible = true
coin15.visible = true
coin16.visible = true
coin17.visible = true 
coin18.visible = true
coin19.visible = true
coin20.visible =true
coin21.visible = true
coin22.visible = true
coin23.visible = true
coin24.visible = true
coin25.visible = true
coin26.visible = true
coin27.visible = true
coin28.visible = true
coin29.visible = true
coin30.visible = true
if(hero.isTouching(coin1)){
coin1.destroy()
score = score+1
}
if(hero.isTouching(coin2)){
  coin2.destroy()
  score = score+1
  }
  if(hero.isTouching(coin3)){
    coin3.destroy()
    score = score+1
    }
    if(hero.isTouching(coin4)){
      coin4.destroy()
      score = score+1
      }
      if(hero.isTouching(coin5)){
        coin5.destroy()
        score = score+1
        }
        if(hero.isTouching(coin6)){
          coin6.destroy()
          score = score+1
          }
          if(hero.isTouching(coin7)){
            coin7.destroy()
            score = score+1
            }
            if(hero.isTouching(coin8)){
              coin8.destroy()
              score = score+1
              }
              if(hero.isTouching(coin9)){
                coin9.destroy()
                score = score+1
                }
                if(hero.isTouching(coin10)){
                  coin10.destroy()
                  score = score+1
                  }
                  if(hero.isTouching(coin11)){
                    coin11.destroy()
                    score = score+1
                    }
                    if(hero.isTouching(coin12)){
                      coin12.destroy()
                      score = score+1
                      }
                      if(hero.isTouching(coin1)){
                        coin1.destroy()
                        score = score+1
                        }
                        if(hero.isTouching(coin13)){
                          coin13.destroy()
                          score = score+1
                          }
                          if(hero.isTouching(coin14)){
                            coin14.destroy()
                            score = score+1
                            }
                            if(hero.isTouching(coin15)){
                              coin15.destroy()
                              score = score+1
                              }
                              if(hero.isTouching(coin16)){
                                coin16.destroy()
                                score = score+1
                                }
                                if(hero.isTouching(coin17)){
                                  coin17.destroy()
                                  score = score+1
                                  }
                                  if(hero.isTouching(coin18)){
                                    coin18.destroy()
                                    score = score+1
                                    }
                                    if(hero.isTouching(coin19)){
                                      coin19.destroy()
                                      score = score+1
                                      }
                                      if(hero.isTouching(coin20)){
                                        coin20.destroy()
                                        score = score+1
                                        }
                                        if(hero.isTouching(coin21)){
                                          coin21.destroy()
                                          score = score+1
                                          }
                                          if(hero.isTouching(coin22)){
                                            coin22.destroy()
                                            score = score+1
                                            }
                                            if(hero.isTouching(coin23)){
                                              coin23.destroy()
                                              score = score+1
                                              }
                                              if(hero.isTouching(coin24)){
                                                coin24.destroy()
                                                score = score+1
                                                }
                                                if(hero.isTouching(coin25)){
                                                  coin25.destroy()
                                                  score = score+1
                                                  }
                                                  if(hero.isTouching(coin26)){
                                                    coin26.destroy()
                                                    score = score+1
                                                    }
                                                    if(hero.isTouching(coin27)){
                                                      coin27.destroy()
                                                      score = score+1
                                                      }
                                                      if(hero.isTouching(coin28)){
                                                        coin28.destroy()
                                                        score = score+1
                                                        }
if(hero.isTouching(coin29)){
 coin29.destroy()
 score = score+1
}
if(hero.isTouching(coin30)){
  coin30.destroy()
  score = score+1
 }
}
if (score===30){
gameState = 2
}

if(gameState === 2){
  text("Score:"+score1,500,50)
  coin1.visible = false
  coin2.visible = false
  coin3.visible = false
  coin4.visible = false
  coin5.visible = false
  coin6.visible = false
  coin7.visible = false
  coin8.visible = false
  coin9.visible = false
  coin10.visible = false
  coin11.visible = false
  coin12.visible = false
  coin13.visible = false
  coin14.visible = false
  coin15.visible = false
  coin16.visible = false
  coin17.visible = false 
  coin18.visible = false
  coin19.visible = false
  coin20.visible = false
  coin21.visible = false
  coin22.visible = false
  coin23.visible = false
  coin24.visible = false
  coin25.visible = false
  coin26.visible = false
  coin27.visible = false
  coin28.visible = false
  coin29.visible = false
  coin30.visible = false
background1.addImage(back_img3)
monster.visible = true
hero.addImage(hero_img2)
if(hero.isTouching(monster) && mousePressedOver(monster)){
score1 = score1+1
}
if(score1===10){
monster.destroy()
text("YOU ARE ONE STEP AWAY FROM SAVING YOUR FRIENDS",250,150)
goS.visible = true
}

}
if(mousePressedOver(goS)){
  gameState =3
}
if(gameState === 3){
  hero.addImage(hero_img)
  goS.visible = false
  background1.addImage(back_img4)
  k1.visible = true
  k2.visible = true
  k3.visible = true
  jail.visible = true
  k4.visible = false
  text("BREAK THE JAIL",600,150)
  if(hero.isTouching(jail)){
    jail.destroy()
    gameState = 4
  }
}
if(gameState === 4){
  k1.visible = false
  k2.visible = false
  k3.visible = false 
  jail.visible = false
  k4.visible = true 
  text("YAYYYY YOU DID IT",570,150)
}
}
