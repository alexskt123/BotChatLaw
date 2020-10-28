import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div>
      <h1>
        Testing
      </h1>
      <div>
        <Link href="/aboutus">aboutus</Link>
      </div>
      <div>
        <Link href="/faq">FAQ</Link>
      </div>
      {children}
    </div>
  )
}
