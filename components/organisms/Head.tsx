import type { NextPage } from 'next'
import Head from 'next/head'

interface MyHeadProps {
  title?: string
  thumbnailUrl?: string
  description?: string
}

const MyHead: NextPage<MyHeadProps> = ({title='gkdev'}) => {

  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}

export default MyHead