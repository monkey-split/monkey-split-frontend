import { splitsMock } from '@/mocks/splits.mock'

export default async function SplitPage({
  params,
}: {
  params: { id: string }
}) {
  return (
    <div>
      <h1>{params.id}</h1>
      <h1>
        {
          splitsMock.find((splitMock) => splitMock.id.toString() === params.id)
            ?.name
        }
      </h1>
    </div>
  )
}
