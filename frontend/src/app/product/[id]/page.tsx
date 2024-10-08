import { products } from "@/core"

export default function PageProduct(props: any) {

  const id = +props.params.id
  const product = products.find((product) => product.id === id)

  return (
    <div>
      <h1>Pruduto: {product?.name}</h1>
    </div>
  )
}