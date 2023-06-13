import { useRouter } from 'next/router'
import { client } from "libs/client"
import { CouponDetail } from 'types'
import CategoryAll from 'pages/category-all'

interface Props {
  coupons: CouponDetail[]
}

export default function Category({ coupons } : Props) {
  const router = useRouter();
  const { categoryid } = router.query;

  const categories = ['すべて', 'カテゴリ1', 'カテゴリ2', 'カテゴリ3']

  return <CategoryAll categoryid={categoryid} coupons={coupons} title={categories[Number(categoryid)]} />
}

export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: "coupons", queries: {limit: 1000} })

  return {
    props: {
      coupons: data.contents,
    },
  }
}