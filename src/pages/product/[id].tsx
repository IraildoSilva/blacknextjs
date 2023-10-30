import Header from '@/components/Header'
import ProductDetails from '@/components/ProductDetails'
import { ProductType, productService } from '@/services/ProductService'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { ReactNode } from 'react'
import { Container } from 'reactstrap'

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id

  if (typeof id === 'string') {
    const data = await productService.getProduct(id)

    return { props: { data } }
  }

  return {
    redirect: {
      destination: '/products',
      permanent: false,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await productService.getProducts()

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

// export const getStaticProps: GetStaticProps = async (context) => {
//   const id = context.params?.id

//   if (typeof id === 'string') {
//     const data = await productService.getProduct(+id)

//     return {
//       props: {
//         data,
//       },
//     }
//   }

//   return {
//     redirect: {
//       destination: '/products',
//       permanent: false,
//     },
//   }
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   const products = await productService.getProducts()

//   const paths = products.map((product) => {
//     return { params: { id: product.id.toString() } }
//   })

//   return {
//     paths,
//     fallback: false,
//   }
// }

const Product: NextPage = (props: {
  children?: ReactNode
  data?: ProductType
}) => {
  return (
    <div>
      <Head>
        <title>{props.data!.name}</title>
        <meta name="description" content={props.data!.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Container className="mt-5">
        <ProductDetails product={props.data!} />
      </Container>
    </div>
  )
}

export default Product
