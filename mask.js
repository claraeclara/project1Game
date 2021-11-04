class Mask {
  constructor() {
    this.maskImage = new Image();
    this.maskImage.src = "./images/mask.png";
    this.width = 160;
    this.height = 160;
    this.x = 0;
    this.y = canvas.height / 2;
    this.maskSpeed = 12;
  }

  drawMask = () => {
    ctx.drawImage(this.maskImage, this.x, this.y, this.width, this.height);
  };

  maskMove = () => {
    this.x += 2;
  };
}
