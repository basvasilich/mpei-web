export default function parseSearchInput() {
  if (window.location.search === "") {
    return {};
  }
  const search = window.location.search.replace("?", "").split("&");

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
        acc[key] = value.split(" ");
        break;
      case "height":
        acc[key] = parseFloat(value);
        break;
      case "":
        acc[key] = parseInt(value);
        break;
    }

    return acc;
  }, {});
}
