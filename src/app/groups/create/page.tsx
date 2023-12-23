import { CreateGroup } from '@/models/create-group'
import { createGroup } from '../http-group.service'
import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import TextInput from '@/components/input/text-input'
import TextArea from '@/components/input/text-area'
import AddTextListForm from '@/components/form/add-text-list-form'

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
        <div className="flex w-[40vw] items-end justify-between">
          <form
            className="flex w-80 flex-col items-center gap-5"
            action={createGroupAction}
          >
            <TextInput
              required
              name="name"
              id="name"
              label="Nom du split"
              placeholder="Nom du split"
              additionalClasses="input-primary"
            />
            <TextArea
              name="description"
              id="description"
              label="Description"
              placeholder="Description"
              additionalClasses="input-primary h-28"
            />
            <TextInput
              required
              name="creator"
              id="creator"
              label="Ton nom"
              placeholder="Ton nom"
              additionalClasses="input-primary"
            />
            <button type="submit" className="btn btn-accent w-full">
              Créer
            </button>
          </form>
          <AddTextListForm />
        </div>
      </div>
    </>
  )
}
