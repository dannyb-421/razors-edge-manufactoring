export default function ProductCard({ title, description, imageSrc, imageAlt }) {
  return (
    <div className="product-card">
      <img src={imageSrc} alt={imageAlt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
