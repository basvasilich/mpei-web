import parseSearchInput from "./parseSearchInput.js";
import filterDataByInput from "./filterDataByInput.js";
import renderList from "./renderList.js";
import renderMap from "./renderMap.js";
import apartments from "../data.json" assert {type: "json"};
import renderInput from "./renderInput.js";

const dataKeys = [
  "title",
  "text",
  "photo",
  "phone",
  "room",
  "floor",
  "height",
  "price",
  "area",
  "address"
];

const input = parseSearchInput()
const resultApartments = filterDataByInput(apartments, input);

renderInput(input)

if (resultApartments.order.length > 0) {
  const bodyNode = document.querySelector('body')
  const viewFormNode = document.querySelector('#view')

  bodyNode.classList.add("view_map");
  renderList(resultApartments, dataKeys)
  renderMap(resultApartments, dataKeys);

  viewFormNode.addEventListener('change', (e) => {
    if (e.target.name === 'view') {
      if (viewFormNode.elements["view"].value === 'map') {
        bodyNode.classList.replace("view_list", 'view_map');
      } else {
        bodyNode.classList.replace("view_map", 'view_list');
      }
    }
  })
}




