var playState = {

    create: function(){
        var background = game.add.sprite(0, 0, 'cidade');
        background.width = 1300;
        background.height = 650;

        graphics = game.add.graphics(0, 0);

        groupCidade = game.add.group();

        var x = 100;

        for (var i = 0; i < 3; i++){
            // Gera os retangulos que ficarão atras das imagens
            graphics.beginFill(0x00ff9d);
            graphics.lineStyle(2, 0x0000ff, 1);
            graphics.drawRoundedRect(x, 200, 315, 190, 10);
            graphics.endFill();

            var button1 = groupCidade.create(x, 200, graphics.generateTexture());
            button1.name = 'group-child-' + i;

            x = x + 400;
        }
        
        console.log(groupCidade);
        // this.keyboard = game.input.keyboard;

        // this.player = game.add.sprite(16,16, 'player');
        // game.physics.enable(this.player, Phaser.Physics.ARCADE);

        // this.win = game.add.sprite(256,256, 'win');
        // game.physics.enable(this.win, Phaser.Physics.ARCADE);

    },


    update: function(){
        
    },

    Win: function(){
        game.state.start('win');
    }
};