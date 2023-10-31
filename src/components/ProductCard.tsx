import { ProductType } from '@/services/ProductService'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button, Card, CardBody, CardSubtitle } from 'reactstrap'
import SuccessToast from './SuccessToast'
import { useCart } from '@/hooks/useCart'

interface IProductCardProps {
  product: ProductType
}

export default function ProductCard({ product }: IProductCardProps) {
  const [toastIsOpen, setToastIsOpen] = useState(false)
  const { id, name, imageUrl, price } = product
  const { addProduct } = useCart()

  return (
    <>
      <Card>
        <Link href={`/product/${id}`}>
          <Image
            className="card-img-top"
            src={imageUrl}
            alt="Product"
            width={200}
            height={160}
          />
        </Link>

        <CardBody>
          <Link href={`/product/${id}`}>
            <h5 className="card-title" style={{ cursor: 'pointer' }}>
              {name}
            </h5>
          </Link>

          <CardSubtitle className="mb-3 text-muted" tag="h6">
            R$ {price}
          </CardSubtitle>

          <Button
            color="dark"
            className="pb-2"
            block
            onClick={() => {
              addProduct(product)
              setToastIsOpen(true)
              setTimeout(() => setToastIsOpen(false), 1000 * 3)
            }}
          >
            Adicionar ao Carrinho
          </Button>
        </CardBody>
      </Card>

      <SuccessToast toastIsOpen={toastIsOpen} setToastIsOpen={setToastIsOpen} />
    </>
  )
}
