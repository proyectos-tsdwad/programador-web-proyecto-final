import { DELIVERY_TYPE, PAYMENT_TYPE } from 'src/app/utils/enums/sale.enum';
import { User } from '../user/user-model'
import { Delivery } from './delivery-model';
import { Book } from '../book/book-model';
export interface Sale {
  id_sell: number;
  saleDate: string;
  deliveryType: string;
  paymentType: string;
  totalQuantity: number;
  totalCost: number;
  profile: User
  delivery: Delivery;
  books: number[]
}

export interface CreateSaleDto extends Omit<Sale, 'id_sell' | 'books' | 'profile' | 'delivery'> {
  user_id: number,
  delivery: number,
  book_ids: number[]
}
