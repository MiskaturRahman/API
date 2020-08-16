const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 20000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount) {
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'akkas',
    lastName: 'mia',
    salary: 25000,
}

const friendlyPerson = {
    firstName: 'dudu',
    lastName: 'rahman',
    salary: 30000,
}

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);
console.log(heroPerson.salary);

//Bind method
const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(1000);

//call method
normalPerson.chargeBill.call(friendlyPerson, 2000);
console.log(friendlyPerson.salary);