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
          type: attribute.type,
          name: attribute.name,
          selected: element.item,
          items: [...attribute.items],
        });
      }
    }
  }
  return updatedAttributes;
};
export const totalPrice = (items, currency) => {
  let total = 0;
  items?.map((item) => {
    let amount = getPrice(item.prices, currency);
    total = amount * item.count;
  });

  return total;
};
