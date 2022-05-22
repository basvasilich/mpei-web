import makeCard from "./makeCard.js";

export default function renderMap(
  results,
  dataKeys,
  rootSelector = "#result_map"
) {
  if (results.order.length === 0) {
    return;
  }

  ymaps.ready(() => {
    const myMap = new ymaps.Map(rootSelector.replace("#", ""), {
      center: [55.76, 37.64],
      zoom: 12,
      controls: ["zoomControl"]
    });
    results.order.forEach(id => {
      const div = document.createElement("div");
      div.classList.add("result_map_item");
      div.classList.add("result_item");
      div.appendChild(makeCard(results.items[id], dataKeys));
      myMap.geoObjects.add(
        new ymaps.Placemark(
          results.items[id].coords,
          {
            balloonContent: div.outerHTML
          },
          {
            preset: "islands#dotIcon"
          }
        )
      );
    });
  });
}
