import Header from '@/components/Header'
import { ProductType, productService } from '@/services/ProductService'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { ReactNode } from 'react'
import { Container } from 'reactstrap'
import ProductsList from '@/components/ProductsList'

export const getStaticProps: GetStaticProps = async () => {
  const productsData = await productService.getProducts()

  return {
    props: {
      productsData,
    },
  }
}

const Products: NextPage = (props: {
  children?: ReactNode
  productsData?: ProductType[]
}) => {
  return (
    <>
      <Head>
        <title>Nossos Produtos</title>
        <meta name="description" content="Conheça todos os nossos produtos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Container className="mb-5">
          <h1 className="my-5">Nossos Produtos</h1>

          {<ProductsList products={props.productsData!} />}
        </Container>
      </main>
    </>
  )
}

export default Products
