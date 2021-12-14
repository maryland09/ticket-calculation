import {Component, OnInit} from '@angular/core';
import {TariffService, Variant} from "../tariff.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-ticket-calculation',
  templateUrl: './ticket-calculation.component.html',
  styleUrls: ['./ticket-calculation.component.scss']
})
export class TicketCalculationComponent implements OnInit {

  public distance = 0
  public age = 0
  public luggageWeight = 0
  public aeroflot: Array<Variant> = []
  public rzd: Array<Variant> = []
  buttonFlag = false

  constructor(private readonly service: TariffService) {
  }

  isEmptyCompany(variant: Array<Variant>): boolean {
    return !variant.some(data => data.price > 0)
  }

  priceByTariff(variant: Array<Variant>, category: string): number {
    let price = 0
    variant.map(data => data.category == category ? price = data.price : null )
    return price
  }

  calc(form: NgForm) {
    if (form.form.valid) {
      [this.aeroflot, this.rzd] = this.service.calculate(this.distance, this.age, this.luggageWeight)
      console.log('рассчитала', this.distance, this.age, this.luggageWeight)
    }
  }

  ngOnInit(): void {
  }

}
