interface circleConfig{
    radius : number;
    colour? : string;
}
class Circle{
    circleRadius : number;
    circleColour : string;

    constructor(obj: circleConfig){
        this.circleRadius = obj.radius;
        this.circleColour = obj.colour;
    }
    getRadius(){
        console.log(this.circleRadius);
    }
    getColour(){
        console.log(this.circleColour);
    }
    toString(){
        console.log("Circle radius = " + this.circleRadius + ",colour = " + this.circleColour)
    }
    getArea(){
        var r = this.circleRadius;
        console.log( 3.14 * r * r );
    }
    getCircumference(){
        var r = this.circleRadius;
        console.log( 3.14 * 2 * r );
    }
}

let obj ={
    radius : 20,
    colour : "Blue"
}

let cc = new Circle(obj);
cc.toString();
cc.getArea();
cc.getCircumference();
cc.getColour();
cc.getRadius();




















// interface Configuration{
//     model: number;
//     seat: number;
//     brand:  string;
//     name: string;
//     milage : number;
//     colour? : string;
//     // printValues() : string
// }
// class Car {
//     carModel : number;
//     noOfSeat : number;
//     carBrand : string;
//     carName  : string;
//     carMilage : number;
//     carColour : string;

//     // constructor(model: number, seat: number, brand:  string, name: string, milage : number, colour? : string){
//     //     this.carModel = model;
//     //     this.noOfSeat = seat;
//     //     this.carBrand = brand;
//     //     this.carName = name;
//     //     this.carMilage = milage;
//     //     this.carColour = colour;
//     // }
//     constructor(obj:Configuration){
//         this.carModel = obj.model;
//         this.noOfSeat = obj.seat;
//         this.carBrand = obj.brand;
//         this.carName = obj.name;
//         this.carMilage = obj.milage;
//         this.carColour = obj.colour;
//     }

//     start() {
//         console.log("Car Started");
//     };
//     accelerate() {
//         console.log("Acceleration Given")
//     }
//     stop() {
//         console.log("Car Stopped")
//     };
//     getCarInfo() {
//         console.log(this.carModel, this.carName,this.noOfSeat, this.carBrand, this.carMilage, this.carColour)
//     };
// }
// let obj = {
//     model: 2021,
//     seat: 7,
//     brand:  "Audi",
//     name: "R7",
//     milage : 21,
// }
// let obj1 = {
//     model: 2022,
//     seat: 3,
//     brand:  "Lexus",
//     name: "E4",
//     milage : 12,
//     colour : "Orange",
// }
// let cc = new Car(obj);
// let cc1 = new Car(obj1);
// cc.getCarInfo();
// cc1.getCarInfo();