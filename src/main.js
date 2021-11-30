import Phaser from "phaser";

let firstGroup;
let secondGroup;

function genRandomCard(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
class ViewCardsSpriteUse extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    this.load.image("background", "images/town-wreck.jpg");
    this.load.spritesheet("cards", "images/cards.png", {
      frameWidth: 142,
      frameHeight: 192,
    });
  }

  create() {
    this.add.image(400, 300, "background");
    var spaceKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );

    firstGroup = this.add.group({
      key: "cards",
      repeat: 4,
      setXY: { x: 120, y: 90, stepX: 140 },
    });

    secondGroup = this.add.group({
      key: "cards",
      repeat: 4,
      setXY: { x: 120, y: 280, stepX: 140 },
    });

    const cody = this.add.sprite(70, 300);

    const flipCard = {
      key: "click",
      frames: this.anims.generateFrameNumbers("cards", {
        frames: [genRandomCard(0, 53)],
      }),
      frameRate: 4,
      // repeat: -1,
    };

    spaceKey.on("down", function (key, event) {
      console.log(secondGroup);
      // this.GetScreenOrientation(100, 200);
      // secondGroup
      // this.anims.create(flipCard);
      // console.log(secondGroup);
      // secondGroup.anims.play("click");
    });

    // this.anims.create({
    //   key: "click",
    //   frames: this.anims.generateFrameNumbers("cards", {
    //     frames: [genRandomCard(0, 53)],
    //   }),
    //   frameRate: 4,
    //   // repeat: -1,
    // });

    this.input.on("pointerdown", function () {
      // this.anims.create(flipCard);
      firstGroup.clear(true, true);
    });
  }
  update() {
    // resetCollisionIDs()
  }
}

const gameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [ViewCardsSpriteUse],
};

let game = new Phaser.Game(gameConfig);
