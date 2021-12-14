import {LuggageDiscountType, ExtraLuggageType, Tariff} from "./tariff";

export const AeroflotEconom = new Tariff('aeroflot', 'econom', 4, 4000, 5, 20, 0, 0, LuggageDiscountType.noLuggage, ExtraLuggageType.total)
export const AeroflotAdvanced = new Tariff('aeroflot', 'advanced', 8, 5000, 20, 50, 7, 30, LuggageDiscountType.noLuggage, ExtraLuggageType.total)
export const AeroflotLuxe= new Tariff('aeroflot', 'luxe', 15, 0, 0, 50, 16, 30, LuggageDiscountType.noLuggage, ExtraLuggageType.total)
export const RzdEconom = new Tariff('rzd', 'econom', 0.5, 50, 15, 50, 5, 50, LuggageDiscountType.noLuggage, ExtraLuggageType.perKilo)
export const RzdAdvanced = new Tariff('rzd', 'advanced', 2, 50, 20, 60, 8, 30, LuggageDiscountType.noLuggage, ExtraLuggageType.perKilo)
export const RzdLuxe = new Tariff('rzd', 'luxe', 4, 0, 0, 60, 16, 20, LuggageDiscountType.withLuggage, ExtraLuggageType.total)
