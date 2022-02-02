// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 10, 
		image: "fruit.png"
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 20,
		image: "fruit.png"
	},
	{
		name: "meat",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 30,
		image: "fruit.png"
	},
	{
		name: "seafood",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 1,
		image: "fruit.png"
	},
	{
		name: "cereals",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 5,
		image: "fruit.png"
	},
	{
		name: "eggs",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 9,
		image: "fruit.png"
	},
	{
		name: "cheese",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2,
		image: "fruit.png"
	},
	{
		name: "oil",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 14,
		image: "fruit.png"
	},
	{
		name: "rice",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 17,
		image: "fruit.png"

	},
	{
		name: "onion",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 19,
		image: "fruit.png"

	},
	
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	let vegitarian = restriction[0];
	let glutenFree = restriction[1];
	let organic = restriction[2];
	let none = restriction[3];

	
	for (let i=0; i<prods.length; i+=1) {
		let product = products[i];
		if(none == true){
			product_names.push({
				name: product.name, 
				price: product.price
			});
		}
		else if (vegitarian && glutenFree) {
			if (((organic && product.organic) || !organic) && product.vegetarian && product.glutenFree)
				product_names.push({
					name: product.name, 
					price: product.price
				});
		}

		else if (vegitarian) {
			if (((organic && product.organic) || !organic) && product.vegetarian)
				product_names.push({
					name: product.name, 
					price: product.price
				});
		} else if (glutenFree) {
			if (((organic && product.organic) || !organic) && product.glutenFree)
				product_names.push({
					name: product.name, 
					price: product.price
				});
		}
	}
	return product_names
}



	



// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}


	 