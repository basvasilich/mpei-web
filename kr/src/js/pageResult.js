import parseSearchInput from "./parseSearchInput.js";
import filterDataByInput from "./filterDataByInput.js";
import renderList from "./renderList.js";
import renderMap from "./renderMap.js";
import apartments from "../data.json" assert {type: "json"};

const dataKeys = [
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

const resultApartments = filterDataByInput(apartments, parseSearchInput());
renderList(resultApartments, dataKeys)
renderMap(resultApartments, dataKeys);

