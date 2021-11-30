import Phaser from "phaser";

export default class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  preload() {
    this.load.image("card", "images/card.png");
    this.load.image("armor", "images/armor.png");
  }

  create() {
    this.add.image(400, 300, "card");
    this.add.image(10, 10, "armor").setOrigin(0, 0);

    // const particles = this.add.particles("red");

    // const emitter = particles.createEmitter({
    //   speed: 100,
    //   scale: { start: 1, end: 0 },
    //   blendMode: "ADD",
    // });

    // const logo = this.physics.add.image(400, 100, "logo");

    // logo.setVelocity(100, 200);
    // logo.setBounce(1, 1);
    // logo.setCollideWorldBounds(true);

    // emitter.startFollow(logo);
  }
}
