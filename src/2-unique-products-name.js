const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  // Desenvolva seu código dentro dessa função...
  let listNames = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    listNames.push(stockProducts[index].productName);
  }

  return listNames;
};

module.exports = { getUniqueProductsName };
