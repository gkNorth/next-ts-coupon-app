import Link from "next/link"
import { useRouter } from 'next/router'

export const CouponPage = () => {
  const router = useRouter()
  const { couponid } = router.query

  return (
    <>
      <div>ID : {couponid}</div>
      <div>クーポンページ</div>
      <Link href="/category-all">一覧へ</Link>
    </>
  )
}
export default CouponPage