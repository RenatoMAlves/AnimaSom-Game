var playState = {

    create: function(){
        this.background = game.add.sprite(0, 0, 'cidade');
        this.background.width = 1300;
        this.background.height = 650;

        graphics = game.add.graphics(0, 0);

        this.groupCidade = game.add.group();

        this.groupAnimalMisterioso = game.add.group();

        this.groupCidade.inputEnableChildren = true;

        var x = 100;

        for (var i = 0; i < 3; i++){
            // Gera os retangulos que ficarão atras das imagens
            graphics.beginFill(0xFFFFFF);
            graphics.lineStyle(3, 0x05005e, 1);
            graphics.drawRoundedRect(x, 200, 315, 300, 10);
            graphics.endFill();

            var button = this.groupCidade.create(x, 200, graphics.generateTexture());
            button.tint = 0xffff00;
            button.alpha = 0;
            button.name = 'opcao-' + i;

            x = x + 400;
        }
        graphics.destroy();

        animalM = game.add.graphics(0, 0);
        animalM.beginFill(0xFFFFFF);
        animalM.lineStyle(3, 0x000000, 1);
        animalM.drawRoundedRect(500, 150, 315, 300, 10);
        animalM.endFill();
        this.backAnimalM = game.add.sprite(500, 150, animalM.generateTexture());
        this.backAnimalM.tint = 0xe0e0e0;
        this.backAnimalM.alpha = 0;
        this.backAnimalM.name = 'opcao-' + 1;
        animalM.destroy();


        this.groupAnimais = game.add.group();

        var cachorro = this.groupAnimais.create(110, 210, 'cachorro'); 
        cachorro.width = 300;
        cachorro.height = 170;
        cachorro.alpha = 0;
        cachorro.name = 'cachorro';
        

        // Desenha o gato e a borda da box

        var gato = this.groupAnimais.create(510, 210, 'gato'); 
        gato.width = 300;
        gato.height = 170;
        gato.alpha = 0;
        gato.name = 'gato';

        // Desenha o passaro e a borda da box

        var passaro = this.groupAnimais.create(910, 210, 'passaro'); 
        passaro.width = 300;
        passaro.height = 170;
        passaro.alpha = 0;
        passaro.name = 'passaro';
        
        // Audio Animais
        this.cachorroAudio = game.add.audio('cachorroAudio');
        this.gatoAudio = game.add.audio('gatoAudio');
        this.passaroAudio = game.add.audio('passaroAudio');
        this.vitoriaAudio = game.add.audio('vitoriaAudio');

        // TEXTO DE ACERTOU
        this.acertou = game.add.sprite(400, 250, 'acertou');
        this.acertou.visible = false
 
        // TEXTO DE SUCESSO
        this.parabens = game.add.sprite(400, 250, 'parabens');
        this.parabens.visible = false;


        // FIM DO TEXTO DE SUCESSO
        this.tempo = 90;

        this.time = game.add.text(970, 16, 'Tempo Restante: '+ parseInt(this.tempo),{fontSize: '25px', fill:"#f02"})


        // INICAR JOGO

        textoI = game.add.text(game.world.centerX, game.world.centerY, "- VAMOS COMEÇAR -");

        //  Centers the text
        textoI.anchor.set(0.5);
        textoI.align = 'center';

        //  Our font + size
        textoI.font = 'Arial';
        textoI.fontWeight = 'bold';
        textoI.fontSize = 70;
        textoI.fill = '#ffcc00';

        // VARIÁVEIS AUXILIARES

        this.i = 0;

        this.status = false;

        this.idAnimalEscondido = 0;

        /*
        * INICIO DO JOGO
        */

        this.audiosAnimais = [];

        this.audiosAnimais.push(this.cachorroAudio);
        this.audiosAnimais.push(this.gatoAudio);
        this.audiosAnimais.push(this.passaroAudio);
        this.audiosAnimais.push(this.vitoriaAudio);

        this.background.alpha = 0.3;

        game.time.events.add(3000, function(){
            textoI.visible = false; 
            this.start();
        }, this);

        this.iniciarTempo = false;

        this.groupCidade.onChildInputDown.add(onDown, this);
        this.groupCidade.onChildInputOver.add(onOver, this);
        this.groupCidade.onChildInputOut.add(onOut, this);
        this.groupCidade.onChildInputUp.add(onUp, this);

        function onDown (sprite) {
            sprite.tint = 0x00ff00;
        }   

        function onUp (sprite) {
            sprite.tint = 0xffff00;
            this.verificaSelecionado(sprite);
        }   

        function onOver (sprite) {
            sprite.tint = 0x9400ce;
        }

        function onOut (sprite) {
            sprite.tint = 0xffff00;
        }

    },

    start: function (){ 
        this.ocultarOpcoes();
        this.groupAnimais.children[this.i].x = 450;
        this.groupAnimais.children[this.i].y = 80;
        this.groupAnimais.children[this.i].alpha = 1;
        var zoomAnimal = game.add.tween(this.groupAnimais.children[this.i].scale).to({
            x: 1,
            y: 1
        }, 3000, Phaser.Easing.Elastic.Out, true);

        zoomAnimal.onComplete.add(function(){
            this.audiosAnimais[this.i].play();
        }, this);

        game.time.events.add(5000, this.initial, this);
    },

    initial: function (){
        game.add.tween(this.groupAnimais.children[this.i].scale).to( { x: 0.7, y: 0.7 }, 1000, Phaser.Easing.Linear.None, true);
        animation = game.add.tween(this.groupCidade.children[this.i]).to( { alpha: 0.7 }, 1000, Phaser.Easing.Linear.In, true);
        
        //Posicionamento
        if(this.i == 0){
            this.groupAnimais.children[this.i].x = 110;
            this.groupAnimais.children[this.i].alpha = 0.7;
        }
        if(this.i == 1){
            this.groupAnimais.children[this.i].x = 510;
            this.groupAnimais.children[this.i].alpha = 0.7;
        }
        if(this.i == 2){
            this.groupAnimais.children[this.i].x = 910;
            this.groupAnimais.children[this.i].alpha = 0.7;
        }
       
        this.groupAnimais.children[this.i].y = 210;
        this.background.alpha = 0.5;

        animation.onComplete.add(function () {	
            this.i += 1;
            if(this.i < 3){
                game.time.events.add(1500, this.start, this);
            }
            else{
                twenBack = game.add.tween(this.background).to( { alpha: 0.5 }, 1000, Phaser.Easing.Linear.In, true);
                twenBack.onComplete.add(function(){
                    this.gerarAnimal();
                    game.time.events.add(1000, this.apresentarAnimal, this)}, this);
            }
        }, this);
    },

    ocultarOpcoes: function (){
        game.add.tween(this.background).to( { alpha: 0.5 }, 500, Phaser.Easing.Linear.In, true);
        if(this.i == 0){
            this.groupCidade.children[1].alpha = 0;
            this.groupCidade.children[2].alpha = 0;
            this.groupCidade.children[0].alpha = 0;
            this.groupAnimais.children[1].alpha = 0;
            this.groupAnimais.children[2].alpha = 0;
        }
    },

    verificaSelecionado: function(sprite){
        if(sprite.renderOrderID == this.idAnimalEscondido+1){
            this.idAnimalEscondido += 1;    
            if(this.idAnimalEscondido < 3){
                this.ocultarApresentarTodos(true);
                escureceBackground = game.add.tween(this.background).to( { alpha: 0.6 }, 500, Phaser.Easing.Linear.In, true);
                escureceBackground.onComplete.add(function(){
                    this.acertou.visible = true;
                    acertouVisivel = game.add.tween(this.acertou).to( { alpha: 1 }, 500, Phaser.Easing.Linear.In, true);
                    acertouVisivel.onComplete.add(function(){
                        game.time.events.add(1000, this.apresentarAnimal, this);
                    }, this);
                }, this);
            }
            else{
                game.add.tween(this.background).to( { alpha: 0.6 }, 500, Phaser.Easing.Linear.In, true);
                this.ocultarApresentarTodos(true);
                this.parabens.visible = true;
                game.add.tween(this.parabens).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.In, true);
                this.audiosAnimais[3].play();
                this.iniciarTempo = false;
                game.time.events.add(6000, this.Win, this);
            }
        }
        else{
            this.parabens.visible = false;
            this.acertou.visible = false;
            this.iniciarTempo = false;
            this.tempo = 91;
            this.apresentarAnimal();
        }
            
    },

    ocultarApresentarTodos: function(bool){
        if(bool === true){
            this.acertou.visible = false;
            this.groupCidade.children[0].visible = false;
            this.groupCidade.children[1].visible = false;
            this.groupCidade.children[2].visible = false;
            this.groupAnimais.children[0].visible = false;
            this.groupAnimais.children[1].visible = false;
            this.groupAnimais.children[2].visible = false;
        }
        else{
            animacaoBack = game.add.tween(this.background).to( { alpha: 1 }, 500, Phaser.Easing.Linear.In, true);
            animacaoBack.onComplete.add(function(){
                this.groupCidade.children[0].visible = true;
                this.groupCidade.children[1].visible = true;
                this.groupCidade.children[2].visible = true;
                this.groupAnimais.children[0].visible = true;
                this.groupAnimais.children[1].visible = true;
                this.groupAnimais.children[2].visible = true;
                this.groupCidade.children[0].visible = true;

                this.groupCidade.children[0].alpha = 1;
                this.groupCidade.children[1].alpha = 1;
                this.groupCidade.children[2].alpha = 1;
                this.groupAnimais.children[0].alpha = 1;
                this.groupAnimais.children[1].alpha = 1;
                this.groupAnimais.children[2].alpha = 1;
            }, this);
        }
    },

    gerarAnimal: function(){
        this.idAnimalAleatorio = Math.floor((Math.random() * 3) + 0);
    },

    apresentarAnimal: function(){
        // Gera os retangulos que ficarão atras das imagens
        this.ocultarApresentarTodos(true);

        this.background.alpha = 0.7;

        this.backAnimalM.visible = true;

        var animalA = game.add.sprite(500, 170, 'interrogacao');
        animalA.width = 300;
        animalA.height = 270;
        animalA.alpha = 0;

        game.add.tween(animalA).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.In, true);
        animacaoAnimalM = game.add.tween(this.backAnimalM).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.In, true);

        animacaoAnimalM.onComplete.add(function(){
            this.audiosAnimais[this.idAnimalEscondido].play();
            game.time.events.add(3000, function(){
                game.add.tween(animalA).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.In, true);
                hideBackAnimalM = game.add.tween(this.backAnimalM).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.In, true);
                hideBackAnimalM.onComplete.add(function(){
                    animalA.kill();
                    this.backAnimalM.visible = false;
                    this.ocultarApresentarTodos(false);
                    this.iniciarTempo = true;
                }, this);
            }, this);
        }, this);

    },

    update: function(){

        if(this.iniciarTempo){
            this.tempo = this.tempo - Phaser.Timer.SECOND * 1.9/100000;
            this.time.text = "Tempo Restante: "+ parseInt(this.tempo);
        }

    },

    Win: function(){
        game.state.start('menu');
    }
};