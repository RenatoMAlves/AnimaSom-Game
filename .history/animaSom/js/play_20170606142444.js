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
            graphics.beginFill(0xFFFFFF);
            graphics.lineStyle(3, 0x05005e, 1);
            graphics.drawRoundedRect(x, 200, 315, 190, 10);
            graphics.endFill();

            var button = groupCidade.create(x, 200, graphics.generateTexture());
            button.tint = 0xff8800;
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

        start();
        
        // groupCidade.onChildInputDown.add(onDown, this);
        // groupCidade.onChildInputOver.add(onOver, this);
        // groupCidade.onChildInputOut.add(onOut, this);

        function start(){
            groupCidade.children[1].visible = false;
            groupCidade.children[2].visible = false;
            gato.visible = false;
            passaro.visible = false;
            background.alpha = 0.5;
            groupCidade.children[0].x += 200; 
            cachorro.x += 200;
            groupCidade.children[0].y -= 50; 
            cachorro.y += 50;
            game.add.tween(groupCidade.children[0].scale).to( { x: 2, y: 2 }, 1000, Phaser.Easing.Elastic.Out, true);
            game.add.tween(cachorro.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
        }

        function onDown (sprite) {
            sprite.tint = 0x00ff00;
        }

        function onOver (sprite) {
            sprite.tint = 0xffff00;
        }

        function onOut (sprite) {
            sprite.tint = 0xff8800;
            // sprite.tint = Math.random() * 0xffffff;

        }

    },


    update: function(){
        
    },

    Win: function(){
        game.state.start('win');
    }
};