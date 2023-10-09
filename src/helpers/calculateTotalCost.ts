import { TariffConfigState } from "@/store/tariffConfigSlice";

export function calculateTotalCost({
  minutes,
  sms,
  internetGB,
  additionalServices,
}: TariffConfigState) {
  const costPerMinute = 0.1;
  const costPerSMS = 0.05;
  const costPerInternetGB = 10;
  const additionalServiceCost = 5;

  const totalCost =
    minutes * costPerMinute +
    sms * costPerSMS +
    internetGB * costPerInternetGB +
    additionalServices.length * additionalServiceCost;

  return totalCost;
}
