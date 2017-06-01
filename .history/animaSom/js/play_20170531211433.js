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
        
        console.log(groupCidade);
           group1.onChildInputDown.add(onDown, this);
            group2.onChildInputDown.add(onDown, this);

            group1.onChildInputOver.add(onOver, this);
            group2.onChildInputOver.add(onOver, this);

            group1.onChildInputOut.add(onOut, this);
            group2.onChildInputOut.add(onOut, this);


    },


    update: function(){
        
    },

    Win: function(){
        game.state.start('win');
    }
};