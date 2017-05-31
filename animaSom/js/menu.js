var menuState = {
    
    create: function(){
        var background = game.add.sprite(0, 0, 'floresta');
        background.width = 1366;
        background.height = 720;

        var logo = game.add.sprite(background.width-700, background.height-650, 'logoGame'); 
        logo.width = 628;
        logo.height = 511;

        //  Standard button (also used as our pointer tracker)
        botaoStart = game.add.button(250, 195, 'botaoStart', this.start, this, 2, 1, 0);
        botaoStart.name = 'start';
        botaoStart.width = 275;
        botaoStart.height = 55;
        var btnStartLabel = game.add.text(300, 205, 'Iniciar Jogo', 
                                     {font: '30px Verdana', fill: '#ffffff'});

        //  Standard button (also used as our pointer tracker)
        botaoCadastrar = game.add.button(175, 295, 'botaoCadastrar', null, this, 2, 1, 0);
        botaoCadastrar.name = 'start';
        botaoCadastrar.width = 300;
        botaoCadastrar.height = 55;
        var btnCadastrarLabel = game.add.text(186, 305, 'Cadastrar Jogador', 
                                     {font: '30px Verdana', fill: '#ffffff'});

       //  Standard button (also used as our pointer tracker)
        botaoAcompanhamento = game.add.button(250, 395, 'botaoAcompanhamento', null, this, 2, 1, 0);
        botaoAcompanhamento.name = 'start';
        botaoAcompanhamento.width = 300;
        botaoAcompanhamento.height = 55;
        var btnAcompanhamentoLabel = game.add.text(264, 405, 'Acompanhamento', 
                                     {font: '30px Verdana', fill: '#ffffff'});
    },
    

    start: function(){
        game.state.start('play');
    },

};