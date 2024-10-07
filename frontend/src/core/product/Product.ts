import Price from "./Price"
import Specifications from "./Specifications"

export default interface Product extends Price {
  id: number
  name: string
  description: string
  brand: string
  model: string
  image: string
  rating: number
  videoReview: string
  tags: string[]
  specifications: Specifications
}