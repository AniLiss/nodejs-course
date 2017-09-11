/*Created by elizaveta_anackaya on 10/09/2017.*/
class User {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(`Person ${this.name} said his name`);
    }
}

exports.User= User;