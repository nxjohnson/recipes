import measuringUnits, { MeasuringUnitsKey } from "./measuringUnits";

export default function formatMeasuringUnits(quantity: number | null, unit:MeasuringUnitsKey | null): string {
  if (!quantity || !unit) {
    return '';
  }

  if (quantity > 1) {
    return measuringUnits[unit].plural
  }

  return unit;
}