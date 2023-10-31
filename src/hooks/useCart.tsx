import { ProductType } from '@/services/ProductService'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

interface ICartContext {
  cart: ProductType[]
  addProduct: (product: ProductType) => void
  removeProduct: (productId: number) => void
}

const CartContext = createContext<ICartContext>({} as ICartContext)

export function CartContextProvider(props: { children: ReactNode }) {
  const [cart, setCart] = useState<ProductType[]>([])

  useEffect(() => {
    const storedCart = localStorage.getItem('shopping-cart')

    if (storedCart) {
      setCart(JSON.parse(storedCart))
    }
  }, [])

  function addProduct(product: ProductType) {
    const updatedCart = [...cart, product]

    localStorage.setItem('shopping-cart', JSON.stringify(updatedCart))
    setCart(updatedCart)
  }

  const removeProduct = (productId: number) => {
    const productIndex = cart.findIndex((product) => product.id === productId)

    if (productIndex !== -1) {
      const updatedCart = [...cart]
      updatedCart.splice(productIndex, 1)
      localStorage.setItem('shopping-cart', JSON.stringify(updatedCart))
      setCart(updatedCart)
    }
  }

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {props.children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
