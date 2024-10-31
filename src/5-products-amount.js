const stockProducts = require('./data.json');

const getProductsAmount = () => {
  // Desenvolva seu código dentro dessa função...
  let countProduct = 0;
  for (let index = 0; index < stockProducts.length; index += 1) {
    countProduct += stockProducts[index].quantityInStock;
  }

  return countProduct;
};

module.exports = { getProductsAmount };
