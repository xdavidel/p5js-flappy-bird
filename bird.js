function Bird() {
    this.x = 25;
    this.y = height / 2;
    this.gravity = 0.1;
    this.velocity = 0;

    this.update = ()=>{
        this.velocity += this.gravity;
        this.velocity += 0.5;
        this.y += this.velocity;

        if (this.y > height ){
            this.y = height;
            this.velocity = 0;
        }

        if (this.y < 0){
            this.y = 0;
            this.velocity = 0;
        }
    }

    this.show = () => {
        fill(255, 0, 0);
        ellipse(this.x, this.y, 16, 16);
    }

    this.flapp = ()=>{
        this.velocity -= 15;
    }
}