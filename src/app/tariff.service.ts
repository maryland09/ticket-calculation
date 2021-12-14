import {Injectable} from '@angular/core';
import {Tariff} from "./tariff";
import {AeroflotAdvanced, AeroflotEconom, AeroflotLuxe, RzdAdvanced, RzdEconom, RzdLuxe} from "./data";

export interface Variant {
  company: string,
  category: string,
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class TariffService {

  constructor() {
  }

  calculate(distance: number, age: number, luggageWeight: number) {

    let aeroflot: Array<Tariff> = []
    let aeroflotPrices:  Array<Variant> = []
    aeroflot.push(AeroflotEconom, AeroflotAdvanced, AeroflotLuxe)
    aeroflot.forEach(variant => aeroflotPrices.push({company:variant.company, category: variant.category, price: variant.ticketCost(distance, age, luggageWeight) }))

    let rzd: Array<Tariff> = []
    let rzdPrices:  Array<Variant> = []
    rzd.push(RzdEconom, RzdAdvanced, RzdLuxe)
    rzd.forEach(variant => rzdPrices.push({company:variant.company, category: variant.category, price: variant.ticketCost(distance, age, luggageWeight) }))

    return [aeroflotPrices, rzdPrices]
  }

}
