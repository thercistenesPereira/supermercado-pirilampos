const stockProducts = require('./data.json');

const searchProductsByBrand = (brand) => {
  let searchBrand = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].brand === brand) {
      searchBrand.push({
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price.toFixed(2)}`,
      });
    }
  }

  return searchBrand;
};

module.exports = { searchProductsByBrand };
