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
            button.tint = 0xff0000;
            button.alpha = 0;
            button.name = 'opcao-' + i;

            x = x + 400;
        }
        graphics.destroy();

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
        
        // TEXTO DE SUCESSO

        this.text = null;
        this.textReflect = null;

        text = game.add.text(game.world.centerX, game.world.centerY -250, "- PARABÉNS -");
        text.visible = false;


        //  Centers the text
        text.anchor.set(0.5);
        text.align = 'center';

        //  Our font + size
        text.font = 'Arial';
        text.fontWeight = 'bold';
        text.fontSize = 70;
        text.fill = '#2bd800';

        //  Here we create our fake reflection :)
        //  It's just another Text object, with an alpha gradient and flipped vertically

        textReflect = game.add.text(game.world.centerX, game.world.centerY -200, "- PARABÉNS -");

        //  Centers the text
        textReflect.anchor.set(0.5);
        textReflect.align = 'center';
        textReflect.scale.y = -1;

        //  Our font + size
        textReflect.font = 'Arial';
        textReflect.fontWeight = 'bold';
        textReflect.fontSize = 70;
        textReflect.fill = '#70ff4c';

        //  Here we create a linear gradient on the Text context.
        //  This uses the exact same method of creating a gradient as you do on a normal Canvas context.
        var grd = textReflect.context.createLinearGradient(0, 0, 0, text.canvas.height);

        //  Add in 2 color stops
        grd.addColorStop(0, 'rgba(255,255,255,0)');
        grd.addColorStop(1, 'rgba(112, 255, 76,0.5)');

        //  And apply to the Text
        textReflect.fill = grd;

        textReflect.visible = false;
        text.visible = false;

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

        this.background.alpha = 0.3;

        game.time.events.add(3000, function(){
            textoI.visible = false; 
            this.start();
        }, this);

        this.iniciarTempo = false;

        // VARIÁVEIS AUXILIARES

        this.i = 0;

        this.animalAleatorio = 0;

        game.time.events.add(Phaser.Timer.SECOND * 7, activateBotoes, this);
        function activateBotoes(){
            this.groupCidade.onChildInputDown.add(onDown, this);
            this.groupCidade.onChildInputOver.add(onOver, this);
            this.groupCidade.onChildInputOut.add(onOut, this);
            this.groupCidade.onChildInputUp.add(onUp, this);
        }

        function onDown (sprite) {
            sprite.tint = 0x00ff00;
        }   

        function onUp (sprite) {
            sprite.tint = 0x00ff00;
            this.verificaSelecionado(sprite);
        }   

        function onOver (sprite) {
            sprite.tint = 0xffff00;
        }

        function onOut (sprite) {
            sprite.tint = 0xff0000;
            // sprite.tint = Math.random() * 0xffffff;

        }

    },

    start: function (){ 
        this.ocultarOpcoes();
        this.groupAnimais.children[this.i].x = 360;
        this.groupAnimais.children[this.i].y = 80;
        this.groupAnimais.children[this.i].alpha = 1;
        game.add.tween(this.groupAnimais.children[this.i].scale).to({
            x: 1,
            y: 1
        }, 3000, Phaser.Easing.Elastic.Out, true);

        game.time.events.add(5000, this.initial, this);
    },

    initial: function (){
        game.add.tween(this.groupAnimais.children[this.i].scale).to( { x: 0.7, y: 0.7 }, 1000, Phaser.Easing.Linear.None, true);
        animation = game.add.tween(this.groupCidade.children[this.i]).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.In, true);
        
        //Posicionamento
        if(this.i == 0){
            this.groupAnimais.children[this.i].x = 110;
        }
        if(this.i == 1){
            this.groupAnimais.children[this.i].x = 510;
        }
        if(this.i == 2){
            this.groupAnimais.children[this.i].x = 910;
        }
       
        this.groupAnimais.children[this.i].y = 210;
        this.background.alpha = 0.5;

        animation.onComplete.add(function () {	
            this.i += 1;
            if(this.i < 3){
                game.time.events.add(1500, this.start, this);
            }
            else{
                game.add.tween(this.background).to( { alpha: 1 }, 500, Phaser.Easing.Linear.In, true);
                this.apresentarAnimal();
                // this.iniciarTempo = true;
                // this.i = 0;
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
        if(sprite.name == 'opcao-0'){
            textReflect.visible = true;
            text.visible = true;
            game.time.events.add(5000, this.Win, this);
            this.iniciarTempo = false;
        }
        else{
            textReflect.visible = false;
            text.visible = false;
            this.iniciarTempo = false;
            this.tempo = 91;
            this.i = 0;
            this.start();
        }
            
    },

    ocultarApresentarTodos: function(bool){
        if(bool == true){
            this.groupCidade.children[0].alpha = false;
            this.groupCidade.children[1].visible = false;
            this.groupCidade.children[2].visible = false;
            this.groupAnimais.children[0].visible = false;
            this.groupAnimais.children[1].visible = false;
            this.groupAnimais.children[2].visible = false;
        }
    },

    gerarAnimal: function(){
        return Math.floor((Math.random() * 3) + 0);
    },

    apresentarAnimal: function(){
        this.background.alpha = 0.5;
        this.idAnimalAleatorio = this.gerarAnimal();
        // Gera os retangulos que ficarão atras das imagens
        this.ocultarApresentarTodos(true);
        animalM = game.add.graphics(0, 0);
        animalM.beginFill(0xccc9bb);
        animalM.lineStyle(3, 0x000000, 1);
        animalM.drawRoundedRect(500, 150, 315, 300, 10);
        animalM.endFill();
        var button = this.groupAnimalMisterioso.create(500, 150, animalM.generateTexture());
        button.tint = 0x8e8c83;
        button.alpha = 1;
        button.name = 'opcao-' + 1;

        var logo = game.add.sprite(500, 170, 'logoGame');
        logo.width = 300;
        logo.height = 270;
        logo.tint = 0x000000
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