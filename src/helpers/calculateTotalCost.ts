import { TariffConfigState } from "@/store/tariffConfigSlice";

export function calculateTotalCost({
  minutes,
  internetGB,
  additionalServices,
}: TariffConfigState) {
  const costPerMinute = 0.1;
  const costPerInternetGB = 10;
  const additionalServiceCost = 5;

  const totalCost =
    minutes * costPerMinute +
    internetGB * costPerInternetGB +
    additionalServices.length * additionalServiceCost;

  return totalCost;
}
