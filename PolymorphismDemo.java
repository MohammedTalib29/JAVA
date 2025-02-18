class shape{
    void draw(){
        System.out.println("Drawing a shape");
    }
}

class Circle extends shape{
    void draw(){
        System.out.println("Draw a circle");
    }
}

class triangle extends shape{
    void draw(){
        System.out.println("Draw a triangle");

    }
}
public class PolymorphismDemo{
        public static void main(String[] args) {
            shape s ;

            s=new Circle();
            s.draw();

            s=new triangle();
            s.draw();

        }
}