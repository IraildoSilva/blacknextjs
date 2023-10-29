import { GetStaticProps, NextPage } from 'next'
import { ReactNode, useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'

interface IApiResponse {
  name: string
  timestamp: Date
}

export const getStaticProps: GetStaticProps = async () => {
  const staticData = await fetch(
    `${process.env.NEXT_PUBLIC_APIURL}/api/hello`
  ).then((res) => res.json())

  return {
    props: {
      staticData,
    },
    revalidate: 10,
  }
}

const Static: NextPage = (props: {
  children?: ReactNode
  staticData?: IApiResponse
}) => {
  const [clientSideData, setClienteSideData] = useState<IApiResponse>()

  useEffect(() => {
    async function fetchData() {
      const data = await fetch('/api/hello').then((result) => result.json())

      setClienteSideData(data)
    }

    fetchData()
  }, [props])

  return (
    <Container tag={'main'}>
      <h1 className="my-5">Como funcionam as renderizações no nextJS</h1>

      <Row>
        <Col>
          <h3>Gerado no estaticamente durante o build:</h3>
          <h2>{props.staticData?.timestamp.toString()}</h2>
        </Col>
        <Col>
          <h3>Gerado no cliente:</h3>
          <h2>{clientSideData?.timestamp.toString()}</h2>
        </Col>
      </Row>
    </Container>
  )
}

export default Static
