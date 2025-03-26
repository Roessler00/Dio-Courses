let fuelType = "diesel";

const fuelPriceGasoline = 6.99;
const fuelPriceEthanol = 4.99;
const vehicleConsumptionGasoline = 12.42;
const vehicleConsumptionEthanol = 8.69;
const travelDistanceKM = 30;

if (fuelType === "gasoline") {
  const litersConsumedGasoline = travelDistanceKM / vehicleConsumptionGasoline;
  const spentToTravelGasoline = (
    litersConsumedGasoline * fuelPriceGasoline
  ).toFixed(2);
  console.log(
    `The vehicle spent R$${spentToTravelGasoline} to travel ${travelDistanceKM}Km with ${fuelType}`
  );
} else if (fuelType === "ethanol") {
  const litersConsumedEthanol = travelDistanceKM / vehicleConsumptionEthanol;
  const spentToTravelEthanol = (
    litersConsumedEthanol * fuelPriceEthanol
  ).toFixed(2);
  console.log(
    `The vehicle spent R$${spentToTravelEthanol} to travel ${travelDistanceKM}Km with ${fuelType}`
  );
} else {
  console.log(`This Fuel Type is Invalid`);
}
