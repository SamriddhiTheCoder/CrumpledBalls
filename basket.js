class Basket{
    constructor(x, y, w, h) {
        var options = {
            isStatic : true,
            restitution : 0.8,
            friction : 1.0,
            density : 1.0
        }

      this.body = Bodies.rectangle(x, y, w, h, options);
      this.width = w;
      this.height = h;
      
      World.add(world, this.body);
    }

    display(){
        push();
        var pos = this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);
        pop();

    }
}
