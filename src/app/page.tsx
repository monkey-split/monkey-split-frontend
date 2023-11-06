import Link from 'next/link'

export default function Home() {
  const test = 'bonjour'

  return (
    <div>
      <h1>Hello World</h1>
      <p>{test}</p>
      <Link href="/splits">
        <p className="m-5 w-fit rounded-xl bg-emerald-600 p-5 font-bold text-white hover:bg-emerald-500">
          Go to splits
        </p>
      </Link>
    </div>
  )
}
