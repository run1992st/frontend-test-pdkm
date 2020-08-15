export { productsTotalWeight, productsSubTotalWeight };

function productsTotalWeight(productsArray) {
  //opinionated that productsArray contain <is_editable_price> and <products Array>
  const ineditableProducts = productsArray.filter((data) => {
    return !data.is_editable_price;
  });

  const subProductsTotalWeight = ineditableProducts.map(
    ({ name, products }) => {
      const totalSubWeight = products.reduce((total, subProduct) => {
        return total + subProduct.weight;
      }, 0);

      return { name, weight: totalSubWeight };
    }
  );

  return subProductsTotalWeight;
}

function productsSubTotalWeight(productsArray) {
  const ineditableProducts = productsArray.filter((data) => {
    return !data.is_editable_price;
  });

  const subProductsTotalWeight = ineditableProducts.map(
    ({ name, products }) => {
      const totalSubWeight = products.reduce((total, subProduct) => {
        return total + subProduct.weight * subProduct.amount;
      }, 0);

      return { name, weight: totalSubWeight };
    }
  );

  return subProductsTotalWeight;
}
