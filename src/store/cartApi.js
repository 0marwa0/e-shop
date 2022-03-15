export async function fetchCart(key = "") {
  key = key === "" ? "my-cart" : key;
  try {
    const res = (await localStorage.getItem(key)) || "{}";
    let rest = await JSON.parse(res);
    return rest;
  } catch (e) {}
}

export async function postCart(data, key = "") {
  key = key === "" ? "my-cart" : key;
  try {
    console.log(data, "post to cart");
    await localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {}
}
