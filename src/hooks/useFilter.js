export const useFilter = (
  data,
  carBrand,
  carModel,
  carBody,
  carYear,
  carPriceFrom,
  carPriceTo,
  carSide
) => {
  const filteredData = data?.filter((car) => {
    if (
      carBrand === null &&
      carModel === null &&
      carBody === null &&
      carYear === null &&
      carPriceFrom === null &&
      carPriceTo === null &&
      carSide === null
    ) {
      return true; //якщо фільтр пустий, одразу виводимо картку(і всі інші також)
    }

    if (carBrand != car.carBrand && carBrand != null) {
      //якщо бренд не співпав, ця машина одразу відкидається, інші фільтри вже можна не перевіряти
      //або якщо не null, бо null - це пустий фільтр
      //   console.log("carbrand");
      return false;
    }

    if (!car.carModels.includes(carModel) && carModel != null) {
      //якщо модель не співпала, ця машина одразу відкидається, інші фільтри вже можна не перевіряти
      //   console.log("carmodel");
      return false;
    }

    if (!car.carBodies.includes(carBody) && carBody != null) {
      //все те саме що й зверху
      //   console.log("carbody");
      return false;
    }

    if (
      (carYear < Number(car.installedFrom) ||
        carYear > Number(car.installedUntil)) &&
      carYear != null
    ) {
      //якщо вибраний рік менше мінімального або більше максимального, скіп
      //   console.log("caryear");
      return false;
    }

    if (
      (car.price < Number(carPriceFrom) || car.price > Number(carPriceTo)) &&
      (carPriceFrom != "" || carPriceTo != "")
    ) {
      //якщо ціна менше мін.встановленої або більше мах.встановленої, скіп
      //   console.log("carprice");
      return false;
    }

    if (car.side != carSide && carSide != null) {
      // сторона не співпала - скіп
      //   console.log("carside");
      return false;
    }

    return true;
  });
  return filteredData;
};
