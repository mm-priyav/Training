function calculateTotalPrice(products) {
  console.group('calculateTotalPrice'); 
  let totalPrice = 0;

  for (let product of products) {
    console.group('Product'); 
    console.log(`Name: ${product.name}`);
    console.log(`Price: ${product.price}`);
    console.groupEnd(); 
    totalPrice += product.price;
  }
  console.log('------------------');
  console.log(`Total Price: ${totalPrice}`);

  console.groupEnd(); 
}

const products = [
  { name: 'Shirt', price: 250 },
  { name: 'Pants', price: 400 },
  { name: 'Shoes', price: 600 }
];

calculateTotalPrice(products);