import makeCard from "./makeCard.js";

export default function renderList(
  results,
  dataKeys,
  rootSelector = "#result"
) {
  const root = document.querySelector(rootSelector);

  if (results.order.length === 0) {
    return;
  }

  const list = root.querySelector("#result_list");

  results.order.forEach(id => {
    const li = document.createElement("li");
    li.classList.add("result_list_item");
    li.classList.add("result_item");
    li.appendChild(makeCard(results.items[id], dataKeys));
    list.append(li);
  });
}
