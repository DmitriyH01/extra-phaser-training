import Phaser from "phaser";
import MainScene from "./component/MainScene";

const config = {
  width: 1024,
  height: 768,
  backgroundColor: "#C0C0C0",
  type: Phaser.AUTO,
  parent: "phaser-game",
  scene: [MainScene],
};

new Phaser.Game(config); // this is started a game - I must to hand over an config obj
