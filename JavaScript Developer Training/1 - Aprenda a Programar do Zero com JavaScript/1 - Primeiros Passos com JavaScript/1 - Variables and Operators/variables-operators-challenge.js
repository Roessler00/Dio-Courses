const fuelPrice = 6.99;
const vehicleConsumption = 12.42;
const travelDistanceKM = 30;

const litersConsumed = travelDistanceKM / vehicleConsumption;
const spentToTravel = (litersConsumed * fuelPrice).toFixed(2);

console.log(
  `The vehicle spent R$${spentToTravel} to travel ${travelDistanceKM}Km.`
);
