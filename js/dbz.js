 var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
     preload: preload,
     create: create,
     update: update
 });

 function preload() {
     game.load.image('sky', '../images/sky.png');
     game.load.image('ground', '../images/platform.png');
     game.load.image('star', '../images/star.png');
     game.load.image('kamehameha', '../images/kamehameha.png');
     game.load.spritesheet('dude', '../images/goku2.png', 32, 32);
     game.load.spritesheet('baddie', '../images/baddie.png', 32, 32);
 }

 var player;
 var baddies;
 var platforms;
 var fireButton;
 var kamehameha;
 var kamehamehas;
 var kamehamehaTime = 0;
 var cursors;
 var frames;
 var animK = false;

 function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.add.sprite(0, 0, 'sky');
    platforms = game.add.group();
    platforms.enableBody = true;
    var ground = platforms.create(0, game.world.height - 64, 'ground');
    ground.scale.setTo(2, 2);
    ground.body.immovable = true;
    var ledge = platforms.create(400, 400, 'ground');
    ledge.body.immovable = true;
    ledge = platforms.create(-150, 250, 'ground');
    ledge.body.immovable = true;

    // adicionando o player
    player = game.add.sprite(32, game.world.height - 150, 'dude');
    game.physics.arcade.enable(player);
    player.body.bounce.y = 0.1;
    player.body.gravity.y = 350;
    player.body.collideWorldBounds = true;
    player.animations.add('left', [5, 9, 5], 10, true);
    player.animations.add('right', [4, 8, 12], 10, true);
    player.animations.add('kamehameha', [76, 80, 84, 72], 10, true);
    
    
    //  The baddies!
    baddies = game.add.sprite(500, game.world.height - 300, 'baddie');
    game.physics.arcade.enable(baddies);
    baddies.body.bounce.y = 0.1;
    baddies.body.gravity.y = 350;
    baddies.body.collideWorldBounds = true;
    baddies.frame = 2;
    baddies.animations.add('left', [1,2], 5, true);
    baddies.animations.add('right', [2, 3], 5, true);

    cursors = game.input.keyboard.createCursorKeys();
    fireButton = game.input.keyboard.addKeyCapture([Phaser.KeyCode.X]);
    runButton = game.input.keyboard.addKeyCapture([Phaser.KeyCode.SHIFT]);

   
 }

 function update() {
    var hitPlatform = game.physics.arcade.collide(player, platforms);
    var hitPlatformBaddie = game.physics.arcade.collide(baddies, platforms);

    baddies.body.velocity.x = 100;
    baddies.animations.play('right');
    
    if (!player.body.touching.down && cursors.right.isDown) {
        player.frame = 20;
        player.body.velocity.x = 150;
        player.animations.play('right');

    } 

    else if (!player.body.touching.down && cursors.left.isDown) {
        player.frame = 21;
        player.body.velocity.x = -150;
        player.animations.play('left');
    } 
    
    else if (cursors.left.isDown && game.input.keyboard.isDown(Phaser.Keyboard.SHIFT)) {
        player.body.velocity.x = -350;
        player.animations.play('left');
    } 

    else if (cursors.right.isDown && game.input.keyboard.isDown(Phaser.Keyboard.SHIFT)) {
        player.body.velocity.x = 350;
        player.animations.play('right');
    } 
    

    else if (game.input.keyboard.isDown(Phaser.Keyboard.X)) {
        player.body.velocity.x = 0;
        fireKamehameha();
            
    } 
    
    else if (cursors.left.isDown) {
        player.body.velocity.x = -150;
        player.animations.play('left');
    } 
    
    else if (cursors.right.isDown) {
        player.body.velocity.x = 150;
        player.animations.play('right');
    } 

    else if (cursors.up.isDown) {
        player.frame = 18;
        player.animations.play('up');
    }
    
    else {
        player.animations.stop();
        player.frame = 2;
        player.body.velocity.x = 0;
    }

    if (cursors.up.isDown && player.body.touching.down && hitPlatform) {
        player.body.velocity.y = -375;
    }

    game.physics.arcade.overlap(kamehameha, baddies, collisionHandler, null, this);

    cleanKame();


 }

function collisionHandler(kamehameha, baddies){
    console.log('teste');
    baddies.kill();
}

function cleanKame(){
    if(game.time.now > kamehamehaTime && kamehameha){
        kamehameha.kill();
        kamehameha = null;
        animK = false;
    }
}

 function fireKamehameha() {
    player.animations.play('kamehameha');
    if(animK == false){
        if (player.frame == 72){
            kamehameha = game.add.sprite(player.body.x+10, player.body.y-80, 'kamehameha');
            game.physics.arcade.enable(kamehameha);
            kamehamehaTime = game.time.now + 50;
            animK=true;
        }
    }
    
 }