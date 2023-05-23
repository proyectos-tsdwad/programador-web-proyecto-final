export interface Purchase {
  orderNumber: number,
  date: string,
  products: Product[]
}

export interface Product {
  name: string,
  price: number,
  quantity: number,
  totalAmount: number
}

