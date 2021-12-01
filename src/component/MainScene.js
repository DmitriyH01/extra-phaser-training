import Phaser from "phaser";
import CardBase from "./CardBase";
export default class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  preload() {
    this.load.image("player", "images/paladin.png");
    this.load.image("playercard", "images/playercard.png");
    this.load.image("card", "images/card.png");
    this.load.image("armor", "images/armor.png");
  }

  create() {
    this.player = new CardBase({
      scene: this,
      name: "Paladin",
      x: 200,
      y: 200,
      card: "playercard",
      image: "player",
      depth: 1,
    });
  }
}

/// video 36:22
