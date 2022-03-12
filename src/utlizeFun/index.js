export const getPrice = (prices, currentCurrency) => {
  let price = prices?.filter(
    (price) => price["currency"]["symbol"] === currentCurrency
  );
  price = price?.[0]["amount"];
  return Number(price);
};
export const updatedSelectedValue = (attributes, items) => {
  let updatedAttributes = [];
  for (let i = 0; i < attributes.length; i++) {
    const attribute = attributes[i];
    for (let j = 0; j < items.length; j++) {
      const element = items[j];
      if (attribute.name === element.name) {
        updatedAttributes.push({
          name: attribute.name,
          selected: element.item,
          items: [...attribute.items],
        });
      }
    }
  }
  return updatedAttributes;
};
