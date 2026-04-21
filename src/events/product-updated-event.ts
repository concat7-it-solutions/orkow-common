import { Streams } from './streams'
import { Subjects } from './subjects'

export interface ProductUpdatedEvent {
  subjectRoot: Subjects.ProductsSrv
  subject: Subjects.ProductUpdated
  streamName: Streams.ProductsStream
  data: {
    id: string
    version: number
    name: string
    sku: string
    storePrice?: number
    price?: number
    vat?: number
    vatType?: string
    inStock?: number
    isSale?: boolean
    discountType?: string
    discountValue?: number
    maxDiscountValue?: number
    variants?: {
      uid: string
      name: string
      price: number
      inStock: number
      storePrice?: number
      vat?: number
      vatType?: string
      isSale?: boolean
      discountType?: string
      discountValue?: number
      maxDiscountValue?: number
    }[]
  }
}
