var playState = {

    create: function(){
        this.background = game.add.sprite(0, 0, 'cidade');
        this.background.width = 1300;
        this.background.height = 650;

        graphics = game.add.graphics(0, 0);

        this.groupCidade = game.add.group();

        this.groupCidade.inputEnableChildren = true;

        var x = 100;

        for (var i = 0; i < 3; i++){
            // Gera os retangulos que ficarão atras das imagens
            graphics.beginFill(0xFFFFFF);
            graphics.lineStyle(3, 0x05005e, 1);
            graphics.drawRoundedRect(x, 200, 315, 190, 10);
            graphics.endFill();

            var button = this.groupCidade.create(x, 200, graphics.generateTexture());
            button.tint = 0xff8800;
            button.name = 'opcao-' + i;

            x = x + 400;
        }
        graphics.destroy();

        this.cachorro = game.add.sprite(110, 210, 'cachorro'); 
        this.cachorro.width = 300;
        this.cachorro.height = 170;
        

        // Desenha o gato e a borda da box

        this.gato = game.add.sprite(510, 210, 'gato'); 
        this.gato.width = 300;
        this.gato.height = 170;

        // Desenha o passaro e a borda da box

        this.passaro = game.add.sprite(910, 210, 'passaro'); 
        this.passaro.width = 300;
        this.passaro.height = 170;
        
        this.statusAcerto=false;
        this.contador=0;

        game.time.events.add(Phaser.Timer.SECOND * 2, this.start, this);

    },

    start: function (){    
        this.ocultarOpcoes(1);
        this.groupCidade.children[0].x += 230; 
        this.cachorro.x += 230;
        this.groupCidade.children[0].y -= 70; 
        this.cachorro.y -= 70;
        game.add.tween(this.groupCidade.children[0].scale).to( { x: 2, y: 2 }, 3000, Phaser.Easing.Elastic.Out, true);
        game.add.tween(this.cachorro.scale).to( { x: 1, y: 1 }, 3000, Phaser.Easing.Elastic.Out, true);

        game.time.events.add(Phaser.Timer.SECOND * 5, this.initial, this);
    },

    initial: function (){
        game.add.tween(this.groupCidade.children[0].scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Linear.In, true);
        game.add.tween(this.cachorro.scale).to( { x: 0.5, y: 0.5 }, 1000, Phaser.Easing.Linear.In, true);
        this.groupCidade.children[0].x -= 230; 
        this.cachorro.x -= 230;
        this.groupCidade.children[0].y += 70; 
        this.cachorro.y += 70;
        this.background.alpha = 0.5;

        this.apresentarOpcoes();

    },

    ocultarOpcoes: function (){
        this.background.alpha = 0.5;
        if(1 == 1){
            this.groupCidade.children[1].alpha = 0;
            this.groupCidade.children[2].alpha = 0;
            this.gato.alpha = 0;
            this.passaro.alpha = 0;
        }
    },

    apresentarOpcoes: function(){
        game.add.tween(this.background).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.In, true);
        if(1 == 1){
            game.add.tween(this.groupCidade.children[1]).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.In, true);
            game.add.tween(this.groupCidade.children[2]).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.In, true);
            game.add.tween(this.gato).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.In, true);
            game.add.tween(this.passaro).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.In, true);
            console.log(this.groupCidade);
        }
    },

    verificaSelecionado: function(sprite){
        if(sprite.name == 'opcao-0'){
            
        }
        else
            console.log('puts');
    },


    update: function(){

        game.time.events.add(Phaser.Timer.SECOND * 7, activateBotoes, this);

        function activateBotoes(){
            this.groupCidade.onChildInputDown.add(onDown, this);
            this.groupCidade.onChildInputOver.add(onOver, this);
            this.groupCidade.onChildInputOut.add(onOut, this);
        }

        function onDown (sprite) {
            sprite.tint = 0x00ff00;
            this.verificaSelecionado(sprite);
        }   

        function onOver (sprite) {
            sprite.tint = 0xffff00;
        }

        function onOut (sprite) {
            sprite.tint = 0xff8800;
            // sprite.tint = Math.random() * 0xffffff;

        }
    },

    Win: function(){
        game.state.start('win');
    }
};