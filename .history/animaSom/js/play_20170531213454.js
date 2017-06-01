var playState = {

    create: function(){
        var background = game.add.sprite(0, 0, 'cidade');
        background.width = 1300;
        background.height = 650;

        graphics = game.add.graphics(0, 0);

        groupCidade = game.add.group();

        groupCidade.inputEnableChildren = true;

        var x = 100;

        for (var i = 0; i < 3; i++){
            // Gera os retangulos que ficarão atras das imagens
            graphics.beginFill(0xffd5af);
            graphics.lineStyle(3, 0x05005e, 1);
            graphics.drawRoundedRect(x, 200, 315, 190, 10);
            graphics.endFill();

            var button = groupCidade.create(x, 200, graphics.generateTexture());
            button.tint = 0xffd5af;
            button.name = 'groupCidade-child-' + i;

            x = x + 400;
        }
        graphics.destroy();

        var cachorro = game.add.sprite(110, 210, 'cachorro'); 
        cachorro.width = 300;
        cachorro.height = 170;
        

        // Desenha o gato e a borda da box

        var gato = game.add.sprite(510, 210, 'gato'); 
        gato.width = 300;
        gato.height = 170;

        // Desenha o passaro e a borda da box

        var passaro = game.add.sprite(910, 210, 'passaro'); 
        passaro.width = 300;
        passaro.height = 170;
        
        groupCidade.onChildInputDown.add(onDown, this);
        groupCidade.onChildInputOver.add(onOver, this);
        groupCidade.onChildInputOut.add(onOut, this);
        

        function onDown (sprite) {
            sprite.tint = 0x00ff00;
        }

        function onOver (sprite) {
            sprite.tint = 0x003bff;
        }

        function onOut (sprite) {
            sprite.tint = 0xffc087;

        }

    },


    update: function(){
        
    },

    Win: function(){
        game.state.start('win');
    }
};