// Абстракция - это использование только тех характеристик объекта, которые с большей
// точностью представляют его в данной системе

// Абстрактный класс в объектно-ориентированном программировании (ООП) является классом,
// который содержит хотя бы один абстрактный метод, то есть метод без реализации.
// Абстрактные классы не могут быть инстанциированы напрямую,
// они предназначены для наследования другими классами, которые должны реализовать абстрактные методы.
// Они предоставляют абстрактный (общий) интерфейс для подклассов.

////////

abstract class Figure {
    abstract width: number;
    abstract height: number;
    abstract getArea(): void
}
class Rectangle extends Figure{

    constructor(public width: number, public height: number){
        super();
    }

    getArea(): void{
        const square = this.width * this.height;
        console.log("area =", square);
    }
}

let someFigure: Figure = new Rectangle(10, 20)
someFigure.getArea();
