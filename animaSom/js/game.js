var game = new Phaser.Game(1350, 650, Phaser.CANVAS, 'phaser-example');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('win', winState);

game.state.start('boot');
