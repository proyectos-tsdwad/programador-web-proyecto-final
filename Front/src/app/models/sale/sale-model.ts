import { DELIVERY_TYPE, PAYMENT_TYPE } from 'src/app/utils/enums/sale.enum';
import { User } from '../user/user-model'
import { Delivery } from './delivery-model';
export interface Sale {
  id: number,
  orderNumber: number;
  date: string;
  user: User
  totalCost: number;
  totalQuantity: number;
  shipment: Delivery;
  deliveryType: DELIVERY_TYPE;
  totalItems: number;
  paymentType: PAYMENT_TYPE;
}
