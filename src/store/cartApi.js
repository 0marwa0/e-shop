export async function fetchRequest() {
  try {
    const res = (await localStorage.getItem("cart")) || "{}";
    let rest = await JSON.parse(res);
    return rest;
  } catch (e) {}
}

export async function postRequest(data) {
  try {
    await localStorage.setItem("cart", JSON.stringify(data));
  } catch (e) {}
}
