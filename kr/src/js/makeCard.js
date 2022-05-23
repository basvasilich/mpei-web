/**
 * Функуция рендера одной карточки квартиры из темплейта
 * @param data объект квартиры
 * @param keys поддержанные ключи объекта квартиры
 * @returns {Node}
 */
export default function makeCard(data, keys) {
  const template = document.querySelector("#result_item");
  const clone = template.content.cloneNode(true);

  keys.forEach(key => {
    const box = clone.querySelector("." + key);
    if (key === "photo") {
      box.src = data[key];
    } else if (key === "phone") {
      box.href = "tel:" + data[key];
      box.textContent = data[key];
    } else {
      box.textContent = data[key];
    }
  });

  if (data["has_lift"]) {
    clone.querySelector(".info").classList.add("has_lift");
  }

  return clone;
}
