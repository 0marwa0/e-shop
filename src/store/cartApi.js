export async function fetchCart(key = "") {
  key = key === "" ? "my-cart" : key;
  try {
    const res = (await localStorage.getItem(key)) || "{}";
    let rest = await JSON.parse(res);

    return rest;
  } catch (e) {
    return {};
  }
}

export async function postCart(data, key = "") {
  key = key === "" ? "my-cart" : key;
  try {
    await localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {}
}
