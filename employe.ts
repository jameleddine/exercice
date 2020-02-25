interface IEmploye{
    firstname:string;
    date_naiss:Date;
    poste:string;

    getAge():number;
    getPoste():string;
}

class Employe implements IEmploye{
    firstname:string;
    date_naiss:Date;
    poste:string;
    constructor(firstname:string,date_naiss:Date,poste:string){
        this.firstname = firstname
        this.date_naiss = date_naiss
        this.poste =poste
    }
    
    getAge():number{
        let year = new Date().getFullYear();
        return year - this.date_naiss.getFullYear();
    }
    getPoste():string{
        return this.poste
    }
}
let Moh = new Employe("Jamel Eddine",new Date('10/10/1990'),"ing")

alert (Moh.getAge());
alert (Moh.getPoste());