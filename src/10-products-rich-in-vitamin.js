const stockProducts = require('./data.json');

const getProductsRichInVitamin = () => {
  let listProduct = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    const product = stockProducts[index];
    const vitamins = product.nutritionalInfo.vitamins;

    if (vitamins && Object.keys(vitamins).length > 0) {
      const vitaminsInformation = Object.entries(vitamins).map(
        ([vitamin, amount]) => `${vitamin} - ${amount}`,
      );

      listProduct.push({
        description: product.description,
        formattedPrice: `R$ ${product.price.toFixed(2)}`,
        vitaminsInformation,
      });
    }
  }

  return listProduct;
};

console.log(getProductsRichInVitamin());

module.exports = { getProductsRichInVitamin };
