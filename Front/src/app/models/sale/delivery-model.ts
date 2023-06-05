import { DELIVERY_STATUS } from "src/app/utils/enums/sale.enum";

export interface Delivery {
  id: number,
  address: string,
  postalCode: number,
  status: DELIVERY_STATUS
}
