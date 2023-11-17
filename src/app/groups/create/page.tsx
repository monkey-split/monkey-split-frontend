import { CreateGroup } from '@/models/create-group'
import { createGroup } from '../http-group.service'
import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

const GROUP_COOKIE = 'groupId_cookie'

export default function CreateGroupPage() {
  async function createGroupAction(formData: FormData) {
    'use server'

    if (!formData.get('name') || !formData.get('creator')) {
      return {}
    }

    const createGroupForm: CreateGroup = {
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      members: [
        {
          name: formData.get('creator') as string,
        },
      ],
    }

    const newGroup = await createGroup(createGroupForm)
    revalidateTag('groups')

    const userGroupIds: number[] = JSON.parse(
      cookies().get(GROUP_COOKIE)?.value || '[]'
    )
    userGroupIds.push(newGroup.id)
    cookies().set(GROUP_COOKIE, JSON.stringify(userGroupIds))

    redirect(`/groups/${newGroup.id}`)
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="py-16">
          <h1 className="text-6xl">Créé ton Split !</h1>
        </div>

        <form
          className="flex w-80 flex-col items-center gap-5"
          action={createGroupAction}
        >
          <div className="flex w-full flex-col">
            <label htmlFor="name">Nom du split</label>
            <input
              required
              className="h-14 border p-2"
              type="text"
              name="name"
              id="name"
              data-form-type="other"
            />
          </div>
          <div className="flex w-full flex-col">
            <label htmlFor="description">Description</label>
            <textarea
              className="h-28 border p-2"
              name="description"
              id="description"
              data-form-type="other"
            />
          </div>
          <div className="flex w-full flex-col">
            <label htmlFor="creator">Ton nom</label>
            <input
              required
              className="h-14 border p-2"
              type="text"
              name="creator"
              id="creator"
              data-form-type="other"
            />
          </div>

          <button
            type="submit"
            className="m-5 w-full rounded-xl border-2 border-lime-700 bg-gradient-to-r from-amber-400 to-lime-500 p-5 font-bold text-black hover:border-black hover:shadow-lg"
          >
            Create
          </button>
        </form>
      </div>
    </>
  )
}
