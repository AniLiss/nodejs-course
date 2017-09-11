/*Created by elizaveta_anackaya on 10/09/2017.*/
class Product {
    constructor(item) {
        this.item = item;
    }

    setProduct() {
        console.log(`Product is ${this.item}`)
    }
}

exports.Product= Product;