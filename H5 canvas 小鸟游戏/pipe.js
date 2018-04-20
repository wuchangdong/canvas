(function (w) {
    Pipe.num = 0;
    function Pipe(ctx, imgUp,imgDown ,iLandHeight,space,speed,minHeight) {
        Pipe.num++;
        this.ctx = ctx;
        this.imgUp = imgUp;
        this.imgDown = imgDown;
        this.LandHeight = iLandHeight;
        this.space= space||150;
        this.speed = speed || 2;
        this.width = this.imgUp.width;
        this.height = this.imgUp.height;
        this.x = 3*this.width * (Pipe.num - 1);

        this.y = this.ctx.canvas.height-this.height;
        this.minHeight = minHeight||50;//管子的最小高度
        // 初始化
        this.init();

    }
   Pipe.num = 0;
    Pipe. i = 0;
    Pipe.prototype = {
        constructor: Pipe,
      init: function () {
            //随即上边管子的y轴高度
            //计算管子的最大高度
            this.downHeight =this.getRandom(this.maxHeight,this.minHeight);//朝下管子随机的高度
            this.maxHeight = this.ctx.canvas.height-this.LandHeight-this.minHeight-this.space;
        //上边管子的y轴坐标
            this.downY =this.downHeight-this.height;
       //下边管子的y轴坐标
            this.upY =this.downHeight+this.space;
            console.log(this.downY);
            console.log(this.upY);

        },
        getRandom: function (num1,num2) {
           return Math.round(Math.random()*(num1-num2)+num2);
        },
        draw:function () {
            console.log(this.x);
            this.ctx.drawImage(this.imgUp,this.x,this.upY,this.width,this.height);
            this.ctx.drawImage(this.imgDown,this.x,this.downY,this.width,this.height);
        this.ctx.rect(this.x,this.downY,this.width,this.height);
        this.ctx.rect(this.x,this.upY,this.width,this.height);

        this.ctx.stroke();
        },
        update:function() {
            this.x += -this.speed;
            // ctx.textBaseline= "top";
            // ctx.font = "bold  24px '宋体‘";
            // ctx.fillText("时间："+Pipe.i,0,0);
            if (this.x <= -this.width) {
                this.init();
                this.x += this.width * 3* Pipe.num;
                Pipe.i++;
            }
        }
    };
    w.getPipe = function (ctx, imgUp,imgDown ,LandHeight,space,speed) {
        return new Pipe(ctx, imgUp,imgDown ,LandHeight,space,speed);
    }
})(window);