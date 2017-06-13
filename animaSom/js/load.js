var loadState = {
    preload: function(){

        var loadingLabel = game.add.text(80, 150, 'Loading...',
                                        {font: '30px Courier', fill: "#ffffff"});

        game.load.image('player', '../../images/yellow.png');
        game.load.image('win', '../../images/win.png');
        game.load.image('floresta', '../../images/animaSom/floresta.png');

        // ANIMAIS e BACKGROUND
        game.load.image('cidade', '../../images/animaSom/background-cidade.jpg');
        game.load.image('cachorro', '../../images/animaSom/cachorro-2.png');
        game.load.image('gato', '../../images/animaSom/gato-5.png');
        game.load.image('passaro', '../../images/animaSom/passarinho5.png');

        // MENSAGEM DE ACERTOU E PARABÉNS
        game.load.image('acertou', '../../images/animaSom/VOCE-ACERTOU.png');
        game.load.image('parabens', '../../images/animaSom/PARABENS.png');

        //Sons do jogo
        game.load.audio('cachorroAudio', '../../audio/cachorro2.mp3');
        game.load.audio('passaroAudio', '../../audio/passaro1.mp3');
        game.load.audio('gatoAudio', '../../audio/gato2.mp3');
        game.load.audio('vitoriaAudio', '../../audio/comemoracao.mp3');
        
        //Logo do jogo
        game.load.image('logoGame', '../../images/animaSom/logo.png');
        //Botões
        game.load.image('interrogacao', '../../images/animaSom/interrogacao-transparente.png');
        game.load.image('botaoStart', '../../images/animaSom/UIpack/PNG/yellow_button03.png');
        game.load.image('botaoCadastrar', '../../images/animaSom/UIpack/PNG/blue_button03.png');
        game.load.image('botaoAcompanhamento', '../../images/animaSom/UIpack/PNG/red_button02.png');

    },

    create: function(){
        game.state.start('menu');
    }
};