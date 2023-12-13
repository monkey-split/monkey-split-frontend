import { getGroup } from '../http-group.service'

export default async function GroupPage({
  params,
}: {
  params: { id: string }
}) {
  const group = await getGroup(+params.id)

  return (
    <div>
      <h1>{group.name}</h1>
      <h2>Description :</h2>
      <p>{group.description}</p>
    </div>
  )
}
