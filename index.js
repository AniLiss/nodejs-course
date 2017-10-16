const config = require('./config');
const {Product, User, Importer} = require('./models');
const filePath = ('./data/MOCK_DATA.csv');

const stream = require('./utils/streams');

const user = new User('Ilia');
user.sayName(); // Person John said his name

const product = new Product('laptop');
product.setProduct();

const importer = new Importer(filePath);

console.log(config.name);