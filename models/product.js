class Product {
    constructor(item) {
        this.item = item;
    }

    setProduct() {
        console.log(`Product is ${this.item}`)
    }
}

module.exports = Product;