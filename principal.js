
var fondoJuego;
var flappy;
var teclaDerecha;
var teclaIzquierda;
var teclaArriba;
var teclaAbajo;
var persona;

var juego = new Phaser.Game(370,550,Phaser.CANVAS,'bloque_juego');



var estadoPrincipal={
	preload: function () {
		juego.load.image('fondo','img/bg.jpg');
		juego.load.image('pajaro','img/pajaro1.png');
		juego.load.spritesheet('pajaros','img/pajaro.png',43,30);
		juego.load.spritesheet('personas','img/persona.png',64,64);

	},
	create: function(){
		fondoJuego = juego.add.tileSprite(0,0,370,550,'fondo');
		//flappy = juego.add.sprite(juego.width/2,juego.height/2,'pajaros');
		
		//flappy.frame=1;
		//flappy.animations.add('vuelo',[0,1,2],10,true);
		persona=juego.add.sprite(juego.width/2,juego.height/2,'personas');
		persona.frame=1;
		persona.anchor.setTo(0.5);
		persona.animations.add('abajo',[0,1,2,3],10,true);
		persona.animations.add('izquierda',[4,5,6,7],10,true);
		persona.animations.add('derecha',[8,9,10,11],10,true);
		persona.animations.add('arriba',[12,13,14,15],10,true);
		
		


		teclaDerecha=juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		teclaIzquierda=juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		teclaArriba=juego.input.keyboard.addKey(Phaser.Keyboard.UP);
		teclaAbajo=juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);
		juego.physics.startSystem(Phaser.Physics.ARCADE);
		juego.physics.arcade.enable(persona);
		persona.body.collideWorldBounds=true;
	},
	update: function(){
		fondoJuego.tilePosition.x-=1;
		//flappy.animations.play('vuelo');

		if(teclaDerecha.isDown){
			//flappy.x++;
			persona.position.x+=2;
			persona.animations.play('derecha');
		}else if(teclaIzquierda.isDown){
			//flappy.x--;
			persona.position.x-=2;
			persona.animations.play('izquierda');
		}else if(teclaArriba.isDown){
			persona.position.y-=2;
			persona.animations.play('arriba');
		}else if (teclaAbajo.isDown){
			//flappy.y++;
			persona.position.y+=2;
			persona.animations.play('abajo');
		}
	}
};
juego.state.add('principal',estadoPrincipal);
juego.state.start('principal');