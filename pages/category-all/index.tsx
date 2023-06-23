import { useSearchParams } from "next/navigation"
import { client } from "libs/client"
import { CouponDetail } from 'types'
import Head from "components/organisms/Head"
import Header from 'components/organisms/Header'
import Footer from 'components/organisms/Footer'
import CategoryList from 'components/organisms/CategoryList'
import BrandList from 'components/organisms/BrandList'
import CouponList from 'components/organisms/CouponList'

interface Props {
  categoryid?: string | string[] | undefined
  coupons: CouponDetail[]
  title: string
}

export default function CategoryAll({ categoryid = undefined, coupons, title = 'gkdev' } : Props) {
  const searchParams = useSearchParams()
  const brandid = searchParams.get('brandid')

  return (
    <>
      <Head title={title}/>
      <div className="container">
        <Header />
        <CategoryList />
        <BrandList />
        <CouponList
          categoryid={categoryid}
          brandid={brandid}
          coupons={coupons}
        />
        <Footer />
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
      `}</style>
    </>
  )
}

export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: "coupons", queries: {limit: 1000} })

  return {
    props: {
      coupons: data.contents,
    },
  }
}