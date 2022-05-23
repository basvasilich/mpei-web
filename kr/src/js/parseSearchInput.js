/**
 * Функция обработки параметров query параметров в window.location
 * @returns объект параметров поиска
 */
export default function parseSearchInput() {
  if (window.location.search === "") {
    return {};
  }
  const search = decodeURI(window.location.search)
    .replace("?", "")
    .split("&");

  return search.reduce((acc, item) => {
    const [key, value] = item.split("=");

    switch (key) {
      case "room":
        if (acc[key]) {
          acc[key].push(parseInt(value));
        } else {
          acc[key] = [parseInt(value)];
        }
        break;
      case "has_lift":
        if (value !== "0") {
          acc[key] = true;
        }
        break;
      case "is_short":
        if (value !== "long") {
          acc[key] = true;
        }
        break;
      case "text":
        if (value.trim() !== "") {
          acc[key] = value.trim().split("+");
        }

        break;
      case "height":
        acc[key] = parseFloat(value);
        break;
      default:
        if (value !== "") {
          acc[key] = parseInt(value);
        }
    }

    return acc;
  }, {});
}
