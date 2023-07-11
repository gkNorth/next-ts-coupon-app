import Link from "next/link"
import Image from "next/image"
import { useRouter } from 'next/router'
import { client } from "libs/client"
import Head from "components/organisms/Head"
import Header from 'components/organisms/Header'
import Footer from 'components/organisms/Footer'
import { CouponDetail } from 'types'

interface Props {
  coupons: CouponDetail[]
}

export default function CouponPage({coupons}: Props) {
  const router = useRouter()
  const { couponid } = router.query

  const displayCoupon = coupons.find(coupon => coupon.id === Number(couponid))

  if(!displayCoupon) {
    return <p>404ページです</p>
  }
  return (
    <>
      <Head title={displayCoupon.title}/>
      <div className="container">
        <Header />
        <div className="coupon-page">
          <div className="contents">
            <h1>{displayCoupon.title}</h1>
            <Image
              src={displayCoupon.image.url}
              alt={displayCoupon.title}
              className="coupon-img"
              width={600}
              height={336}
            />
            <div className="sub">
              <p>{displayCoupon.category}</p>
              <p>利用期限 : {displayCoupon.public_started} ~ {displayCoupon.public_ended}</p>
            </div>
          </div>
          <div>クーポンページ</div>
          <Link className="to-home-link" href="/category-all">一覧へ</Link>
        </div>
        <Footer />
      </div>
      <style jsx>{`
        .coupon-page {
          margin-top: 50px;
        }
        h1 {
          font-size: 1.5rem;
          font-weight: bold;
        }
        :global(.to-home-link) {
          color: blue;
          text-decoration: underline;
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