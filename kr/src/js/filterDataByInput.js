const checkFromToValue = (val, a, b) => {
  if (!a && !b) {
    return true;
  }

  const from = Math.min(a || 0, b || 0);
  const to = Math.max(a || 0, b || 0);

  if (from && to) {
    return val >= from && val <= to;
  } else if (from && val >= from) {
    return true;
  } else if (to && val <= to) {
    return true;
  } else {
    return false;
  }
};

const checkPrice = ({ price }, { price_from, price_to }) => {
  return checkFromToValue(price, price_from, price_to);
};

const checkFloor = ({ floor }, { floor_from, floor_to }) => {
  return checkFromToValue(floor, floor_from, floor_to);
};

const checkArea = ({ area }, { area_from, area_to }) => {
  return checkFromToValue(area, area_from, area_to);
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

const checkText = (apartments, input) => {
  if (!input.text) {
    return true;
  }

  return input.text.some(word => apartments.text.includes(word));
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
      checkRoom(apartments[key], input) &&
      checkText(apartments[key], input)
    ) {
      result.items[key] = apartments[key];
      result.order.push(key);
    }
  }
  return result;
}
