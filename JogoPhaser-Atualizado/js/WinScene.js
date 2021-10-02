export default class WinScene extends Phaser.Scene {

	constructor() {
		super("WinScene");
	}

    init(){
        this.bgMusic = this.sound.add('soundover');
    }

	create() {
        let bg = this.add.sprite(this.cameras.main.width / 2, this.cameras.main.height / 2, 'bgwin');
        let scaleX = this.cameras.main.width / bg.width;
        let scaleY = this.cameras.main.height / bg.height;
        let scale = Math.max(scaleX, scaleY);
        bg.setScale(scale).setScrollFactor(0); 

		 // Menu
         let btnMenu = this.add.text( (this.cameras.main.width)/2,
                                        this.cameras.main.height-105, 'MENU',
                                        { fontFamily: 'Font1', fill: '#af1e1e'});
        btnMenu.setInteractive({ useHandCursor: true });
        btnMenu.on('pointerdown', () => this.backButton());
        btnMenu.setFontSize(50);
        btnMenu.setOrigin(0.48);

        this.bgMusic.play({
			loop: true
		});
		
	}

	backButton() {
        this.bgMusic.stop();
		this.scene.start('MenuScene', {musicOn:false});
	}

}