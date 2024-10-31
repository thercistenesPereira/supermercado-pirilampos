const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  // Desenvolva seu código dentro dessa função...
  let lowStock = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock > 0 && stockProducts[index].quantityInStock <= 10) {
      lowStock
        .push(`${stockProducts[index].productName}:
          ${stockProducts[index].quantityInStock} unidades`);
    }
  }

  return lowStock;
};

console.log(getLowStockProducts());

module.exports = { getLowStockProducts };
