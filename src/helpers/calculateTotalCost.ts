import { TariffConfigState } from "@/store/tariffConfigSlice";

export function calculateTotalCost({
  minutes,
  sms,
  internetGB,
  additionalServices,
}: TariffConfigState) {
  const costPerMinute = 1;
  const costPerSMS = 0.5;
  const costPerInternetGB = 5;
  const additionalServiceCost = 5;

  const totalCost =
    minutes * costPerMinute +
    sms * costPerSMS +
    internetGB * costPerInternetGB +
    additionalServices.length * additionalServiceCost;

  return totalCost;
}
