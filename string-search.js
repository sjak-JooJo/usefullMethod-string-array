const products = [
    'Dell hardcore i29 200gb laptop',
    'iphone 1TB camera falshlight Phone',
    'yellow laptop with black camera',
    '1x59 Lenovo commercial yoga laptop',
    'LG supernove laptop',
    'HTC low price Phone',
    'purple color phone with Laptop'
];

const searching = 'dell';

//  indexOf

const output = [];

/* for(const product of products){
    if(product.toLowerCase().indexOf(searching.toLocaleLowerCase()) != -1){
        output.push(product);
    }
} */

// includes

for(const product of products){
    if(product.toLowerCase().includes(searching.toLocaleLowerCase())){
        //output.push(product);
    }
}
console.log(output);

//start with

for(const product of products){
    if(product.toLowerCase().startsWith(searching.toLocaleLowerCase())){
        output.push(product);
    }
}
console.log(output);