(function (w) {
    function Bird(ctx, img, wFps, hFps, x, y, speed) {
        this.ctx = ctx;
        this.img = img;
        this.wFps = wFps;
        this.hFps = hFps;

        //当前帧数
        this.wFpsNow = 0;
        this.hFpsNow = 0;

        this.width = this.img.width / this.wFps;
        this.height = this.img.height / this.hFps;

        this.x = x;
        this.y = y;

        this.speed = speed || 2;
        this.speedPlus = 0.5;
    }

    Bird.prototype = {
        constructor: Bird,
        draw: function () {
            var baseR = 10 * Math.PI / 180;
            var maxR = Math.PI / 4;
            var birdR = baseR * this.speed;
            if (birdR > maxR) {
                birdR = maxR;
            }
            this.ctx.save();
            this.ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
            this.ctx.rotate(birdR);
            this.ctx.drawImage(this.img, this.width * this.wFpsNow, this.height * this.hFpsNow, this.width , this.height , -this.width/2, -this.height/2, this.width, this.height);
            this.ctx.strokeRect(-this.width / 2, -this.height / 2, this.width, this.height);
            this.ctx.restore();
        },
        update: function () {
            this.wFpsNow++;
            if (this.wFpsNow === this.wFps) {

                this.wFpsNow = 0;
            }
            this.y += this.speed;
            this.speed += this.speedPlus;
            this.bindEvent();
        },
        bindEvent: function () {
            var _this = this;
            _this.ctx.canvas.onclick = function () {
                _this.speed = -6;
            }
        }
    };
    w.getBird = function (ctx, img, wFps, hFps, x, y, speed) {
        return new Bird(ctx, img, wFps, hFps, x, y, speed)
    }
})(window);