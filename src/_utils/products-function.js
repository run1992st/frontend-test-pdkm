
export default function(productsArray){
    //opitionated that productsArray contain <is_editable_price> and <products Array>
    const ineditableProducts = productsArray.filter((data) => {
      return !data.is_editable_price;
    });

    const subProductsTotalWeight = ineditableProducts.map(({name,products}) => {

      const totalSubWeight = products.reduce((total, subProduct) => {
        return total + subProduct.weight;
      }, 0);

      return {name,weight:totalSubWeight}
    });

    return subProductsTotalWeight
  }