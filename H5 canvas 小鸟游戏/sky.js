
(function (w) {
    Sky.num = 0;
    function Sky(ctx, img, speed) {
        Sky.num++;
        this.ctx = ctx;
        this.img = img;
        this.speed = speed || 2;
        this.width = this.img.width;
        this.height = this.img.height;
        this.x = this.width * (Sky.num - 1);
        this.y = 0;

    }

    Sky.prototype = {
        constructor: Sky,
        draw: function () {
            this.ctx.drawImage(this.img, this.x, this.y,this.width, this.height);

        },
        update: function () {
            this.x += -this.speed;
            if (this.x <= -this.width) {
                this.x = this.width * (Sky.num - 1)
            }
        }
    };
    w.getSky = function (ctx, img, speed) {
        return new Sky(ctx, img, speed);
    }
})(window);