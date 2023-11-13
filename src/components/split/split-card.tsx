import { Group } from '@/models/group'

export default function SplitCard({ split }: { split: Group }) {
  return (
    <div className="flex h-56 w-80 flex-col justify-end border p-5 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      <p className="text-xl">{split.name}</p>
      <p className="line-clamp-1 text-slate-600">{split.description}</p>
    </div>
  )
}
