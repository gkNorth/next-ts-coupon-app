import Image from 'next/image'
import Link from 'next/link'
import { Coupon } from 'types'
import dayjs from 'dayjs'

export default function CouponCard({ coupon }: Coupon) {
  const now = new Date()
  const isExpiredCoupon = new Date(coupon.public_ended) < now
  return (
    <>
      <li className={`card ${isExpiredCoupon ? 'isExpired' : ''}`}>
        <Link
          href={`/coupon/${coupon.id}`}
          className="coupon-link"
        >
          <div className="coupon-top">
            <div className="tags">
              <span className="brand">
                <Image
                  src={`/brand/brand${coupon.brand_id}.png`}
                  alt={coupon.title}
                  className="brand-img"
                  width={36}
                  height={36}
                />
              </span>
              <span
                className={`category id-${coupon.category_id}`}
              >
                {coupon.category}
              </span>
            </div>
            <p className="ttl">{coupon.title}</p>
          </div>
          {isExpiredCoupon ?
            <p className='expiration-date'>期限切れ</p> :
            <p className='expiration-date'>{dayjs(coupon.public_ended).format('YYYY/MM/DD')}まで有効</p>
          }
          <Image
            src={coupon.image.url}
            alt={coupon.title}
            className="coupon-img"
            width={200}
            height={200}
          />
        </Link>
      </li>
      <style jsx>{`
        .card {
          background: #fff;
          display: flex;
          width: calc(50% - 2px);
          &.isExpired {
            background: #e8eaf1;
          }
        }
        .card:not(:nth-child(1), :nth-child(2)) {
          margin-top: 4px
        }
        :global(.coupon-link) {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          justify-content: space-between;
        }
        .coupon-top {
          display: flex;
          flex: 1 1 100%;
          flex-direction: column;
          padding: 10px 10px 0;
        }
        .tags {
          align-items: center;
          display: flex;
        }
        .category {
          border: 1px solid #64aac8;
          border-radius: 5px;
          color: #64aac8;
          font-size: 0.7rem;
          margin-left: 10px;
          padding: 1px 2px;
        }
        .id-2 {
          border-color: #ffa046;
          color: #ffa046;
        }
        .id-3 {
          border-color: #bbbbc6;
          color: #bbbbc6;
        }
        .brand {
          border-radius: 10px;
          height: 36px;
          overflow: hidden;
          width: 36px;
        }
        .expiration-date {
          color: #777;
          font-size: 0.7rem;
        }
        .ttl {
          color: #1a2a72;
          font-size: 0.85rem;
          font-weight: bold;
          line-height: 1.2;
          padding: 10px 0;
        }
        :global(.coupon-img) {
          height: 62.5%;
          object-fit: cover;
          width: 100%;
        }
      `}</style>
    </>
  )
}