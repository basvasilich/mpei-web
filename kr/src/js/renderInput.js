import makeCard from "./makeCard.js";

export default function renderInput(input) {
  const list = document.querySelector("#input_list");
  const addItem = (className, dataString) => {
    const item = document.createElement("li");
    item.classList.add(className);
    item.innerHTML = dataString;
    list.appendChild(item);
  };

  if (Object.keys(input).length === 1 && input.height === 0) {
    return addItem("empty", "Долгосрочная аренда, все остальное неважно");
  }

  if (input.room) {
    addItem(
      "room",
      `Количество комнат <span class="val">${input.room.join(", ")}</span>`
    );
  }

  if (input.price_from || input.price_to) {
    let dataStringPrice = "Цена";
    if (input.price_from) {
      dataStringPrice += ` от <span class="val">${input.price_from}</span>`;
    }
    if (input.price_to) {
      dataStringPrice += ` до <span class="val">${input.price_to}</span>`;
    }

    dataStringPrice += " ₽/мес.";
    addItem("price", dataStringPrice);
  }

  if (input.floor_from || input.floor_to) {
    let dataStringFloor = "Этаж";
    if (input.floor_from) {
      dataStringFloor += ` от <span class="val">${input.floor_from}</span>`;
    }
    if (input.floor_to) {
      dataStringFloor += ` до <span class="val">${input.floor_to}</span>`;
    }
    addItem("floor", dataStringFloor);
  }

  if (input.area_from || input.area_to) {
    let dataStringArea = "Площадь";
    if (input.area_from) {
      dataStringArea += ` от <span class="val">${input.area_from}</span>`;
    }
    if (input.area_to) {
      dataStringArea += ` до <span class="val">${input.area_to}</span>`;
    }

    dataStringArea += " м<sup>2</sup>";
    addItem("area", dataStringArea);
  }

  if (input.has_lift) {
    addItem("lift", "Есть лифт");
  }

  if (input.is_short) {
    addItem("short", "Краткосрочная аренда");
  } else {
    addItem("short", "Долгосрочная аренда");
  }

  if (input.height) {
    addItem(
      "height",
      `Высота потолков >= <span class="val">${input.height}</span> м.`
    );
  }

  if (input.text && input.text.length > 0) {
    addItem(
      "text",
      `Содержит слова: <span class="val">${input.text.join(", ")}</span>`
    );
  }
}
