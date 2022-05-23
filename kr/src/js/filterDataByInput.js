/**
 * Функция которая сравнивает значение формы типа "от" и "до"
 * @param val {number}
 * @param a {number}
 * @param b {number}
 * @returns {boolean}
 */
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

/**
 * Функция проверки цены
 * @param price {number}
 * @param price_from {number}
 * @param price_to {number}
 * @returns {boolean}
 */
const checkPrice = ({price}, {price_from, price_to}) => {
  return checkFromToValue(price, price_from, price_to);
};

/**
 * Функция проверки этажа
 * @param floor {number}
 * @param floor_from {number}
 * @param floor_to {number}
 * @returns {boolean}
 */
const checkFloor = ({floor}, {floor_from, floor_to}) => {
  return checkFromToValue(floor, floor_from, floor_to);
};

/**
 * Функция проверки площади
 * @param area {number}
 * @param area_from {number}
 * @param area_to {number}
 * @returns {boolean}
 */
const checkArea = ({area}, {area_from, area_to}) => {
  return checkFromToValue(area, area_from, area_to);
};

/**
 * Функция проверки наличия лифта
 * @param apartment объект квартиры
 * @param input объект ввода
 * @returns {boolean}
 */
const checkHasLift = (apartment, input) => {
  if (!input.has_lift) {
    return true;
  } else if (input.has_lift && !apartment.has_lift) {
    return false;
  }
  return true;
};

/**
 * Функция проверки срока аренды
 * @param apartment объект квартиры
 * @param input объект ввода
 * @returns {boolean}
 */
const checkIsShort = (apartment, input) => {
  if (!input.is_short) {
    return true;
  } else if (input.is_short && !apartment.is_short) {
    return false;
  }
  return true;
};

/**
 * Функция проверки высоты потолка
 * @param apartment объект квартиры
 * @param input объект ввода
 * @returns {boolean}
 */
const checkHeight = (apartment, input) => {
  if (!input.height) {
    return true;
  }
  return apartment.height >= input.height;
};

/**
 * Функция проверки количества комнат
 * @param apartment объект квартиры
 * @param input объект ввода
 * @returns {boolean}
 */
const checkRoom = (apartment, input) => {
  if (!input.room) {
    return true;
  }

  return (input.room || []).includes(apartment.room);
};

/**
 * Функция проверки вхождения слов
 * @param apartment объект квартиры
 * @param input объект ввода
 * @returns {boolean}
 */
const checkText = (apartment, input) => {
  if (!input.text) {
    return true;
  }

  return input.text.some(word => apartment.text.includes(word));
};

/**
 * Функция фильтрации подходящих вариантов из всех имеющихся
 * @param apartments массив имеющихся вариантов квартир
 * @param input объект параметров поиска введенного пользователем
 * @returns {{items: {}, order: *[]}}
 */
export default function filterDataByInput(apartments, input) {
  let result = {items: {}, order: []};
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
