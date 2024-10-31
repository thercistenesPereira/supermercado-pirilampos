const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  const listAlergyOrIntolecance = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    const product = stockProducts[index];
    const formattedProduct = {
      description: product.description,
      formattedPrice: `R$ ${product.price.toFixed(2)}`,
    };

    if (product.allergyOrIntolerance && product.allergyOrIntolerance.length > 0) {
      formattedProduct
        .allergyOrIntoleranceMessage = `Pode conter: ${product.allergyOrIntolerance.join(' ')}`;
    }

    listAlergyOrIntolecance.push(formattedProduct);
  }

  return listAlergyOrIntolecance;
};

module.exports = { getProductsWithAllergyOrIntoleranceInfo };
