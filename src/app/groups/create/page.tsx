'use client'

import { revalidate } from '@/utils/revalidate-utils'
import { FormEvent, useState } from 'react'

type CreateGroup = {
  name: string
  description: string
  memberNames: string[]
}

const initialState: any = {
  name: '',
  description: '',
}

export default function CreateGroup() {
  const [forms, setForm] = useState<CreateGroup>(initialState)

  const onFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/groups`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(forms),
    })

    revalidate('groups')
  }

  return (
    <>
      <div>
        <h1>Create Group</h1>
      </div>

      <form onSubmit={onFormSubmit}>
        <input
          className="border"
          type="text"
          name="name"
          id=""
          onChange={(event) => setForm({ ...forms, name: event.target.value })}
        />
        <input
          className="border"
          type="text"
          name="description"
          id=""
          onChange={(event) =>
            setForm({ ...forms, description: event.target.value })
          }
        />
        <button type="submit">Create</button>
      </form>
    </>
  )
}
