import SplitCard from '@/components/split/split-card'
// import { splitsMock } from '@/mocks/splits.mock'
import Link from 'next/link'
import { getGroups } from './http-group.service'

export default async function GroupsPage() {
  const groups = await getGroups()

  return (
    <>
      <div className="flex h-full w-full flex-col items-center">
        <Link href="/groups/create">
          <button className="btn btn-primary m-5">
            Créer un nouveau Split
          </button>
        </Link>
        <div className="grid w-fit grid-cols-2 gap-5 overflow-auto">
          {[...groups].map((group) => (
            <Link key={group.id} href={`/groups/${group.id}`}>
              <SplitCard split={group} />
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
