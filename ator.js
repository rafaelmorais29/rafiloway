//ator
let xAtor = 85;
let yAtor = 366
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30)
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 3;
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i = 0; i < imagemCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], 50, 40, xAtor, yAtor, 9)
    if(colisao){
      voltaAtorPosicaoInicial();
      somColisao.play();
      meusPontos = 0;
    }
  }
}

function voltaAtorPosicaoInicial(){
  yAtor = 366;
}

function mostraPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(255,240,60);
  text(meusPontos, width / 5, 27);
}

function marcaPontos(){
  if(yAtor < 15){
    meusPontos += 1;
    somPonto.play();
    voltaAtorPosicaoInicial()
  }
}

function podeSeMover(){
  return yAtor < 366;
}