import CouponCard from 'components/molecules/CouponCard'
import { CouponDetail } from 'types'

interface Props {
  categoryid: string | string[] | undefined
  brandid?: string | null
  coupons: CouponDetail[]
}

export default function CouponList({ categoryid = undefined, brandid = null, coupons = [] }: Props) {
  const couponFilteredByCategory =
    categoryid ? coupons.filter(v => Number(categoryid) === v.category_id) : coupons

  const displayCoupons =
    brandid ? couponFilteredByCategory.filter(v => Number(brandid) === v.brand_id) : couponFilteredByCategory

  const now = new Date()
  const descendingSortedCoupons = displayCoupons.slice().sort((a, b) => a.public_ended > b.public_ended ? 1 : -1)
  const expiredCoupons = descendingSortedCoupons.filter(coupon => new Date(coupon.public_ended) < now)
  const validCoupons = descendingSortedCoupons.filter(coupon => new Date(coupon.public_ended) >= now)
  validCoupons.push(...expiredCoupons)

  return (
    <>
      <ul className="list">
        {validCoupons.map( (v, index) => {
          return <CouponCard key={index} coupon={v} />
        })}
        <style jsx>{`
          .list {
            background: #f3f4f5;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding-bottom: 4px;
          }
        `}</style>
      </ul>
    </>
  )
}