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

        game.time.events.add(Phaser.Timer.SECOND * 2, start, this);

        function start(){
            var 
            ocultarOpcoes(1);
            groupCidade.children[0].x += 230; 
            cachorro.x += 230;
            groupCidade.children[0].y -= 70; 
            cachorro.y -= 70;
            game.add.tween(groupCidade.children[0].scale).to( { x: 2, y: 2 }, 3000, Phaser.Easing.Elastic.Out, true);
            game.add.tween(cachorro.scale).to( { x: 1, y: 1 }, 3000, Phaser.Easing.Elastic.Out, true);

            game.time.events.add(Phaser.Timer.SECOND * 5, initial, this);
        }

        function initial(){
            game.add.tween(groupCidade.children[0].scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Linear.In, true);
            game.add.tween(cachorro.scale).to( { x: 0.5, y: 0.5 }, 1000, Phaser.Easing.Linear.In, true);
            groupCidade.children[0].x -= 230; 
            cachorro.x -= 230;
            groupCidade.children[0].y += 70; 
            cachorro.y += 70;
            background.alpha = 0.5;

            apresentarOpcoes(1);

            activateButtons();
        }

        function ocultarOpcoes(numero){
            background.alpha = 0.5;
            if(numero == 1){
                groupCidade.children[1].alpha = 0;
                groupCidade.children[2].alpha = 0;
                gato.alpha = 0;
                passaro.alpha = 0;
            }
        }

        function apresentarOpcoes(numero){
            game.add.tween(background).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.In, true);
            if(numero == 1){
                game.add.tween(groupCidade.children[1]).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.In, true);
                game.add.tween(groupCidade.children[2]).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.In, true);
                game.add.tween(gato).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.In, true);
                game.add.tween(passaro).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.In, true);
            }
        }

        function activateButtons(){
            groupCidade.onChildInputDown.add(onDown, this);
            groupCidade.onChildInputOver.add(onOver, this);
            groupCidade.onChildInputOut.add(onOut, this);
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