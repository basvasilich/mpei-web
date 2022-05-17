export default function makeCard(data, keys) {
  const template = document.querySelector("#result_item");
  const clone = template.content.cloneNode(true);

  keys.forEach(key => {
    const box = clone.querySelector("." + key);
    if (key === "photo") {
      box.src = data[key];
    } else {
      box.textContent = data[key];
    }
  });

  if (data["has_lift"]) {
    clone.querySelector(".info").classList.add("has_lift");
  }

  return clone;
}
