class Person {
    constructor(name, surname) {
        this.name = name
        this.surname = surname
    }

    getFirstBigLetter(x) {
        return x.slice(0,1).toUpperCase()
    }

    getNameWithSurname() {
        return `${this.name} ${this.surname.toUpperCase()}`
    }

    getInicials() {
        return `${this.getFirstBigLetter(this.name)}.${this.getFirstBigLetter(this.surname)}.`
    }

}

let l = new Person("Kamil", "Stachowicz")
console.log(l.getNameWithSurname())
console.log(l.getInicials())

let x = new Person("Jan", "Kowalski")
console.log(x.getNameWithSurname())
console.log(x.getInicials())
