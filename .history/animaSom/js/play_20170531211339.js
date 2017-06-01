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
            graphics.beginFill(0xffc300);
            graphics.lineStyle(2, 0x05005e, 1);
            graphics.drawRoundedRect(x, 200, 315, 190, 10);
            graphics.endFill();

            var button1 = groupCidade.create(x, 200, graphics.generateTexture());
            button1.name = 'group-child-' + i;

            x = x + 400;
        }

        var cachorro = game.add.sprite(90, 210, 'cachorro'); 
        cachorro.width = 300;
        cachorro.height = 170;
        

        // Desenha o gato e a borda da box

        var gato = game.add.sprite(490, 210, 'gato'); 
        gato.width = 300;
        gato.height = 170;

        // Desenha o passaro e a borda da box

        var passaro = game.add.sprite(890, 210, 'passaro'); 
        passaro.width = 300;
        passaro.height = 170;
        
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