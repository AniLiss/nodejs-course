const config = require('./config');
const {Product, User} = require('./models');

const user = new User('Ilia');
user.sayName(); // Person John said his name

const product = new Product('laptop');
product.setProduct();



console.log(config.name);