import Link from "next/link"
import { useRouter } from 'next/router';

export default function CategoryList() {
  const router = useRouter()
  const { categoryid } = router.query

  const categoryNum = categoryid ? Number(categoryid) : 0
  const categories = ['すべて', 'カテゴリ1', 'カテゴリ2', 'カテゴリ3']

  return (
    <>
      <ul className="list">
        {categories.map( (category, i) => (
          <li
            key={i}
            className={`item ${i === categoryNum ? 'is-current': ''}`}
          >
            <Link 
              href={i === 0 ? '/category-all' : `/category/${i}`}
              className="category-link"
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .list {
          display: flex;
          margin-top: 44px;
          overflow: auto;
        }
        .item {
          flex-shrink: 0;
        }
        :global(.category-link) {
          color: #535f95;
          display: inline-block;
          padding: 15px 20px;
        }
        .is-current {
          border-bottom: 2px solid #ff5015;
        }
        .is-current :global(.category-link) {
          color: #ff5015;
          font-weight: bold;
        }
      `}</style>
    </>
  )
}