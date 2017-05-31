var game = new Phaser.Game(1350, 650, Phaser.CANVAS, 'phaser-example', { 
    preload: preload,
    create: create
});

function preload() {

    game.load.image('floresta', '../images/animaSom/floresta.png');
    game.load.image('cachorro', '../images/animaSom/cachorro.png');
    game.load.image('gato', '../images/animaSom/gato.png');
    game.load.image('passaro', '../images/animaSom/passaro.png');

}

var graphics;


function create() {

    //  This creates a simple sprite that is using our loaded image and
    //  displays it on-screen
    var background = game.add.sprite(0, 0, 'floresta');
    background.width = 1366;
    background.height = 720;

    // Desenha o cachorro e a borda da box
    graphics = game.add.graphics(0, 0);
    graphics2 = game.add.graphics(0, 0);
    graphics3 = game.add.graphics(0, 0);
    
    drawShape(1, 120, 250, 0x00ff9d, 0x0000ff);   
    drawShape(2, 520, 250, 0x00ff9d, 0x0000ff);   
    drawShape(3, 920, 250, 0x00ff9d, 0x0000ff);   

    var cachorro = game.add.sprite(130, 260, 'cachorro'); 
    cachorro.width = 300;
    cachorro.height = 170;
    

    // Desenha o gato e a borda da box

    var gato = game.add.sprite(530, 260, 'gato'); 
    gato.width = 300;
    gato.height = 170;

    // Desenha o passaro e a borda da box

    var passaro = game.add.sprite(930, 260, 'passaro'); 
    passaro.width = 300;
    passaro.height = 170;

    graphics.inputEnabled = true;
    graphics.input.useHandCursor = true;    

    graphics.events.onInputDown.add(function(){ 
        drawShape(1, 120, 250, 0x0000ff, 0x0000ff) }, this);
    graphics.events.onInputUp.add(function(){ 
        drawShape(1, 120, 250, 0x00ff9d, 0x0000ff) }, this);
    graphics.events.onInputOver.add(function(){
        drawShape(1,120, 250, 0xffaa00, 0x0000ff)}, this);
    graphics.events.onInputOut.add(function(){ 
        drawShape(1, 120, 250, 0x00ff9d, 0x0000ff) }, this);

    graphics2.inputEnabled = true;
    graphics2.input.useHandCursor = true;    

    graphics2.events.onInputDown.add(function(){ 
        drawShape(2, 520, 250, 0x0000ff, 0x0000ff) }, this);
    graphics2.events.onInputUp.add(function(){ 
        drawShape(2, 520, 250, 0x00ff9d, 0x0000ff) }, this);
    graphics2.events.onInputOver.add(function(){
        drawShape(2,520, 250, 0xffaa00, 0x0000ff)}, this);
    graphics2.events.onInputOut.add(function(){ 
        drawShape(2, 520, 250, 0x00ff9d, 0x0000ff)}, this);

    graphics3.inputEnabled = true;
    graphics3.input.useHandCursor = true;    

    graphics3.events.onInputDown.add(function(){ 
        drawShape(3, 920, 250, 0x0000ff, 0x0000ff) }, this);
    graphics3.events.onInputUp.add(function(){ 
        drawShape(3, 920, 250, 0x00ff9d, 0x0000ff) }, this);
    graphics3.events.onInputOver.add(function(){
        drawShape(3, 920, 250, 0xffaa00, 0x0000ff)}, this);
    graphics3.events.onInputOut.add(function(){ 
        drawShape(3, 920, 250, 0x00ff9d, 0x0000ff) }, this);

}


function drawShape(id, x, y, fill, style) {
    if(id == 1){
        graphics.clear();
        graphics.beginFill(fill);
        graphics.lineStyle(2, style, 1);
        graphics.drawRoundedRect(x, y, 315, 190, 10);
        graphics.endFill();
    }
    else if(id == 2){
        graphics2.clear();
        graphics2.beginFill(fill);
        graphics2.lineStyle(2, style, 1);
        graphics2.drawRoundedRect(x, y, 315, 190, 10);
        graphics2.endFill();
    }
    else{
        graphics3.clear();
        graphics3.beginFill(fill);
        graphics3.lineStyle(2, style, 1);
        graphics3.drawRoundedRect(x, y, 315, 190, 10);
        graphics3.endFill();
    }
    
}

