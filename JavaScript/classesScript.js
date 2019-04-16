
class Animal {
    constructor(name, color, breed, skill) {
        this.name = name;
        this.color = color;
        this.breed = breed;

    }
    static getAnySkill() {
        this.skills = ['jumping', 'runnig', 'hunting'];
        const index = Math.floor(Math.random() * 3);
        const skill = this.skills[index];
        return 'I have ' + skill;
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
    getAnimalInfo() {
        return 'I am ' + this.name + '. I am ' + this.color;
    }
}
const dog = new Animal('Pupy', 'black', 'labrador');
const cat = new Animal('Kitty', 'white', 'abyssinian');
const lion = new Animal('simba', 'brown', 'indian');

console.log(dog, cat, lion);
console.log(dog.getAnimalInfo());
console.log(Animal.getAnySkill());

// inheritance
// class child extends parent{

// }
class Cat extends Animal{
    constructor(name,color,breed,cleanlitter){
        super(name,color,breed);
        this.cleanlitter= cleanlitter;
    }
    meow(){
        return 'meow';
    }
    cleanMylitter(){
        return `I am ${this.name} and I know ${this.cleanlitter}`;
    }
}
const catt= new Cat('kuty', 'milkwhite','aby','how to clean :)');
console.log(catt.getAnimalInfo());
console.log(catt.meow());
console.log(catt.cleanMylitter());
