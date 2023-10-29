export type ProductType = {
  id: number
  name: string
  description: string
  price: number
  imageUrl: string
  inStock: number
}

interface IProductService {
  url: string | undefined
}

class ProductService implements IProductService {
  url: string | undefined

  constructor() {
    this.url = process.env.NEXT_PUBLIC_APIURL
  }

  async getProducts() {
    const products: ProductType[] = await fetch(
      `${this.url}/api/products`
    ).then((res) => res.json())

    return products
  }

  async getProduct(id: number) {
    const product: ProductType = await fetch(
      `${this.url}/api/product/${id}`
    ).then((res) => res.json())

    return product
  }
}

export const productService = new ProductService()
