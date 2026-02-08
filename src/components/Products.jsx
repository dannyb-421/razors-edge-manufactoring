import ProductCard from './ProductCard'
import { products } from '../data/products'

export default function Products() {
  return (
    <section id="products" className="products">
      {products.map((product) => (
        <ProductCard
          key={product.title}
          title={product.title}
          description={product.description}
          imageSrc={product.imageSrc}
          imageAlt={product.imageAlt}
        />
      ))}
    </section>
  )
}
