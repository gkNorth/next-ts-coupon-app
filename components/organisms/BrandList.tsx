import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

export default function BrandList() {
  const searchParams = useSearchParams();
  const brandid = searchParams.get('brandid')

  return (
    <>
      <ul className="brand-list">
        {[...Array(11)].map( (_, i) => (
          <li className="item" key={i}>
            <Link 
              href={`/category-all?brandid=${i+1}`}
              className={`brand-link ${i+1 === Number(brandid) ? 'iscurrent' : ''}`}
            >
              <Image
                src={`/brand/brand${i+1}.png`}
                alt={`brand${i+1}`}
                width={60}
                height={60}
                className="brand-img"
              />
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .brand-list {
          background: #f3f4f5;
          display: flex;
          overflow: auto;
          padding: 8px;
        }
        .item {
          flex-shrink: 0;
        }
        .item:not(:first-child) {
          margin-left: 8px;
        }
        .brand-list:global(.brand-link) {
          border: 1px solid transparent;
          border-radius: 10px;
          display: inline-block;
          overflow: hidden;
          vertical-align: bottom;
        }
        .brand-list:global(.iscurrent) {
          border: 1px solid #ff5015;
        }
        :global(.brand-img) {
          height: 60px;
          object-fit: contain;
          vertical-align: bottom;
          width: 60px;
        }
      `}</style>
    </>
  )
}