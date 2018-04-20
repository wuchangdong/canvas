(function (w) {
   Land.num = 0;
    function Land(ctx, img, speed) {
        Land.num++;
        this.ctx = ctx;
        this.img = img;
        this.speed = speed || 2;
        this.width = this.img.width;
        this.height = this.img.height;
        this.x = this.width * (Land.num - 1);
        this.y = this.ctx.canvas.height-this.height;

    }

    Land.prototype = {
        constructor: Land,
        draw: function () {
            this.ctx.drawImage(this.img, this.x, this.y,this.width, this.height);

        },
        update: function () {
            this.x += -this.speed;
            if (this.x <= -this.width) {
                this.x = this.width * (Land.num - 1)
            }
        }
    };
    w.getLand = function (ctx, img, speed) {
        return new Land(ctx, img, speed);
    }
})(window);