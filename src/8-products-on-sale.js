const stockProducts = require('./data.json');

const getProductsOnSale = () => {
  // Desenvolva seu código dentro dessa função...
  let produtcSale = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].onSale === true) {
      produtcSale.push({
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price.toFixed(2)}`,
        onSale: stockProducts[index].onSale,
      });
    }
  }

  return produtcSale;
};

console.log(getProductsOnSale());

module.exports = { getProductsOnSale };
