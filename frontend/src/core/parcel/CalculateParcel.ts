import { QTD_MAX_PARCESLS, TAX_MONTH } from '../constants';
import Parcel from "./Parcel";

export default class CalculateParcel {
  executar(
    value: number,
    parcelQuantity: number = QTD_MAX_PARCESLS,
    tax: number = TAX_MONTH
  ) : Parcel {
    if (parcelQuantity < 2 || parcelQuantity > QTD_MAX_PARCESLS) {
      throw new Error(`Quantidade de parcelas deve ser entre 2 e ${QTD_MAX_PARCESLS}`)
    }

    const totalWithTax = this.calculateCompoundTax(value, tax, parcelQuantity)

    return {
      parcelValue: this.formatDecimal(totalWithTax / parcelQuantity),
      totalValue: this.formatDecimal(totalWithTax),
      parcelQuantity,
      tax
    }
  }


  private calculateCompoundTax(totalValue: number, taxMonth: number, parcelQuantity: number) {
    return totalValue * Math.pow(1 + taxMonth, parcelQuantity)
  }

  private formatDecimal(value: number): number {
    return Math.round(value * 100) / 100
  }
}