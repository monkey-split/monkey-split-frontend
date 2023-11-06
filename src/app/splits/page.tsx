import SplitCard from '@/components/split/split-card'
import { splitsMock } from '@/mocks/splits.mock'
import Link from 'next/link'

export default function SplitsPage() {
  const splits = splitsMock

  return (
    <>
      <div className="flex h-full w-full justify-center">
        <div className=" grid max-h-full w-fit grid-cols-2 gap-5 overflow-auto p-5">
          {splits.map((split) => (
            <Link key={split.id} href={`/splits/${split.id}`}>
              <SplitCard split={split} />
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
