export const getPrice = (prices, currentCurrency) => {
  let price = prices.filter(
    (price) => price["currency"]["symbol"] === currentCurrency
  );
  price = price[0]["amount"];
  return Number(price);
};
