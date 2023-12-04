/*დავალება 1*/
const productsFeatures = {
    name: 'Product X',
    description: 'A high-quality product with many features.',
    price: 100
};

const productProperties = {
    color: 'red',
    size: 'medium',
    weight: 5
};

const product = {...productProperties, ...productsFeatures}

/*const product = Object.assign(productProperties, productsFeatures)*/

console.log(product)

/*for (const prop in productsFeatures) {
    console.log(productsFeatures[prop]);
}

for (const prop in productProperties) {
    console.log(productProperties[prop]);
}*/

/*დავალება 2*/
const products = [
    {
        name: "Product X",
        description: "A high-quality product with many features.",
        price: 100
    },
    {
        name: "Product Y",
        description: "Another great product with a competitive price.",
        price: 75
    },
    {
        name: "Product Z",
        description: "A basic product that gets the job done.",
        price: 50
    }
];

console.log(products[0].price + products[1].price + products[2].price)

/*დავალება 3*/
const productList = [
    { name: "Laptop", price: 1299 },
    { name: "Phone", price: 499 },
    { name: "Tablet", price: 299 },
    { name: "Watch", price: 199 },
    { name: "Headphones", price: 99 },
];

const price = productList.filter(number => number.price > 240);

console.log(price);

/*დავალება 4*/
const numbers = [33, 10, 99, 95];

const triples = numbers.map(number => number * 3);

console.log(triples);