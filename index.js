const config = require('./config');
const {Product, User, Importer} = require('./models');
const filePath = ('./data/MOCK_DATA.csv');

const user = new User('Ilia');
user.sayName(); // Person John said his name

const product = new Product('laptop');
product.setProduct();

 //const dirwatcher = new DirWatcher();
//dirwatcher.watch();

const importer = new Importer(filePath);


console.log(config.name);