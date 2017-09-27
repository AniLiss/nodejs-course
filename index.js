'use strict';

const config = require('./config');
const {Product, User, DirWatcher} = require('./models');

const user = new User('Ilia');
user.sayName(); // Person John said his name

const product = new Product('laptop');
product.setProduct();

//const dirwatcher = new DirWatcher('Path');
//dirwatcher.watch();



console.log(config.name);