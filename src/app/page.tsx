import Link from 'next/link'

export default function Home() {
  const test = 'bonjour'

  return (
    <div>
      <h1>Hello World</h1>
      <p>{test}</p>
      <Link href="/groups">
        <button className="btn btn-primary">Go to splits</button>
      </Link>
    </div>
  )
}
