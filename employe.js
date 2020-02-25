var Employe = /** @class */ (function () {
    function Employe(firstname, date_naiss, poste) {
        this.firstname = firstname;
        this.date_naiss = date_naiss;
        this.poste = poste;
    }
    Employe.prototype.getAge = function () {
        var year = new Date().getFullYear();
        return year - this.date_naiss.getFullYear();
    };
    Employe.prototype.getPoste = function () {
        return this.poste;
    };
    return Employe;
}());
var Moh = new Employe("Jamel Eddine", new Date('10/10/1990'), "ing");
alert(Moh.getAge());
alert(Moh.getPoste());
