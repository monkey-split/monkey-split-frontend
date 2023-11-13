import SplitCard from '@/components/split/split-card'
// import { splitsMock } from '@/mocks/splits.mock'
import Link from 'next/link'
import { getGroups } from './http-group.service'

export default async function GroupsPage() {
  const groups = await getGroups()

  return (
    <>
      <div className="flex h-full w-full justify-center">
        <div className=" grid max-h-full w-fit grid-cols-2 gap-5 overflow-auto p-5">
          {groups.map((group) => (
            <Link key={group.id} href={`/groups/${group.id}`}>
              <SplitCard split={group} />
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
