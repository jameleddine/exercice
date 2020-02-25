class User{
    name:string;

    constructor(name:string){
        this.name = name;
    }

    getName(){
        return this.name;
    }
}

let Mo = new User('Karim');
console.log(Mo.getName());

function f(input: boolean) {
    let a = 100;
    if (input) {// Still okay to reference 'a'
            var b = a + 1;
            return b;
        }
       // Error: 'b' doesn't exist here
        return b;
    }