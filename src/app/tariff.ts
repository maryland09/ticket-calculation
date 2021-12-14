export class Tariff {
  constructor(public company: string,
              public category: string,
              public pricePerKm: number,
              public extraLuggagePrice: number,
              public borderWeight: number,
              public maxLuggageWeight: number,
              public childAge: number,
              public discount: number,
              public discountType: LuggageDiscountType,
              public extraLuggageTariff: ExtraLuggageType,
  ) {
  }

  ticketCost(distance: number, age: number, luggageWeight: number) {
    let distancePrice = 0
    let luggagePrice = 0
    let ticketPrice = 0

    // 1
    if (luggageWeight > this.maxLuggageWeight) {
      return 0
    }

    // 2
    distancePrice = distance * this.pricePerKm

    // 3
    if (this.extraLuggageTariff == ExtraLuggageType.total) {
      if (luggageWeight > this.borderWeight) {
        luggagePrice = this.extraLuggagePrice
      }
    } else {
      if (luggageWeight > this.borderWeight) {
        luggagePrice = (luggageWeight - this.borderWeight) * this.extraLuggagePrice
      }
    }

    // 4
    if (age > this.childAge) {
      ticketPrice = distancePrice + luggagePrice
    } else {
      if (this.discountType == LuggageDiscountType.withLuggage) {
        ticketPrice = (distancePrice + luggagePrice) * (100 - this.discount) / 100
      } else {
        ticketPrice = distancePrice * (100 - this.discount) / 100 + luggagePrice
      }
    }

    return ticketPrice
  }

}


export enum LuggageDiscountType {
  withLuggage = 'withLuggage',
  noLuggage = 'noLuggage'
}

export enum ExtraLuggageType {
  total = 'total',
  perKilo = 'perKilo'
}

