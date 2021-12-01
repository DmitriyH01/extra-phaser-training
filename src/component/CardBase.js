// import Phaser from "phaser";

export default class CardBase extends Phaser.GameObjects.Container {
  constructor(data) {
    let { scene, x, y, name, card, image, depth } = data;
    let spriteCard = new Phaser.GameObjects.Sprite(scene, 0, 0, card);
    let spriteImage = new Phaser.GameObjects.Sprite(scene, 0, 0, image);
    super(scene, x, y, [spriteCard, spriteImage]);
    this.spriteCard = spriteCard;
    this.spriteImage = spriteImage;
    this.scene = scene;
    this.scene.add.existing(this);
  }
}
