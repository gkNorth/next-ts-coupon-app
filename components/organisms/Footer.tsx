export default function Footer() {
  return (
    <>
      <footer className="footer">
        <p className="ttl">5期Q4(2023年4月～6月)</p>
      </footer>
      <style jsx>{`
        .footer {
          background: #fff;
          border-top: 1px solid #cccccc;
          margin-top: auto;
          width: 100%;
        }
        .ttl {
          font-size: 1rem;
          padding: 8px 0;
          text-align: center;
        }
      `}</style>
    </>
  )
}