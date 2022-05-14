export default function renderResults(results, rootSelector = "#result") {
  const root = document.querySelector(rootSelector);

  if (results.order.length === 0) {
    return;
  }
  const list = root.querySelector("#result_list");
  const template = document.querySelector("#result_item");

  const keys = [
    "title",
    "text",
    "photo",
    "room",
    "floor",
    "height",
    "price",
    "area",
    "address"
  ];

  results.order.forEach(id => {
    const clone = template.content.cloneNode(true);

    keys.forEach(key => {
      const box = clone.querySelector("." + key);
      if (key === "photo") {
        box.src = results.items[id][key];
      } else {
        box.textContent = results.items[id][key];
      }
    });

    if (results.items[id]["has_lift"]) {
      clone.querySelector(".info").classList.add("has_lift");
    }

    list.append(clone);
  });

  root.classList.add("not_empty");
}
