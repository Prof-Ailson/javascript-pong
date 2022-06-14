//variaveis bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 24;
let raio = diametro / 2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variaveis minha raquete
let xMinhaRaquete = 10;
let yMinhaRaquete = 160;
let larguraRaquete = 10;
let alturaRaquete = 80;

//variaveis raquete oponente
let xRaqueteOponente = 580;
let yRaqueteOponente = 160;
let velocidadeYOponente;

//variaveis pontuação
let meusPontos = 0;
let pontosOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(5);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraMinhaRaquete();
  mostraRaqueteOponente();
  movimentaMinhaRaquete();
  verificaColisaoMinhaRaquete();
  movimentaRaqueteOponente();
  verificaColisaoRaqueteOponente();
  incluirPlacar();
  marcaPonto();
}

function mostraBolinha(){
  circle(xBolinha,yBolinha,raio);
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width  || xBolinha - raio < 0) {
      velocidadeXBolinha *= -1;
      }
  if (yBolinha + raio > height  || yBolinha - raio < 0) {
      velocidadeYBolinha *= -1;
      }  
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;  
}

function mostraMinhaRaquete(){
    rect(xMinhaRaquete,yMinhaRaquete,larguraRaquete,alturaRaquete);
}

function mostraRaqueteOponente(){
    rect(xRaqueteOponente,yRaqueteOponente,larguraRaquete,alturaRaquete);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
     yMinhaRaquete -= 10; 
  }
  if (keyIsDown(DOWN_ARROW)){
     yMinhaRaquete += 10; 
  }
}

function verificaColisaoMinhaRaquete(){
  if(xBolinha - raio < xMinhaRaquete + larguraRaquete && yBolinha - raio < yMinhaRaquete + alturaRaquete && yBolinha + raio > yMinhaRaquete){
    velocidadeXBolinha *= -1;
  }
}

function verificaColisaoRaqueteOponente(){
  if(xBolinha + raio > xRaqueteOponente 
     && yBolinha - raio < yRaqueteOponente + alturaRaquete && yBolinha + raio > yRaqueteOponente)
  {
    velocidadeXBolinha *= -1;
  }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - alturaRaquete / 2  - 40;
  yRaqueteOponente += velocidadeYOponente;
 
}

function incluirPlacar() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(150,10,40,20);
  fill(255);
  text(meusPontos,170,26);
  fill(color(255,140,0));
  rect(450,10,40,20);
  fill(255);
  text(pontosOponente,470,26);
}

function marcaPonto() {
  if (xBolinha > 590) {
    meusPontos += 1;
  }
  
  if (xBolinha < 10) {
    pontosOponente += 1;
  }
}


//cursos.alura.com.br/edutech
