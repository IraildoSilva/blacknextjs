import Link from 'next/link'
import { Navbar, Nav } from 'reactstrap'

export default function Header() {
  return (
    <Navbar container="md" color="dark" dark>
      <Link href="/">Início</Link>
      <Nav className="flex-row" navbar>
        <Link href="/products">Produtos</Link>
        <Link href="/cart">Carrinho</Link>
      </Nav>
    </Navbar>
  )
}
