import { Col, Row } from 'reactstrap'
import ProductCard from './ProductCard'
import { ProductType } from '@/services/ProductService'

interface IProductsListProps {
  products: ProductType[]
}

export default function ProductsList({ products }: IProductsListProps) {
  return (
    <>
      <Row className="g-5">
        {products.map((product) => (
          <Col md={6} lg={4} xl={3} key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}
