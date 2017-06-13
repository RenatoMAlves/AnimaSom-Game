var loadState = {
    preload: function(){

        var loadingLabel = game.add.text(80, 150, 'Loading...',
                                        {font: '30px Courier', fill: "#ffffff"});

        game.load.image('player', '../../images/yellow.png');
        game.load.image('win', '../../images/win.png');
        game.load.image('floresta', '../../images/animaSom/floresta.png');
        game.load.image('cidade', '../../images/animaSom/background-cidade.jpg');
        game.load.image('cachorro', '../../images/animaSom/cachorro-2.png');
        game.load.image('gato', '../../images/animaSom/gato-5.png');
        game.load.image('passaro', '../../images/animaSom/pombo-400.png');
        //Logo do jogo
        game.load.image('logoGame', '../../images/animaSom/logo.png');
        //Botões
        game.load.image('botaoStart', '../../images/animaSom/UIpack/PNG/yellow_button03.png');
        game.load.image('botaoCadastrar', '../../images/animaSom/UIpack/PNG/blue_button03.png');
        game.load.image('botaoAcompanhamento', '../../images/animaSom/UIpack/PNG/red_button02.png');

    },

    create: function(){
        game.state.start('menu');
    }
};