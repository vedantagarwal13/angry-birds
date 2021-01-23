class Ground{

    constructor(x,y,width,height) {
     
       var optionsground={
           isStatic:true
       }
    
      this.body=Bodies.rectangle(x,y,width,height,optionsground);
    
      this.width=width;
      this.height=height;
    
    
      World.add(world,this.body);
    
    
    }
    
     display(){
         var pos=this.body.position
         //var angle=this.body.angle;
         //push();
         
         //translate(pos.x,pos.y);
         //rotate(angle);
        rectMode(CENTER)
        fill("brown");
        rect(pos.x,pos.y,this.width,this.height);
        //pop();
     }
    
    
    
    
    }