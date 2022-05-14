import parseSearchInput from "./parseSearchInput.js";
import filterDataByInput from "./filterDataByInput.js";
import renderResults from "./renderResults.js";
import apartments from "../data.json" assert {type: "json"};

const input = parseSearchInput()
const resultApartments = filterDataByInput(apartments, input);
renderResults(resultApartments)
