export default function Header() {
  return (
    <>
      <header className="header">
        <p className="ttl">クーポン</p>
      </header>
      <style jsx>{`
        .header {
          background: #fff;
          box-shadow: 0px -2px 5px #3c3c5a;
          position: fixed;
          top: 0;
          width: 100%;
        }
        .ttl {
          font-size: 1.2rem;
          font-weight: bold;
          padding: 8px 0;
          text-align: center;
        }
      `}</style>
    </>
  )
}