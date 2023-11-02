import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="flex h-28 w-full items-center bg-slate-100 px-10">
      <Link href="/">
        <div className="flex items-center gap-8">
          <Image
            src="/logos/logo-128.png"
            width={96}
            height={96}
            alt="Monkey split logo"
            priority={false}
            placeholder="blur"
            blurDataURL="/logos/logo-32.png"
          />
          <p className="text-5xl font-bold">Mon(k)ey Split</p>
        </div>
      </Link>
    </div>
  )
}
