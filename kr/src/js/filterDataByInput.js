const checkPrice = ({ price }, { price_from, price_to }) => {
  if (!price_from && !price_to) {
    return true;
  } else if (price_from && price_from) {
    return price >= price_from && price <= price_to;
  } else if (price_from && price >= price_from) {
    return true;
  } else if (price_to && price <= price_to) {
    return true;
  } else {
    return false;
  }
};

const checkFloor = ({ floor }, { floor_from, floor_to }) => {
  if (!floor_from && !floor_to) {
    return true;
  } else if (floor_from && floor_from) {
    return floor >= floor_from && floor <= floor_to;
  } else if (floor_from && floor >= floor_from) {
    return true;
  } else if (floor_to && floor <= floor_to) {
    return true;
  } else {
    return false;
  }
};

const checkArea = ({ area }, { area_from, area_to }) => {
  if (!area_from && !area_to) {
    return true;
  } else if (area_from && area_from) {
    return area >= area_from && area <= area_to;
  } else if (area_from && area >= area_from) {
    return true;
  } else if (area_to && area <= area_to) {
    return true;
  } else {
    return false;
  }
};

const checkHasLift = (apartments, input) => {
  if (!input.has_lift) {
    return true;
  } else if (input.has_lift && !apartments.has_lift) {
    return false;
  }
  return true;
};

const checkIsShort = (apartments, input) => {
  if (!input.is_short) {
    return true;
  } else if (input.is_short && !apartments.is_short) {
    return false;
  }
  return true;
};

const checkHeight = (apartments, input) => {
  if (!input.height) {
    return true;
  }
  return apartments.height >= input.height;
};
const checkRoom = (apartments, input) => {
  if (!input.room) {
    return true;
  }
  return (input.room || []).includes(apartments.room);
};

export default function filterDataByInput(apartments, input) {
  let result = { items: {}, order: [] };
  for (let key in apartments) {
    if (
      checkPrice(apartments[key], input) &&
      checkFloor(apartments[key], input) &&
      checkArea(apartments[key], input) &&
      checkHasLift(apartments[key], input) &&
      checkHeight(apartments[key], input) &&
      checkIsShort(apartments[key], input) &&
      checkRoom(apartments[key], input)
    ) {
      result.items[key] = apartments[key];
      result.order.push(key);
    }
  }
  return result;
}
