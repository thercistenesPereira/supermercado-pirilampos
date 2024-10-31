const stockProducts = require('./data.json');

const getOutOfStockProducts = () => {
  // Desenvolva seu código dentro dessa função...
  let noStock = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock === 0) {
      noStock.push(stockProducts[index].productName);
    }
  }

  return noStock;
};

module.exports = { getOutOfStockProducts };
